import React, { useState, useRef, useEffect } from 'react';
import VacationModal from './VacationModal';

export default function AddModal({ onRequestClose }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [summary, setSummary] = useState('');

  const titleInput = useRef(null);
  useEffect(() => {
    titleInput.current.focus();
  }, []);

  return (
    <VacationModal
      vacation={{
        title: (
          <input
            ref={titleInput}
            className="add-modal__input"
            value={title}
            placeholder="Enter a title"
            onChange={(e) => setTitle(e.target.value)}
          />
        ),
        year: (
          <input
            className="add-modal__input add-modal__input--right"
            value={year}
            placeholder="Enter a year"
            onChange={(e) => setYear(e.target.value)}
          />
        ),
        summary: (
          <textarea
            className="add-modal__textarea"
            value={summary}
            placeholder="Enter an optional summary"
            onChange={(e) => setSummary(e.target.value)}
          />
        ),
        images: []
      }}
      onRequestClose={onRequestClose}
      footer={<button className="button button--primary">Save</button>}
    />
  );
}
