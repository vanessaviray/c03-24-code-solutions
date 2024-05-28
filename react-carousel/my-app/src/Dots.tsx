import { GoDot, GoDotFill } from 'react-icons/go';
import { Image } from './Carousel.tsx';

type Props = {
  images: Image[];
  activeIndex: number;
  onClick: (index: number) => void;
};

export function Dots({ images, activeIndex, onClick }: Props) {
  const dots = images.map((_, index) => (
    <button
      style={{ background: 'none' }}
      key={index}
      onClick={() => {
        onClick(index);
      }}>
      {index === activeIndex ? <GoDotFill /> : <GoDot />}
    </button>
  ));
  return <div>{dots}</div>;
}
