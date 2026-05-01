import { FeatureCard } from "../molecules/featureCard";

export const FeaturesSection = () => {
    return (
        <section className="px-6 py-20 max-w-6xl mx-auto">

            <h2 className="text-3xl font-semibold text-center mb-12">
                Everything you need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <FeatureCard
                    title="Task Management"
                    description="Track tasks with status and filters."
                    icon="clarity:tasks-line"
                    className="shadow-info/30 shadow-md h-32 bg-info/50! text-info-content/90 rounded-bl-full! rounded-tr-full"
                    dividerClassName="bg-info/20 "
                    iconContainerClassName="bg-info/20!"
                />
                <FeatureCard
                    title="Calculator"
                    description="Quick calculations anytime."
                    icon='bi:calculator'
                    className=" shadow-secondary/30 shadow-lg h-32 bg-secondary/50! text-secondary-content/90  rounded-tl-full! rounded-br-full"
                    dividerClassName="bg-info/20"
                    iconContainerClassName="bg-info/20!"
                />
                <FeatureCard
                    title="Notes"
                    description="Capture and organize ideas easily."
                    icon="gg:notes"
                    className="shadow-primary/30   shadow-md  md:col-span-2 h-40 bg-primary/80! text-primary-content/90 rounded-br-full! rounded-tl-full"
                    dividerClassName="bg-info/20"
                    iconContainerClassName="bg-info/20!"
                />



            </div>

        </section>
    );
};