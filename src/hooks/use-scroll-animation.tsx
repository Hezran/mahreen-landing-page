import { useRef } from "react";
import { useInView, type Variants } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";

interface UseScrollAnimationOptions {
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

const getDirectionOffset = (direction: AnimationDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance, x: 0 };
    case "down":
      return { y: -distance, x: 0 };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
      return { x: 0, y: 0 };
  }
};

export function useScrollAnimation({
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  amount = 0.2,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offset = getDirectionOffset(direction, distance);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return {
    ref,
    isInView,
    variants,
    initial: "hidden" as const,
    animate: isInView ? ("visible" as const) : ("hidden" as const),
  };
}

// Stagger container variants for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};
