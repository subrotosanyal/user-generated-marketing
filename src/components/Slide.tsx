interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
      <div className="max-w-4xl w-full rounded-xl shadow-lg p-8 bg-white text-black">
        <div className="prose">
          {children}
        </div>
      </div>
  );
};