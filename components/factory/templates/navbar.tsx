"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../atoms/themeToggle";
import { Icon } from "@iconify/react";
import MeshGradient from "../organisms/meshGradient";

type NavItem = {
    label: string;
    href: string;
    icon?: string
};

const navItems: NavItem[] = [
    { label: "Calculator", href: "/calculator", icon: "bi:calculator" },
    { label: "Tasks", href: "/tasks", icon: 'clarity:tasks-line' },
    { label: "Notes", href: "/notes", icon: 'gg:notes' },
];

export const Navbar = () => {
    const pathname = usePathname();

    const getNavClass = (isActive: boolean) =>
        isActive
            ? "btn bg-secondary/70 text-secondary-content/80 border border-secondary/20"
            : "btn border border-secondary/20 text-info hover:border-info hover:bg-info hover:text-info-content bg-info/10 ";

    return (
        <div className="z-20 fixed top-0 h-16 navbar bg-secondary/15 backdrop-blur-sm border-b border-secondary/20">
            {/* Left - Brand */}
            <div className="flex-1 justify-end">
                <Link href="/" className="bg-info/30 shadow-info/30 shadow-sm w-fit h-fit px-4 py-1 rounded-full font-semibold text-info-content font-sans flex items-center gap-2">
                    <span className="text-lg">Core Desk</span>
                    <Icon icon="streamline-ultimate:corporate-social-media" width="16" height="16" />
                </Link>
            </div>

            {/* Center - Desktop Menu */}
            <div className="hidden md:flex gap-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`rounded-full btn hover:scale-105 active:scale-100 btn-sm ${getNavClass(isActive)} transition-all`}
                        >
                            <RenderLabel {...item} />
                        </Link>
                    );
                })}
            </div>

            {/* Right - Theme + Mobile */}
            <div className="flex items-center gap-2">
                {/* Mobile Dropdown */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn bg-base-200">
                        ☰
                    </label>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-200"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={
                                            isActive
                                                ? "text-primary font-semibold"
                                                : "text-base-content"
                                        }
                                    >
                                        <RenderLabel {...item} />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="sm:mx-2 bg-secondary/20 p-1 hover:scale-105 rounded-full flex justify-center items-center"><ThemeToggle /></div>
            </div>
        </div>
    );
};

const RenderLabel = (item: NavItem) => {
    return <>
        <span>
            {item.label}
        </span>
        <Icon icon={item.icon ?? ''} />
    </>
}