import { motion } from 'framer-motion';

interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-8"
    >
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        {children}
      </div>
    </motion.div>
  );
};