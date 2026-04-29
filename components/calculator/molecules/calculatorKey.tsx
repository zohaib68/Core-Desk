// components/molecules/CalculatorKey.tsx
import { Button } from "../atoms/button";

type Props = {
    label: string;
    onClick: (val: string) => void;
    variant?: "primary" | "secondary" | "accent" | "neutral";
};

export const CalculatorKey = ({
    label,
    onClick,
    variant = "neutral",
}: Props) => {
    return (
        <Button
            label={label}
            variant={variant}
            onClick={() => onClick(label)}
        />
    );
};