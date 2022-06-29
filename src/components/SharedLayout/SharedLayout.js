import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Container } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
