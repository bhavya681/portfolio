/** Page entrance variants — opacity stays 1 to avoid black flash on route change (dark bg). */
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0,
        delay: 0,
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};
