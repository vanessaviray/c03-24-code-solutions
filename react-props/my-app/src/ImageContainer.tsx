import './ImageContainer.css';

type ImageProps = {
  image: string;
};

export function ImageContainer({ image }: ImageProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={image} alt="space-image" />
      </div>
    </div>
  );
}
