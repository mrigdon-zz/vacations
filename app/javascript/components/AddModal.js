import React from 'react';
import Modal from './Modal';

export default function AddModal({ onRequestClose }) {
  return (
    <Modal isPadded isFixed onRequestClose={onRequestClose}>
      hello
    </Modal>
  );
}
