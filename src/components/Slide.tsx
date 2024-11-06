interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
      <div className="rounded-xl shadow-lg p-8 bg-white text-black">
          {children}
      </div>
  );
};