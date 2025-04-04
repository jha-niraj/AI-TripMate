"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

interface MotionWrapperProps extends MotionProps {
    children: ReactNode
    className?: string
}

export function FadeIn({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function FadeInUp({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function SlideInLeft({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function SlideInRight({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function StaggerContainer({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div initial="hidden" animate="visible" className={className} {...rest}>
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className, index = 0, ...rest }: MotionWrapperProps & { index?: number }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.1 * index,
                        duration: 0.5,
                    },
                },
            }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export function HoverScale({ children, className, ...rest }: MotionWrapperProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}