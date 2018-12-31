import React, { useState, useRef, useEffect } from 'react';
import VacationModal from './VacationModal';
import SearchInput from './SearchInput';

const yearPattern = /^\d{0,4}$/;

export default function AddModal({ onRequestClose }) {
  const [year, setYear] = useState('');
  const [summary, setSummary] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [title, setTitle] = useState(null);
  const [images, setImages] = useState([]);

  const yearInput = useRef(null);

  const handleSelectCity = (location) => {
    setLatitude(location.latitude);
    setLatitude(location.longitude);
    setTitle(location.title);
    yearInput.current.focus();
  };

  const handleChangeYear = (e) => {
    const { value } = e.target;
    if (!value.match(yearPattern)) return;
    setYear(value);
  };

  return (
    <VacationModal
      vacation={{
        images,
        title: (
          <SearchInput
            className="add-modal__input"
            placeholder="Enter a city"
            onSelect={handleSelectCity}
          />
        ),
        year: (
          <input
            ref={yearInput}
            className="add-modal__input add-modal__input--right"
            value={year}
            placeholder="Enter a year"
            onChange={handleChangeYear}
          />
        ),
        summary: (
          <textarea
            className="add-modal__textarea"
            value={summary}
            placeholder="Enter an optional summary"
            onChange={(e) => setSummary(e.target.value)}
          />
        )
      }}
      onRequestClose={onRequestClose}
      footer={<button className="button button--primary">Save</button>}
    />
  );
}
