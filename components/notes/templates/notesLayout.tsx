// app/notes/page.tsx

"use client";

import { useEffect, useState } from "react";
import { NoteForm } from "@/components/notes/organisms/noteForm";
import { NoteList } from "@/components/notes/organisms/notesList";
import { NoteFilter } from "@/components/notes/molecules/noteFilter";
import { Button } from "@/components/factory/atoms/button";
import { Icon } from "@iconify/react";
import { closeModal, Modal, openModal } from "@/components/factory/organisms/modal";
import { MeshLayout } from "@/components/factory/templates/meshLayout";

export type Note = {
    id: string;
    title: string;
    description: string;
};

export const NotesPageLayout = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("notes");
        if (stored) setNotes(JSON.parse(stored));
    }, []);

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

    const updateNote = (note: Note) => {
        setNotes((prev) => prev.map((n) => (n.id === note.id ? note : n)));
    };

    const deleteNote = (id: string) => {
        setNotes((prev) => prev.filter((n) => n.id !== id));
    };


    return (
        <div className="relative">

            <MeshLayout />

            {/* 🔥 CONTENT */}
            <div className="relative z-10 p-4 flex flex-col gap-6">
                <div className="flex justify-end items-center">
                    <Button className="rounded-full" startIcon={<Icon icon={'gridicons:add-outline'} className="w-4 h-4" />} onClick={() => openModal('add-note')}>
                        Add Note
                    </Button>
                </div>

                <Modal modalId="add-note" title="Add Note">
                    <NoteForm onAdd={addNote} />
                </Modal>

                <div className="flex justify-center items-center">
                    <NoteFilter value={filter} onChange={setFilter} />
                </div>

                <div className="flex justify-center items-center">
                    <NoteList notes={filtered} onUpdate={updateNote} onDelete={deleteNote} />
                </div>
            </div>
        </div>
    );
};

