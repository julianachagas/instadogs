import React from 'react';
import { Head } from '../Helper/Head';
import { useFetch } from '../../Hooks/useFetch';
import { STATS_GET } from '../../Api';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

export const UserStats = () => {
  const { data, loading, error, request } = useFetch();
  React.useEffect(() => {
    async function getStats() {
      const { url, options } = STATS_GET();
      request(url, options);
    }
    getStats();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;
  return (
    <React.Suspense fallback={<Loading />}>
      <Head title="Stats" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
};
