type Props = {
  count: number;
  onClick: () => void;
  className: string;
};

export function HotButton({ count, onClick, className }: Props) {
  return (
    <>
      <button onClick={onClick} className={className}>
        Hot Button
      </button>
      <p>Click Count: {count}</p>
    </>
  );
}
