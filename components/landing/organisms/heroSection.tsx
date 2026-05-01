import { Button } from "@/components/factory/atoms/button";
import { JSX } from "react";

export const HeroSection = (): JSX.Element => {
    return (
        <div className=" min-h-screen flex justify-center   items-center">
            <section className="bg-secondary/10 border border-secondary/20 flex flex-col justify-center items-center text-center px-6 py-4  rounded-tr-full rounded-bl-full  max-w-3xl">

                <h1 className="text-4xl md:text-6xl font-bold ">
                    Organize your life with{" "}
                    <span className="text-secondary">clarity</span>
                </h1>

                <p className="mt-4 text-base-content/70 max-w-xl">
                    Tasks, notes, and calculator — all in one workspace.
                </p>

                <div className="mt-6 flex gap-2">
                    <Button color="secondary" href="/tasks" className="rounded-full" >
                        Get Started
                    </Button>

                    <Button color="primary" className="rounded-full" href="/notes" variant="filled">
                        Explore Notes
                    </Button>
                </div>

            </section>
        </div>

    );
};