type Props = {
  buttonText: string;
  onClick: () => void;
  className: string;
};

export function HotButton({ buttonText, onClick, className }: Props) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
