import React, { useState } from 'react';
import { get } from 'lib/ajax';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

const sampleResults = [
  {
    description: 'Reykjavík, Iceland',
    place_id: 'ChIJw-3c7rl01kgRcWDSMKIskew'
  },
  {
    description: 'Reykjanesbær, Iceland',
    place_id: 'ChIJnc-pJx4C1kgRZ6CYJ68gW4A'
  },
  { description: 'Reykholt, Iceland', place_id: 'ChIJ2_SWka831EgRpcvIUESbm_g' },
  {
    description: 'Reykjahlíð, Iceland',
    place_id: 'ChIJr5VeNuKdzUgRZA7kUrsK0P8'
  },
  { description: 'Reykhólar, Iceland', place_id: 'ChIJpcY6URjc1EgRDo4KFlUVIgA' }
];

export default class SearchInput extends React.Component {
  state = { query: '', results: [], resultsHidden: false };

  setQuery = (query) => this.setState({ query });

  setResults = (results) => this.setState({ results });

  setResultsHidden = (resultsHidden) => this.setState({ resultsHidden });

  fetchSuggestions = debounce((query) => {
    console.log('Searching...');
    setTimeout(() => {
      console.log('Searched!');
      this.setResults(sampleResults);
    }, 1000);
  }, 500);

  fetchCoordinates = (result) => {
    console.log('Getting coordinates...');
    setTimeout(() => {
      console.log('Got coordinates!');
      const coordinates = { lat: 64.146582, lng: -21.9426354 };
      this.props.onSelect({ ...result, ...coordinates });
    }, 1000);
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setQuery(value);
    this.setResults([]);
    if (value) this.fetchSuggestions(value);
    else this.fetchSuggestions.cancel();
  };

  handleSelect = (result) => {
    this.setQuery(result.description);
    this.fetchCoordinates(result);
  };

  render() {
    const { onSelect, ...props } = this.props;
    const { query, results, resultsHidden } = this.state;

    return (
      <div className="search-input">
        <input
          {...props}
          autoFocus
          value={query}
          onChange={this.handleChange}
          onFocus={() => this.setResultsHidden(false)}
          onBlur={() => this.setResultsHidden(true)}
        />
        {results.length > 0 && (
          <div
            className={classNames('search-input__results', {
              'search-input__results--hidden': resultsHidden
            })}
          >
            {results.map((result) => (
              <a
                key={result.description}
                className="search-input__result"
                href="javascript:void(0)"
                onMouseDown={() => this.handleSelect(result)}
              >
                {result.description}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}
