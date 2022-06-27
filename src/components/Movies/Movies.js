// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button } from './Movies.styled';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';

  // const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.input.value.trim();

    if (!query) {
      alert('Enter film');
      return;
    }

    setSearchParams({ query });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        name="input"
        // value={query}
        // onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
