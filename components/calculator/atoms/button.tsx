import { ButtonHTMLAttributes } from "react";

type Props = {
    label: string;
    variant?: "primary" | "secondary" | "accent" | "neutral";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary hover:bg-primary/20",
    secondary: "bg-secondary/10 text-secondary hover:bg-secondary/20",
    accent: "bg-accent/10 text-accent hover:bg-accent/20",
    neutral: "bg-base-100 text-base-content hover:bg-base-300",
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
            className={`btn border-0.5 ${variantClasses[variant]} ${className}`}
        >
            {label}
        </button>
    );
};