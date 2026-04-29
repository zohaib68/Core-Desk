
import { Icon } from "@iconify/react";
import { Note } from "../templates/notesLayout";
import { Button } from "@/components/factory/atoms/button";
import { ViewNoteModal } from "./viewNote";
import { EditNoteModal } from "./editNote";
import { DeleteConfirmModal } from "./delNote";
import { openModal } from "@/components/factory/organisms/modal";



type Props = {
    note: Note;
    onUpdate: (note: Note) => void;
    onDelete: (id: string) => void;
};


export const NoteCard = ({ note, onUpdate, onDelete }: Props) => {

    console.log(onDelete)
    return (
        <div className="h-40 text-base-content/70 rounded-md rounded-bl-4xl rounded-tr-4xl rounded-tl-xl  py-2 px-2 flex flex-col gap-2 bg-white/15!  border border-white/10  ">
            {/* Modals */}
            <ViewNoteModal note={note} />
            <EditNoteModal note={note} onSave={onUpdate} />
            <DeleteConfirmModal id={note.id} onDelete={onDelete} />

            <h2 className="font-semibold capitalize">{note.title}</h2>
            <p className="break-all line-clamp-4 leading-tight text-sm">
                {note.description}
            </p>
            <div className="grow flex items-end justify-end gap-2">
                <Button onClick={() => openModal(`view-${note.id}`)} size='xs' color="secondary" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'lets-icons:view'} />} variant="outlined"  >
                    <></>
                </Button>
                <Button onClick={() => openModal(`edit-${note.id}`)} size='xs' color="secondary" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'boxicons:edit-filled'} />} variant="outlined"  >
                    <></>
                </Button>
                <Button onClick={() => openModal(`delete-${note.id}`)} size='xs' color="error" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'material-symbols:delete-outline'} />} variant="outlined"  >
                    <></>
                </Button>
            </div>
        </div>
    );
};