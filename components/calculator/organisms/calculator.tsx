// components/organisms/Calculator.tsx
"use client";

import { useState } from "react";
import { Display } from "../atoms/display";
import { Keypad } from "../molecules/keyPad";
import { Button } from "../atoms/button";

export const Calculator = () => {
    const [expression, setExpression] = useState("");

    const handleKeyPress = (val: string) => {
        if (val === "=") {
            try {
                const result = eval(expression);
                setExpression(String(result));
            } catch {
                setExpression("Error");
            }
        } else {
            setExpression((prev) => prev + val);
        }
    };

    const handleClear = () => setExpression("");
    const handleBackspace = () =>
        setExpression((prev) => prev.slice(0, -1));

    return (
        <div className="card bg-base-200/20 shadow-xl p-4 w-full max-w-sm">
            <Display value={expression} />

            <div className="flex gap-2 mt-3">
                <Button
                    label="C"
                    variant="accent"
                    onClick={handleClear}
                    className="flex-1"
                />
                <Button
                    label="⌫"
                    variant="neutral"
                    onClick={handleBackspace}
                    className="flex-1"
                />
            </div>

            <Keypad onKeyPress={handleKeyPress} />
        </div>
    );
};