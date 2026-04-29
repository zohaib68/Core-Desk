// components/templates/CalculatorLayout.tsx
import { Calculator } from "../organisms/calculator";


export const CalculatorLayout = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center gap-4">
            <Calculator />
        </div>
    );
};