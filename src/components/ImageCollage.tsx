import { motion } from 'framer-motion';

const images = [
  'https://example.com/ice-bucket1.jpg',
  'https://example.com/ice-bucket2.jpg',
  'https://example.com/ice-bucket3.jpg',
  'https://example.com/ice-bucket4.jpg'
];

export const ImageCollage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
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