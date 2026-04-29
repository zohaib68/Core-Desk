// components/atoms/TextArea.tsx

import { TextareaHTMLAttributes } from "react";

type Props = {} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className = "", ...props }: Props) => {
    return (
        <textarea
            {...props}
            className={`textarea textarea-bordered w-full ${className}`}
        />
    );
};