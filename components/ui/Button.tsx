"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all group shrink-0";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#5a4cd9] shadow-[0_0_20px_rgba(108,92,231,0.2)] hover:shadow-primary/40",
        secondary: "bg-dark text-white hover:bg-dark/90 shadow-xl shadow-dark/20",
        outline: "bg-transparent text-white border-2 border-white/30 hover:bg-white/10",
        ghost: "bg-white text-dark border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm",
    };

    const sizes = {
        sm: "px-6 py-2.5 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: variant === "outline" ? 1.05 : 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
