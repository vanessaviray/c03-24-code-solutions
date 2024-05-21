import { ImageCard } from './ImageCard.tsx';
import { NextButton } from './NextButton.tsx';
import { PrevButton } from './PrevButton.tsx';
import { Dots } from './Dots.tsx';
import { useState, useEffect } from 'react';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  function handleNextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handlePrevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  function handleDots(dotIndex: number) {
    setCurrentIndex(dotIndex);
  }

  return (
    <>
      <PrevButton onClick={handlePrevImage} />
      <ImageCard displayedImage={images[currentIndex]} />
      <NextButton onClick={handleNextImage} />
      <Dots currentIndex={currentIndex} onClick={handleDots} images={images} />
    </>
  );
}
