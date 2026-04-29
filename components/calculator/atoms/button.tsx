import { ButtonHTMLAttributes } from "react";

type Props = {
    label: string;
    variant?: "primary" | "secondary" | "accent" | "neutral";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary hover:bg-primary/20",
    secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    accent: "bg-accent text-accent-content hover:bg-accent/20",
    neutral: "bg-base-100/30 text-base-content hover:bg-base-300",
};

export const Button = ({
    label,
    variant = "neutral",
    className = "",
    ...props
}: Props) => {
    return (
        <button
            {...props}
            className={`btn border-0 shadow-none!  ${variantClasses[variant]} ${className}`}
        >
            {label}
        </button>
    );
};