import { Button } from "@/components/factory/atoms/button";
import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
                Organize your life with{" "}
                <span className="text-secondary">clarity</span>
            </h1>

            <p className="mt-4 text-base-content/70 max-w-xl">
                Tasks, notes, and calculator — all in one workspace.
            </p>

            <div className="mt-6 flex gap-4">
                <Button href="/tasks" className="rounded-full" >
                    Get Started
                </Button>

                <Button className="rounded-full shadow-secondary!" color="secondary" href="/notes" variant="outlined">
                    Explore Notes
                </Button>
            </div>

        </section>
    );
};