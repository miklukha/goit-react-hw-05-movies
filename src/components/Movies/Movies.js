import { useState } from 'react';
import { Input, Button } from './Movies.styled';

export function Movies() {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const query = e.currentTarget.value.trim();
    setQuery(query);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      alert('Enter your query');
      return;
    }

    console.log(query);
    setQuery('');
  };

  return (
    <form>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <Button type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </form>
  );
}
