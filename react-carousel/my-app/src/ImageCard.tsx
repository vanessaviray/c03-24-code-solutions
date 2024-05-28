import { type Image } from './Carousel.tsx';

type Props = {
  displayedImage: Image;
};

export function ImageCard({ displayedImage }: Props) {
  return <img src={displayedImage.src} alt={displayedImage.alt} />;
}
