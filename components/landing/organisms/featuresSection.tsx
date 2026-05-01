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
                    className="h-28 bg-info/20! text-info-content rounded-bl-full! rounded-tr-full"
                    dividerClassName="bg-info/20 "
                    iconContainerClassName="bg-info/20!"
                />
                <FeatureCard
                    title="Calculator"
                    description="Quick calculations anytime."
                    icon='bi:calculator'
                    className="h-32 bg-secondary/20! text-secondary-content  rounded-t-full! rounded-tl-full"
                    dividerClassName="bg-info/20"
                    iconContainerClassName="bg-info/20!"
                />
                <FeatureCard
                    title="Notes"
                    description="Capture and organize ideas easily."
                    icon="gg:notes"
                    className="h-44 bg-primary/20! text-primary-content rounded-br-full! rounded-tl-full"
                    dividerClassName="bg-info/20"
                    iconContainerClassName="bg-info/20!"
                />



            </div>

        </section>
    );
};