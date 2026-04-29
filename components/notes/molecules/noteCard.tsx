// components/molecules/NoteCard.tsx

import { getRandomColor } from "@/components/factory/helpers/helpers";
import { Note } from "../templates/notesLayout";



type Props = {
    note: Note;
};


const colorMap = {
    primary: 'bg-primary/5 border border-primary/10! ',
    success: 'bg-success/5 border border-success/10! ',
    error: 'bg-error/5 border border-error/10! ',
    warning: 'bg-warning/5 border border-warning/10! ',
    info: 'bg-info/5 border border-info/10! ',
    accent: 'bg-accent/5 border  border-accent/10! ',
    neutral: 'bg-neutral/5 border border-neutral/10! ',
    secondary: "bg-secondary/5 border border-secondary/10!"
}


export const NoteCard = ({ note }: Props) => {
    const color = getRandomColor()

    const containerClass = `text-base-content/70 card shadow-sm ${colorMap[color as keyof typeof colorMap]} p-4 shadow-xs`

    return (
        <div className={containerClass}>
            <h2 className="font-semibold capitalize">{note.title}</h2>
            <p className="text-sm ">
                {note.description}
            </p>
        </div>
    );
};