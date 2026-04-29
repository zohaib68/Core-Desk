// components/molecules/NoteFilter.tsx

import { SearchInput } from "../atoms/input";



type Props = {
    value: string;
    onChange: (val: string) => void;
};

export const NoteFilter = ({ value, onChange }: Props) => {
    return (
        <SearchInput
            placeholder="Search notes..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="max-w-xs"
        />
    );
};