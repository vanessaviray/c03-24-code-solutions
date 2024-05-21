type Props = {
  items: string[];
  currentIndex: number;
  onClick: (index: number) => void;
};

export function Indicators({ items, currentIndex, onClick }: Props) {
  return (
    <div>
      {items.map((_, index) => (
        <button
          key={index}
          style={{ backgroundColor: currentIndex === index ? 'lightblue' : '' }}
          onClick={() => onClick(index)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
