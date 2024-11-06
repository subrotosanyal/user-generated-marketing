import { motion } from 'framer-motion';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
}) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center gap-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-3 bg-blue-600 text-white rounded-full disabled:opacity-50"
      >
        <IoArrowBack size={24} />
      </motion.button>
      
      <span className="text-lg font-semibold">
        {currentSlide + 1} / {totalSlides}
      </span>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-3 bg-blue-600 text-white rounded-full disabled:opacity-50"
      >
        <IoArrowForward size={24} />
      </motion.button>
    </div>
  );
};