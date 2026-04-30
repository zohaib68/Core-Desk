import { Icon } from "@iconify/react";
import { FeatureCardProps } from "../types";

export const FeatureCard = ({
    title,
    description,
    icon
}: FeatureCardProps) => {
    return (
        <div className="h-28 text-base-content/70 text-center rounded-0 rounded-bl-4xl rounded-tr-4xl rounded-tl-lg  py-2 px-2 flex flex-col  bg-white/10!  border border-white/10 ">
            <div className="flex justify-center items-center gap-2">
                <h3 className="text-lg font-semibold text-secondary font-sans">{title}</h3>
                <div className="flex justify-center items-center">
                    <div className="w-10 h-0.5 bg-secondary/20 rounded-full">

                    </div>
                    <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                        <Icon icon={icon} width={24} height={24} />
                    </div>
                </div>

            </div>
            <p className="font-semibold font-sans text-base-content/70 mt-2">
                {description}
            </p>
        </div>
    );
};