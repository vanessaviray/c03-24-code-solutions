import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const image = imageSrc[index];

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={image}
          alt="space-image"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
