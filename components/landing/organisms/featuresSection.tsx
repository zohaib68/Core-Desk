import { FeatureCard } from "../molecules/featureCard";

export const FeaturesSection = () => {
    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold text-center mb-12">
                Everything you need
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <FeatureCard
                    title="Task Management"
                    description="Track tasks with status and filters."
                    icon="clarity:tasks-line"
                />

                <FeatureCard
                    title="Notes"
                    description="Capture and organize ideas easily."
                    icon="gg:notes"
                />

                <FeatureCard
                    title="Calculator"
                    description="Quick calculations anytime."
                    icon='bi:calculator'
                />

            </div>

        </section>
    );
};