type Props = {
  list: string[];
};

export function ListItems({ list }: Props) {
  const searchResults = list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      {list.length > 0 ? (
        <ul>{searchResults}</ul>
      ) : (
        <p>No matching items found.</p>
      )}
    </div>
  );
}
