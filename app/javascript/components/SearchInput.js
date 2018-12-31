import React, { useState } from 'react';
import { get } from 'lib/ajax';
import debounce from 'lodash/debounce';

const sampleResults = [
  { description: 'Reykavik, Iceland' },
  { description: 'New York, NY, USA' },
  { description: 'Copenhagen, Denmark' },
  { description: 'Tallin, Estonia' },
  { description: 'Helsinki, Finland' }
];

const fetchSuggestions = debounce((query, setResults) => {
  get(`/locations?query=${query}`).then(() => setResults(sampleResults));
}, 500);

export default function SearchInput({ inputRef, ...props }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const resetResults = () => {
    fetchSuggestions.cancel();
    setResults(null);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    if (value) fetchSuggestions(value, setResults);
    else resetResults();
  };

  return (
    <div className="search-input">
      <input
        {...props}
        ref={inputRef}
        value={query}
        onChange={onChange}
        onBlur={resetResults}
        onFocus={onChange}
      />
      {query &&
        results && (
          <div className="search-input__results">
            {results.map(({ description }) => (
              <a
                key={description}
                className="search-input__result"
                href="javascript:void(0)"
              >
                {description}
              </a>
            ))}
          </div>
        )}
    </div>
  );
}
