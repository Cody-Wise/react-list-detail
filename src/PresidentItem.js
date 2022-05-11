import { Link } from 'react-router-dom';

export default function PresidentItem({ president }) {
  return (
    <div className="president-single">
      <Link to={`/presidents/${president.id}`}>
        <h3>{president.president_name}</h3>
        <img src={president.image} />
        <h4>{president.number} President</h4>
      </Link>
    </div>
  );
}
