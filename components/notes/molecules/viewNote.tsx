// components/molecules/ViewNoteModal.tsx

import { Note } from "../templates/notesLayout";
import { Modal } from "@/components/factory/organisms/modal";

type Props = {
    note: Note;
};

export const ViewNoteModal = ({ note }: Props) => {
    const modalId = `view-${note.id}`;

    return (
        <Modal modalId={modalId} title="View Note">
            <h2 className="font-semibold text-lg">{note.title}</h2>
            <p className="text-base-content/70 mt-2 break-all">
                {note.description}
            </p>
        </Modal>
    );
};