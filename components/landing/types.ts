import { ReactNode } from "react";

/* BUTTON */
export type ButtonVariant = "primary" | "outline";

export interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    href?: string;
    onClick?: () => void;
}

/* FEATURE CARD */
export interface FeatureCardProps {
    title: string;
    description: string;
    icon: string
}

/* SECTION WRAPPER (optional but useful) */
export interface SectionProps {
    children: ReactNode;
    className?: string;
}