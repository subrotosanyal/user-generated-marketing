// src/App.tsx
import { useState } from 'react';
import { slides } from './slides';
import { Navigation } from './components/Navigation';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient">
      <div className="max-w-7xl mx-auto py-12 px-4 ">
          {slides[currentSlide].content}
        <Navigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default App;