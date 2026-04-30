// components/molecules/EditNoteModal.tsx

"use client";

import { useState } from "react";
import { Note } from "../templates/notesLayout";
import { Modal, closeModal } from "@/components/factory/organisms/modal";
import { Button } from "@/components/factory/atoms/button";
import { Input } from "@/components/factory/atoms/input";
import { TextArea } from "@/components/factory/atoms/textArea";

type Props = {
    note: Note;
    onSave: (note: Note) => void;
};

export const EditNoteModal = ({ note, onSave }: Props) => {
    const modalId = `edit-${note.id}`;

    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);

    const handleSave = () => {
        onSave({ ...note, title, description });
        closeModal(modalId);
    };

    return (
        <Modal modalId={modalId} title="Edit Note">
            <div className="space-y-2">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="modal-action">
                <Button size="sm" onClick={handleSave}>
                    Save
                </Button>
            </div>
        </Modal>
    );
};