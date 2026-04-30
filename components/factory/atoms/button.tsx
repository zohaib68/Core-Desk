// components/atoms/Button.tsx

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "filled" | "outlined" | "ghost";
type Size = "xs" | "sm" | "md" | "lg";

type DaisyColor =
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";

type BaseColor = "base-100" | "base-200" | "base-300";

type Color = DaisyColor | BaseColor;

type Props = {
    href?: string
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    color?: Color;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const colorStylesMap = {
    primary: {
        filled: "bg-primary text-primary-content border-primary hover:bg-primary/90",
        outlined:
            "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/40",
        ghost: "bg-transparent text-primary hover:bg-primary/40",
    },
    secondary: {
        filled:
            "bg-secondary text-secondary-content border-secondary hover:bg-secondary/90",
        outlined:
            "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/40",
        ghost: "bg-transparent text-secondary hover:bg-secondary/40",
    },
    accent: {
        filled:
            "bg-accent text-accent-content border-accent hover:bg-accent/90",
        outlined:
            "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/40",
        ghost: "bg-transparent text-accent hover:bg-accent/40",
    },
    neutral: {
        filled:
            "bg-neutral text-neutral-content border-neutral hover:bg-neutral/90",
        outlined:
            "bg-neutral/10 text-neutral border border-neutral/20 hover:bg-neutral/40",
        ghost: "bg-transparent text-neutral hover:bg-neutral/40",
    },
    info: {
        filled: "bg-info text-info-content border-info hover:bg-info/90",
        outlined:
            "bg-info/10 text-info border border-info/20 hover:bg-info/40",
        ghost: "bg-transparent text-info hover:bg-info/40",
    },
    success: {
        filled:
            "bg-success text-success-content border-success hover:bg-success/90",
        outlined:
            "bg-success/10 text-success border border-success/20 hover:bg-success/40",
        ghost: "bg-transparent text-success hover:bg-success/40",
    },
    warning: {
        filled:
            "bg-warning text-warning-content border-warning hover:bg-warning/90",
        outlined:
            "bg-warning/10 text-warning border border-warning/20 hover:bg-warning/40",
        ghost: "bg-transparent text-warning hover:bg-warning/40",
    },
    error: {
        filled: "bg-error text-error-content border-error hover:bg-error/90",
        outlined:
            "bg-error/10 text-error border border-error/10 hover:bg-error/40",
        ghost: "bg-transparent text-error hover:bg-error/40",
    },

    // ✅ base colors (UI surfaces)
    "base-100": {
        filled:
            "bg-base-100 text-base-content border-base-200 hover:bg-base-200",
        outlined:
            "bg-base-100/10 text-base-content border border-base-300/20 hover:bg-base-200",
        ghost: "bg-transparent text-base-content hover:bg-base-200",
    },
    "base-200": {
        filled:
            "bg-base-200 text-base-content border-base-300 hover:bg-base-300",
        outlined:
            "bg-base-200/10 text-base-content border border-base-300/20 hover:bg-base-300/50",
        ghost: "bg-transparent text-base-content hover:bg-base-300/50",
    },
    "base-300": {
        filled:
            "bg-base-300 text-base-content border-base-300 hover:bg-base-300/80",
        outlined:
            "bg-base-300/10 text-base-content border border-base-300/20 hover:bg-base-300/50",
        ghost: "bg-transparent text-base-content hover:bg-base-300/50",
    },
} as const;

export const Button = ({
    children,
    className,
    variant = "filled",
    size = "sm",
    color = "primary",
    startIcon,
    endIcon,
    fullWidth = false,
    loading = false,
    disabled,
    href,
    ...props
}: Props) => {
    const sizeStyles = {
        xs: "btn-xs",
        sm: "btn-sm",
        md: "",
        lg: "btn-lg",
    }[size];



    const variantStyles =
        colorStylesMap[color as keyof typeof colorStylesMap]?.[variant] ||
        colorStylesMap.primary.filled;

    const classes = clsx(
        "btn",
        sizeStyles,
        variantStyles,
        {
            "w-full": fullWidth,
            "loading": loading,
            "opacity-50 cursor-not-allowed": disabled,
        },
        className
    );

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }


    return (
        <button
            {...props}
            disabled={disabled || loading}
            className={classes}
        >
            {!loading && startIcon && <span>{startIcon}</span>}
            {children ?? null}
            {!loading && endIcon && <span>{endIcon}</span>}
        </button>
    );
};