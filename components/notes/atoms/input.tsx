// components/atoms/Input.tsx

import { InputHTMLAttributes } from "react";

type Props = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = "", ...props }: Props) => {
    return (
        <input
            {...props}
            className={`input input-bordered w-full ${className}`}
        />
    );
};



export const SearchInput = ({ className = "", ...props }: Props) => {
    return (
        <label className={`input rounded-full bg-transparent  ${className}`}>
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input {...props} type="search" required placeholder="Search" />
        </label>
    );
};