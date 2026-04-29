// components/molecules/DeleteConfirmModal.tsx

import { Modal, closeModal } from "@/components/factory/organisms/modal";
import { Button } from "@/components/factory/atoms/button";

type Props = {
    id: string;
    onDelete: (id: string) => void;
};

export const DeleteConfirmModal = ({ id, onDelete }: Props) => {
    const modalId = `delete-${id}`;

    return (
        <Modal modalId={modalId} title="Delete Note">
            <p className="text-base-content/70">
                Are you sure you want to delete this note?
            </p>

            <div className="modal-action">
                <Button
                    onClick={() => closeModal(modalId)}
                >
                    Cancel
                </Button>
                <Button
                    color="error"
                    onClick={() => {
                        onDelete(id);
                        closeModal(modalId);
                    }}
                >
                    Delete
                </Button>
            </div>
        </Modal>
    );
};