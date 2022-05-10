import { client } from './client';

export async function getPresidents(from = 0, to = 10) {
  const NUM_PER_PAGE = 10;

  const response = await client

    .from('presidents_full')
    .select('*', { count: 'exact' })
    .range(from, to);

  const lastPage = Math.ceil(response.count / NUM_PER_PAGE);

  return response, lastPage;
}

export async function getPresident(id) {
  const response = await client.from('presidents_full').select().match({ id }).single();

  return response;
}
