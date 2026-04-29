// components/organisms/NoteForm.tsx

"use client";

import { useState } from "react";
import { NoteFormFields } from "../molecules/noteFormFields";
import { Button } from "../atoms/button";


type Props = {
    onAdd: (note: { title: string; description: string }) => void;
};

export const NoteForm = ({ onAdd }: Props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (!title.trim()) return;

        onAdd({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <div className="card space-y-3">
            <NoteFormFields
                title={title}
                description={description}
                onTitleChange={setTitle}
                onDescriptionChange={setDescription}
            />

            <Button label="Add Note" onClick={handleSubmit} />
        </div>
    );
};