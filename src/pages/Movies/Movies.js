// import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Input, Button } from './Movies.styled';
import { MoviesList } from 'components/MoviesList';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.input.value.trim();

    if (!query) {
      alert('Enter film');
      return;
    }

    setSearchParams({ query });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" autoComplete="off" autoFocus name="input" />
        <Button type="submit">Search</Button>
      </form>
      {query && <MoviesList query={query} />}
    </>
  );
}
