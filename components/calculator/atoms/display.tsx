// components/atoms/Display.tsx
import { HTMLAttributes } from "react";

type Props = {
    value: string;
} & HTMLAttributes<HTMLDivElement>;

export const Display = ({
    value,
    className = "",
    ...props
}: Props) => {
    return (
        <div
            {...props}
            className={`bg-base-100/30 p-4 rounded-xl text-right text-2xl 
      text-base-content break-all ${className}`}
        >
            {value || "0"}
        </div>
    );
};