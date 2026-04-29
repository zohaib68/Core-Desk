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
            ? "btn bg-base-100  text-base-200-content border border-white/20"
            : "btn border border-white/20 text-base-content bg-base-100/20 ";

    return (
        <div className="z-20 fixed top-0 h-16 navbar bg-base-100/10 backdrop-blur-sm border-b border-white/20">
            {/* Left - Brand */}
            <div className="flex-1">
                <Link href="/calculator" className="text-xl font-semibold text-secondary">
                    Core Desk
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
                <div className="sm:mx-2 bg-white/10 p-1 hover:scale-105 rounded-full flex justify-center items-center"><ThemeToggle /></div>
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