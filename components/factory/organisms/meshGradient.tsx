"use client";

const blobs = [
    // PRIMARY (large + soft)
    { color: "var(--color-primary)", top: "-10%", left: "-5%", size: 700 },
    { color: "var(--color-secondary)", top: "0%", right: "-10%", size: 650 },
    { color: "var(--color-accent)", bottom: "-10%", left: "10%", size: 700 },

    // MID LAYER (depth)
    { color: "var(--color-success)", top: "55%", left: "60%", size: 420 },
    { color: "var(--color-info)", bottom: "10%", right: "15%", size: 400 },

    // HIGHLIGHTS (small + subtle)
    { color: "var(--color-warning)", top: "35%", left: "75%", size: 280 },
    { color: "var(--color-primary)", bottom: "30%", left: "45%", size: 260 },
];



export default function MeshGradient({ className = "" }) {
    return (
        <div className={`fixed inset-0 overflow-hidden ${className}`}>

            {/* 🌈 BASE MESH (FULL COVERAGE) */}
            <div
                className="absolute inset-0 blur-[120px] opacity-70"
                style={{
                    background: `
            radial-gradient(circle at 10% 20%, var(--color-primary), transparent 60%),
            radial-gradient(circle at 90% 10%, var(--color-secondary), transparent 60%),
            radial-gradient(circle at 80% 80%, var(--color-accent), transparent 60%),
            radial-gradient(circle at 20% 90%, var(--color-success), transparent 60%)
          `,
                }}
            />

            {/* 🔥 LARGE EDGE BLOBS (push color across screen) */}
            <div className="absolute -top-[30%] -left-[20%] w-[900px] h-[900px] blur-[140px] opacity-60 animate-float-slow"
                style={{
                    background: `radial-gradient(circle, var(--color-primary), transparent 65%)`,
                }}
            />

            <div className="absolute -top-[20%] -right-[25%] w-[800px] h-[800px] blur-[140px] opacity-60 animate-float-reverse"
                style={{
                    background: `radial-gradient(circle, var(--color-secondary), transparent 65%)`,
                }}
            />

            <div className="absolute -bottom-[25%] left-[10%] w-[900px] h-[900px] blur-[140px] opacity-60 animate-float-slow"
                style={{
                    background: `radial-gradient(circle, var(--color-accent), transparent 65%)`,
                }}
            />

            <div className="absolute -bottom-[30%] right-[10%] w-[850px] h-[850px] blur-[140px] opacity-50 animate-float-reverse"
                style={{
                    background: `radial-gradient(circle, var(--color-info), transparent 65%)`,
                }}
            />

            {/* 🧠 MID FILL (kills empty center) */}
            <div
                className="absolute inset-0 blur-[100px] opacity-40"
                style={{
                    background: `
            radial-gradient(circle at 50% 50%, var(--color-warning), transparent 70%)
          `,
                }}
            />

            {/* 🌫 THEME BALANCER */}
            <div className="absolute inset-0 bg-base-100/40 dark:bg-base-100/30 backdrop-blur-2xl" />
        </div>
    );
}