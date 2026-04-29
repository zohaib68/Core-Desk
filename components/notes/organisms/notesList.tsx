// components/organisms/NoteList.tsx

import { NoteCard } from "../molecules/noteCard";
import { Note } from "../templates/notesLayout";



type Props = {
    notes: Note[];
};

export const NoteList = ({ notes }: Props) => {
    if (!notes.length) {
        return (
            <div className="text-center text-base-content/60">
                No notes found
            </div>
        );
    }

    return (
        <div className="max-w-full sm:max-w-3xl sm:min-w-2xl lg:max-w-4xl lg:min-w-3xl xl:max-w-7xl xl:min-w-6xl ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};