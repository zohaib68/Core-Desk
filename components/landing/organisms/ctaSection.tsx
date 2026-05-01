import { Button } from "../../factory/atoms/button";

export const CTASection = () => {
    return (
        <section className="text-center py-20">

            <h2 className="text-3xl font-semibold mb-4">
                <span className="text-base-content"> Start being productive </span> <span className="text-secondary"> today !</span>
            </h2>

            <Button href="/tasks" color="primary" className="rounded-full">
                Get Started Free
            </Button>

        </section>
    );
};