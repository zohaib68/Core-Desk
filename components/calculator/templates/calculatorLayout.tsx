// components/templates/CalculatorLayout.tsx
import { MeshLayout } from "@/components/factory/templates/meshLayout";
import { Calculator } from "../organisms/calculator";


export const CalculatorLayout = () => {
    return (
        <div className="relative">
            <MeshLayout />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4 mt-16 mx-4">

                <Calculator />
            </div>
        </div>

    );
};