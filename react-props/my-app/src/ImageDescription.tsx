type DescriptionProps = {
  description: string;
};

export function ImageDescription({ description }: DescriptionProps) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
