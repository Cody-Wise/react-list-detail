import React from 'react';
import { useState, useEffect } from 'react';
import PresidentList from './PresidentList';
import { getPresidents } from './services/fetch-utils';

export default function PresidentPage() {
  const [presidents, setPresidents] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState('');
  const perPage = 10;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const presidente = await getPresidents(from, to);

      setLastPage(presidente.lastPage);
      setPresidents(presidente.data);
    }

    fetch();
  }, [page, lastPage]);
  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous Page
        </button>
        <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
      <PresidentList presidents={presidents} />
    </>
  );
}
