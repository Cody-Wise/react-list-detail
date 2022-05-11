import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPresident } from './services/fetch-utils';

export default function PresidentDetail() {
  const params = useParams();

  const [president, setPresident] = useState({});

  useEffect(() => {
    async function load() {
      const presidentData = await getPresident(params.id);
      setPresident(presidentData.data);
    }
    load();
  }, [params.id]);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="president-detail">
        <h3>{president.president_name}</h3>
        <img src={president.image} />
        <h4>{president.number} President</h4>
        <p>
          <b>Years In Office:</b> {president.years_in_office}
        </p>
        <p>
          <b>Political Party:</b> {president.party}
        </p>
      </div>
    </>
  );
}
