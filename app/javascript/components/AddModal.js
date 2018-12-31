import React, { useState, useRef, useEffect } from 'react';
import VacationModal from './VacationModal';
import SearchInput from './SearchInput';

export default function AddModal({ onRequestClose }) {
  const [year, setYear] = useState('');
  const [summary, setSummary] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [title, setTitle] = useState(null);

  const handleSelect = (location) => {
    setLatitude(location.latitude);
    setLatitude(location.longitude);
    setTitle(location.title);
  };

  return (
    <VacationModal
      vacation={{
        title: (
          <SearchInput
            className="add-modal__input"
            placeholder="Enter a city"
            onSelect={handleSelect}
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
