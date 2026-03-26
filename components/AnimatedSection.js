import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AnimatedSection({ children, delay = 0, direction = 'up' }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: direction === 'up' ? 40 : 0,
          x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
        },
        visible: {
          opacity: 1, y: 0, x: 0,
          transition: { duration: 0.7, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
