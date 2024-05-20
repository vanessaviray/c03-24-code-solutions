import { SearchBar } from './SearchBar';
import { ListItems } from './ListItems';
import { useState } from 'react';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearchChange={handleSearchChange} input={input} />
      <ListItems items={filteredQuotes} />
    </div>
  );
}
