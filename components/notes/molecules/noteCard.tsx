
import { Note } from "../templates/notesLayout";



type Props = {
    note: Note;
};


export const NoteCard = ({ note }: Props) => {


    return (
        <div className="h-24 text-base-content/70 card p-4 bg-white/10!  border border-white/10 backdrop-blur-xl ">
            <h2 className="font-semibold capitalize">{note.title}</h2>
            <p className="text-sm ">
                {note.description}
            </p>
        </div>
    );
};