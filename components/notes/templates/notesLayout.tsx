// app/notes/page.tsx

"use client";

import { useEffect, useState } from "react";
import { NoteForm } from "@/components/notes/organisms/noteForm";
import { NoteList } from "@/components/notes/organisms/notesList";
import { NoteFilter } from "@/components/notes/molecules/noteFilter";
import { Button } from "../atoms/button";
import { Icon } from "@iconify/react";
import { closeModal, Modal, openModal } from "@/components/factory/organisms/modal";
import MeshGradient from "@/components/factory/organisms/meshGradient";
import { MeshLayout } from "@/components/factory/templates/meshLayout";

export type Note = {
    id: string;
    title: string;
    description: string;
};

const testNotes: Note[] = new Array(20).fill({ title: "test", description: "test" })

export const NotesPageLayout = () => {
    const [notes, setNotes] = useState<Note[]>(testNotes);
    const [filter, setFilter] = useState("");

    // useEffect(() => {
    //     const stored = localStorage.getItem("notes");
    //     if (stored) setNotes(JSON.parse(stored));
    // }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (note: Omit<Note, "id">) => {
        setNotes((prev) => [
            { ...note, id: crypto.randomUUID() },
            ...prev,
        ]);

        closeModal('add-note')
    };

    const filtered = notes.filter((n) =>
        n.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="relative">

            <MeshLayout />

            {/* 🔥 CONTENT */}
            <div className="relative z-10 p-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Notes</h1>
                    <Button label="Add Note" onClick={() => openModal('add-note')}>
                        <Icon icon={'gridicons:add-outline'} className="w-4 h-4" />
                    </Button>
                </div>

                <Modal modalId="add-note" title="Add Note">
                    <NoteForm onAdd={addNote} />
                </Modal>

                <div className="flex justify-center items-center">
                    <NoteFilter value={filter} onChange={setFilter} />
                </div>

                <div className="flex justify-center items-center">
                    <NoteList notes={filtered} />
                </div>
            </div>
        </div>
    );
};

