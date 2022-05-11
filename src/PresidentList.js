import React from 'react';
import PresidentItem from './PresidentItem';

export default function PresidentList({ presidents }) {
  return (
    <div className="president-list">
      {presidents.map((president) => (
        <PresidentItem key={president.id} president={president} />
      ))}
    </div>
  );
}
