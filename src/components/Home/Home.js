import { TrendingList } from 'components/TrendingList';
import { Title } from './Home.styled';

export function Home() {
  return (
    <>
      <Title>Trending today</Title>
      <TrendingList />
    </>
  );
}
