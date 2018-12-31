import PropTypes from 'prop-types';
import React from 'react';
import Map from './Map';
import Navbar from './Navbar';
import { useState } from 'react';
import AddModal from './AddModal';

export default function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar onAdd={() => setIsAddModalOpen(true)} />
      <Map />
      {isAddModalOpen && (
        <AddModal onRequestClose={() => setIsAddModalOpen(false)} />
      )}
    </React.Fragment>
  );
}
