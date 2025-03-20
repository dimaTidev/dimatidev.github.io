import css from "./css/dialog.css";

import React, { useEffect, useId } from "react";
import { Modal, ModalContent, useModalContext } from "./modal";
import ActionButton from "@/lib/UIComponents/ActionButton";

export const DialogHeading = React.forwardRef(function DialogHeading({ children, ...props }, ref) {
    const { setLabelId } = useModalContext();
    const id = useId();
  
    useEffect(() => {
      setLabelId(id);
      return () => setLabelId(undefined);
    }, [id, setLabelId]);
  
    return (
      <h4 {...props} ref={ref} id={id} className={`dialog-heading ${props.className}`}>
        {children}
      </h4>
    );
});


export const DialogDescriptionArea = React.forwardRef(function DialogDescriptionArea({ children, ...props }, ref) {
    const { setDescriptionId } = useModalContext();
    const id = useId();
  
    useEffect(() => {
      setDescriptionId(id);
      return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);
  
    return (
      <div {...props} ref={ref} id={id} className={`dialog-description-area ${props.className}`}>
        {children}
      </div>
    );
});

export const DialogButtonArea = React.forwardRef(function DialogButtonArea({ children, ...props }, ref) {
  const id = useId();

  return (
    <div {...props} ref={ref} id={id} className={`dialog-buttons-area ${props.className}`}>
      {children}
    </div>
  );
});

// TODO: we should probably not add a dependency for the ActionButton from these components
/**
 * Renders a customizable dialog with a heading, description, and buttons.
 *
 * @param {Object} props - The properties for the Dialog component.
 * @param {boolean} props.isOpen - Determines if the dialog is open.
 * @param {Function} props.onClose - Callback when the dialog is closed.
 * @param {string} props.heading - The heading text of the dialog.
 * @param {string} props.description - The description text of the dialog.
 * @param {Array} props.buttons - An array of button objects.
 * @param {string} props.buttons[].text - The label for the button.
 * @param {Function} props.buttons[].onClick - Callback when the button is clicked.
 * @param {string} props.buttons[].variant - The style variant of the button.
 * @returns {JSX.Element} The rendered Dialog component.
 */
export function Dialog({isOpen, onClose, heading, description, buttons}) {
  return (
      <Modal open={isOpen} onOpenChange={onClose}>
          <ModalContent>
              <DialogHeading>{heading}</DialogHeading>
              <DialogDescriptionArea>{description}</DialogDescriptionArea>
              <DialogButtonArea>
                  {buttons.map(({ text, onClick, variant }, index) => (
                      <ActionButton key={index} onClick={onClick} variant={variant}>
                          {text}
                      </ActionButton>
                  ))}
              </DialogButtonArea>
          </ModalContent>
      </Modal>
  );
}