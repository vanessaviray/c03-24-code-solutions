type CaptionProps = {
  caption: string;
};

export function ImageCaption({ caption }: CaptionProps) {
  return (
    <div>
      <h3>{caption}</h3>
    </div>
  );
}
