// components/molecules/Keypad.tsx
import { CalculatorKey } from "./calculatorKey";

type Props = {
    onKeyPress: (val: string) => void;
};

const keys = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
];

export const Keypad = ({ onKeyPress }: Props) => {
    return (
        <div className="grid grid-cols-4 gap-3 mt-4">
            {keys.map((key) => (
                <CalculatorKey
                    key={key}
                    label={key}
                    onClick={onKeyPress}
                />
            ))}
        </div>
    );
};