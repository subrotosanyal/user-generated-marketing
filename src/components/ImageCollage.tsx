import { motion } from 'framer-motion';

const images = [
  '/images/icebucket-challenge-1.webp',
  '/images/icebucket-challenge-2.jpg',
  '/images/icebucket-challenge-3.avif',
  '/images/icebucket-challenge-4.webp',
  '/images/icebucket-challenge-5.jpg',
    '/images/icebucket-challenge-6.webp'
];

export const ImageCollage: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={src}
            alt={`Ice Bucket Challenge ${index + 1}`}
            className="w-full h-48 object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};