import { useState } from 'react';
import { Slide } from './Slide.tsx';

const FirstSlide = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleHeaderClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Slide>
      <h2 className="text-3xl font-bold mb-6 cursor-pointer" onClick={handleHeaderClick}>
        What is ALS? 🧠
      </h2>
      {showDescription && (
        <div className="prose lg:prose-xl">
          <p>Amyotrophic Lateral Sclerosis (ALS), is a progressive neurodegenerative disease that affects nerve cells in the brain and spinal cord, causing loss of muscle control.</p>
          <ul>
            <li>Affects motor neurons 🧬</li>
            <li>Progressive muscle weakness 💪</li>
            <li>Impacts physical function 🏃</li>
            <li>Average life expectancy 2-5 years ⏳</li>
          </ul>
        </div>
      )}
    </Slide>
  );
};

export default FirstSlide;