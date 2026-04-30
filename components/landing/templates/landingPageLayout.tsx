import MeshGradient from "@/components/factory/organisms/meshGradient";


export const LandingLayout = ({ children }: any) => {
    return (
        <div className="relative min-h-screen overflow-hidden">

            <MeshGradient />
            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
};