// components/molecules/NoteFilter.tsx

import { Input } from "../atoms/input";



type Props = {
    value: string;
    onChange: (val: string) => void;
};

export const NoteFilter = ({ value, onChange }: Props) => {
    return (
        <Input
            placeholder="Search notes..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="max-w-xs"
        />
    );
};