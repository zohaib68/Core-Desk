"use client";

const blobs = [
    { color: "var(--color-primary)", top: "10%", left: "10%" },
    { color: "var(--color-secondary)", top: "20%", right: "5%" },
    { color: "var(--color-accent)", bottom: "10%", left: "15%" },
    { color: "var(--color-success)", top: "60%", left: "60%" },
    { color: "var(--color-warning)", bottom: "20%", right: "20%" },
    { color: "var(--color-info)", top: "40%", left: "80%" },
];

export default function MeshGradient({ className = "" }) {
    return (
        <div className={`fixed inset-0 overflow-hidden ${className}`}>

            {/* BIG soft blobs */}
            {blobs.map((b, i) => (
                <div
                    key={i}
                    className="absolute rounded-full opacity-100 blur animate-float-slow"
                    style={{
                        width: "700px",
                        height: "700px",
                        background: `radial-gradient(circle at center, ${b.color} 0%, transparent 100%)`,
                        top: b.top,
                        left: b.left,
                        right: b.right,
                        bottom: b.bottom,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            ))}

            {/* EXTRA layer for depth */}
            <div className="absolute inset-0 opacity-40 blur pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        background:
                            "radial-gradient(circle at 20% 30%, var(--color-primary), transparent 60%), radial-gradient(circle at 80% 70%, var(--color-secondary), transparent 70%)",
                    }}
                />
            </div>

            {/* SOFT OVERLAY (important for blending) */}
            <div className="absolute inset-0 bg-base-100/50 backdrop-blur" />
        </div>
    );
}