// components/molecules/NoteFormFields.tsx

import { Input } from "@/components/factory/atoms/input";
import { TextArea } from "@/components/factory/atoms/textArea";




type Props = {
    title: string;
    description: string;
    onTitleChange: (val: string) => void;
    onDescriptionChange: (val: string) => void;
};

export const NoteFormFields = ({
    title,
    description,
    onTitleChange,
    onDescriptionChange,
}: Props) => {
    return (
        <div className="space-y-2">
            <Input
                placeholder="Title"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
            />

            <TextArea
                placeholder="Description"
                value={description}
                onChange={(e) => onDescriptionChange(e.target.value)}
            />
        </div>
    );
};