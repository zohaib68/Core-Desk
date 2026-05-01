import { Icon } from "@iconify/react";
import { FeatureCardProps } from "../types";
import clsx from "clsx";

export const FeatureCard = ({
    title,
    description,
    icon,
    className,
    iconContainerClassName,
    dividerClassName
}: FeatureCardProps) => {
    return (
        <div className={clsx("justify-center items-center  text-base-content/70 text-center rounded-0  flex flex-col p-2 bg-white/10  border border-white/10 ", className)}>
            <div className="flex justify-center items-center gap-2">
                <h3 className="text-lg font-semibold  font-sans">{title}</h3>
                <div className="flex justify-center items-center">
                    <div className={clsx("w-10 h-0.5  rounded-full", dividerClassName)}>

                    </div>
                    <div className={clsx("p-3 rounded-full  ", iconContainerClassName)}>
                        <Icon icon={icon} width={24} height={24} />
                    </div>
                </div>

            </div>
            <p className="font-semibold font-sans">
                {description}
            </p>
        </div>
    );
};