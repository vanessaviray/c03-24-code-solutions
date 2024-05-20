type Props = {
  items: string[];
};

export function ListItems({ items }: Props) {
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}
