// components/atoms/Button.tsx

import { ButtonHTMLAttributes } from "react";

type Props = {
    label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    label,
    className = "",
    children,
    ...props
}: Props) => {
    return (
        <button
            {...props}
            className={`btn btn-sm btn-primary ${className}`}
        >
            {label}
            {children}
        </button>
    );
};