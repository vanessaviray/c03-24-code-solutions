import { SearchBar } from './SearchBar.tsx';
import { ListItems } from './ListItems.tsx';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');

  function handleChange(value: string) {
    setInput(value);
  }

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <SearchBar onChange={handleChange} input={input} />
      <ListItems list={filteredQuotes} />
    </div>
  );
}
