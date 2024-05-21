import { GoDotFill, GoDot } from 'react-icons/go';
import { Image } from './Carousel.tsx';

type Props = {
  currentIndex: number;
  onClick: (dotIndex: number) => void;
  images: Image[];
};

export function Dots({ onClick, currentIndex, images }: Props) {
  const dots = images.map((_, index) => (
    <button
      style={{ background: 'none' }}
      onClick={() => {
        onClick(index);
      }}
      key={index}>
      {index === currentIndex ? <GoDot /> : <GoDotFill />}
    </button>
  ));

  return <div>{dots}</div>;
}
