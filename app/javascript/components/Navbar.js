import React from 'react';

export default function Navbar({ onAdd }) {
  return (
    <div className="navbar">
      <a className="navbar__main navbar__item" href="/">
        Rigdon Family Vacations
      </a>
      <a className="navbar__item" href="javascript:void(0)" onClick={onAdd}>
        Add Vacation
      </a>
    </div>
  );
}
