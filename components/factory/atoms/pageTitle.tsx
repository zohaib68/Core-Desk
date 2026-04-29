import { Icon } from "@iconify/react";
import React from "react";

interface Props {
    title: string;
    icon: string;
}

export const PageTitle: React.FC<Props> = ({ title, icon }) => {
    return (

        <h1 className="text-4xl text-shadow-secondary text-shadow-md">{title}</h1>


    );
};

