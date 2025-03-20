import css from "./css/modal.css";

import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
  useId
} from "@floating-ui/react";

export function useModal({initialOpen = false, open: controlledOpen, onOpenChange: setControlledOpen} = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState();
  const [descriptionId, setDescriptionId] = useState();

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const setOpen = setControlledOpen !== undefined ? setControlledOpen : setUncontrolledOpen;

  const data = useFloating({
    open,
    onOpenChange: setOpen
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen === undefined
  });
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId
    }),
    [open, setOpen, interactions, data, labelId, descriptionId]
  );
}

const DialogContext = React.createContext(null);

export function useModalContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("Modal components must be wrapped in <Modal />");
  }

  return context;
}


export function Modal({ children, ...options }) {
  const dialog = useModal(options);
  return (
    <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
  );
}


export function ModalTrigger({ children, asChild = false, ...props }) {
    const context = useModalContext();
    const childrenRef = useRef(children && children.ref);
    const ref = useMergeRefs([context.refs.setReference, props.ref, childrenRef]);
  
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...(children.props || {}),
          "data-state": context.open ? "open" : "closed"
        })
      );
    }
  
    return (
      <div
        ref={ref}
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </div>
    );
}

export const ModalContent = React.forwardRef(function ModalContent(props, propRef) {
    const { context: floatingContext, ...context } = useModalContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);
  
    if (!floatingContext.open) return null;
  
    return (
      <FloatingPortal>
        <FloatingOverlay className="modal-overlay" lockScroll>
          <FloatingFocusManager context={floatingContext} disabled>
            <div
              ref={ref}
              aria-labelledby={context.labelId}
              aria-describedby={context.descriptionId}
              {...context.getFloatingProps(props)}
              className={`modal ${props.className}`}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    );
  });