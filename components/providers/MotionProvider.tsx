"use client";

import { MotionConfig } from "motion/react";

// Respect the visitor's "reduce motion" OS setting for every animation on the site.
const MotionProvider = ({ children }: { children: React.ReactNode }) => {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default MotionProvider;