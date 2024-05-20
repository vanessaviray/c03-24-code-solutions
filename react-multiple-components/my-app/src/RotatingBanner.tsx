import { useState } from 'react';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextItem() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  function handlePrevItem() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  }

  function handleClickedItem(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Banner itemName={items[currentIndex]} />
      <PrevButton onClick={handlePrevItem} />
      <Indicators
        items={items}
        currentIndex={currentIndex}
        onClick={handleClickedItem}
      />
      <NextButton onClick={handleNextItem} />
    </div>
  );
}
