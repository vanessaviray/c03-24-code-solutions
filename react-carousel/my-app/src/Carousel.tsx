import { PrevButton } from './PrevButton.tsx';
import { ImageCard } from './ImageCard.tsx';
import { NextButton } from './NextButton.tsx';
import { Dots } from './Dots.tsx';
import { useCallback, useEffect, useState } from 'react';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = useCallback(() => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  useEffect(() => {
    const timerId = setTimeout(nextImage, 3000);
    return () => clearTimeout(timerId);
  }, [nextImage]);

  function handleDots(index: number) {
    setActiveIndex(index);
  }

  return (
    <div>
      <div className="row">
        <PrevButton onClick={prevImage} />
        <ImageCard displayedImage={images[activeIndex]} />
        <NextButton onClick={nextImage} />
      </div>
      <Dots images={images} activeIndex={activeIndex} onClick={handleDots} />
    </div>
  );
}

// Original Solution

// import { ImageCard } from './ImageCard.tsx';
// import { NextButton } from './NextButton.tsx';
// import { PrevButton } from './PrevButton.tsx';
// import { Dots } from './Dots.tsx';
// import { useState, useEffect } from 'react';

// export type Image = {
//   src: string;
//   alt: string;
// };

// type Props = {
//   images: Image[];
// };

// export function Carousel({ images }: Props) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setCurrentIndex((currentIndex + 1) % images.length);
//     }, 3000);
//     return () => clearTimeout(timerId);
//   }, [currentIndex, images.length]);

//   function handleNextImage() {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   }

//   function handlePrevImage() {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   }

//   function handleDots(dotIndex: number) {
//     setCurrentIndex(dotIndex);
//   }

//   return (
//     <>
//       <PrevButton onClick={handlePrevImage} />
//       <ImageCard displayedImage={images[currentIndex]} />
//       <NextButton onClick={handleNextImage} />
//       <Dots currentIndex={currentIndex} onClick={handleDots} images={images} />
//     </>
//   );
// }
