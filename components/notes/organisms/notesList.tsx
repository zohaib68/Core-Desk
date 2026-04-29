// components/organisms/NoteList.tsx

import { NoteCard } from "../molecules/noteCard";
import { Note } from "../templates/notesLayout";



type Props = {
    notes: Note[];
    onUpdate: (note: Note) => void;
    onDelete: (id: string) => void;
};

export const NoteList = ({ notes, onUpdate, onDelete }: Props) => {
    if (!notes.length) {
        return (
            <div className="text-center text-base-content/60">
                No notes found
            </div>
        );
    }


    return (
        <div className="max-w-full sm:max-w-3xl sm:min-w-2xl lg:max-w-4xl lg:min-w-3xl xl:max-w-7xl xl:min-w-6xl ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};