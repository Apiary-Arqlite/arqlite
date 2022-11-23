import { motion } from 'framer-motion';

const list = { hidden: { opacity: 0 } };
const item = { hidden: { x: -10, opacity: 0 } };

export default function Animation(props) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 1, scale: 0.5 }}
      animate={{
        opacity: 0.5,
        scale: 1,
        backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
}
