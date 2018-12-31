import React, { useState } from 'react';
import { get } from 'lib/ajax';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

const sampleResults = [
  { description: 'Reykavik, Iceland' },
  { description: 'New York, NY, USA' },
  { description: 'Copenhagen, Denmark' },
  { description: 'Tallin, Estonia' },
  { description: 'Helsinki, Finland' }
];

export default class SearchInput extends React.Component {
  state = { query: '', results: [], resultsHidden: false };

  setQuery = (query) => this.setState({ query });

  setResults = (results) => this.setState({ results });

  setResultsHidden = (resultsHidden) => this.setState({ resultsHidden });

  fetchSuggestions = debounce((query) => {
    console.log('Searching...');
    setTimeout(() => {
      this.setResults(sampleResults);
    }, 1000);
  }, 500);

  handleChange = (e) => {
    const { value } = e.target;
    this.setQuery(value);
    this.setResults([]);
    if (value) this.fetchSuggestions(value);
    else this.fetchSuggestions.cancel();
  };

  render() {
    const { query, results, resultsHidden } = this.state;

    return (
      <div className="search-input">
        <input
          {...this.props}
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
}
