

const colors = {
    primary: "#5b5bd6",
    secondary: "#0ea5a4",
    accent: "#f97316",
    neutral: "#1e293b",
    info: "#0284c7",
    success: "#16a34a",
    warning: "#f59e0b",
    error: "#dc2626",
};

const blobs = [
    { color: colors.primary, top: "10%", left: "10%" },
    { color: colors.success, top: "20%", right: "10%" },
    { color: colors.error, bottom: "10%", left: "20%" },
    { color: colors.warning, top: "50%", left: "50%" },
    { color: colors.info, bottom: "20%", right: "20%" },
    { color: colors.accent, top: "70%", left: "30%" },
    { color: colors.neutral, bottom: "30%", right: "40%" },
    { color: colors.secondary, top: "40%", right: "50%" },
];

export default function MeshGradient({ className = "" }) {
    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {blobs.map((b, i) => (
                <div
                    key={i}
                    className="absolute w-72 h-72 rounded-full blur-3xl opacity-60 mix-blend-screen"
                    style={{
                        background: `radial-gradient(circle at center, ${b.color}, transparent 100%)`,
                        top: b.top,
                        left: b.left,
                        right: b.right,
                        bottom: b.bottom,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}

            {/* optional soft overlay */}
            <div className="absolute inset-0 bg-black/5" />
        </div>
    );
}