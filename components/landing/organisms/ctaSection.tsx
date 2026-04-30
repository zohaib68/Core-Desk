import { Button } from "../../factory/atoms/button";

export const CTASection = () => {
    return (
        <section className="text-center py-20">

            <h2 className="text-3xl font-semibold mb-4">
                Start being productive today
            </h2>

            <Button href="/tasks" className="rounded-full">
                Get Started Free
            </Button>

        </section>
    );
};