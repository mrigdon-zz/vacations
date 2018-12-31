import PropTypes from 'prop-types';
import React from 'react';
import Map from './Map';
import Navbar from './Navbar';
import { useState } from 'react';
import AddModal from './AddModal';

export default function App({ vacations }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar onAdd={() => setIsAddModalOpen(true)} />
      <Map vacations={vacations} />
      {isAddModalOpen && (
        <AddModal onRequestClose={() => setIsAddModalOpen(false)} />
      )}
    </React.Fragment>
  );
}
