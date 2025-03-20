import React, { useState } from 'react';
import { Modal, ModalContent } from './modal';
import { Dialog, DialogButtonArea, DialogDescriptionArea, DialogHeading } from './dialog';
import ActionButton, { Variant } from '@/components/atoms/ActionButton';


// !!!!!!!!!! ----- This is just an example!!!! NEVER use this component in the UI -----!!!!!!!!!!   <========================
export function ModalDialogExampleControlled() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}> Open a modal dialog </button>   
            <Modal open={isOpen} onOpenChange={setOpen}>
                <ModalContent>
                    <DialogHeading>You have unsaved changes</DialogHeading>

                    <DialogDescriptionArea>Do you want to save changes?</DialogDescriptionArea>

                    <DialogButtonArea>
                            <ActionButton variant={Variant.Secondary}>No</ActionButton>
                            <ActionButton variant={Variant.Primary}>Yes</ActionButton>
                    </DialogButtonArea>
                </ModalContent>
            </Modal>
        </div>
    );
}

// !!!!!!!!!! ----- This is just an example!!!! NEVER use this component in the UI -----!!!!!!!!!!   <========================
export function DialogExampleControlled() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}> Open a dialog </button>   
            <Dialog
                isOpen={isOpen}
                onClose={setOpen}
                heading="You have unsaved changes"
                description="Do you want to save changes?"
                buttons={[                
                    { text: "No", onClick: () => console.log("No clicked"), variant: Variant.Secondary },
                    { text: "Yes", onClick: () => console.log("Yes clicked"), variant: Variant.Primary },
                ]}
        />
        </div>
    );
}