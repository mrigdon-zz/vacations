import React, { useState } from 'react';
import { get } from 'lib/ajax';
import debounce from 'lodash/debounce';
import classNames from 'classnames';

export default class SearchInput extends React.Component {
  state = { query: '', results: [], resultsHidden: false };

  setQuery = (query) => this.setState({ query });

  setResults = (results) => this.setState({ results });

  setResultsHidden = (resultsHidden) => this.setState({ resultsHidden });

  fetchSuggestions = debounce((query) => {
    get(`/locations?query=${query}`)
      .then((res) => res.json())
      .then(this.setResults);
  }, 500);

  fetchCoordinates = (result) => {
    get(`/locations/${result.placeId}`)
      .then((res) => res.json())
      .then((coordinates) => {
        this.props.onSelect({ ...result, ...coordinates });
      });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setQuery(value);
    this.setResults([]);
    if (value) this.fetchSuggestions(value);
    else this.fetchSuggestions.cancel();
  };

  handleSelect = (result) => {
    this.setQuery(result.title);
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
                key={result.title}
                className="search-input__result"
                href="javascript:void(0)"
                onMouseDown={() => this.handleSelect(result)}
              >
                {result.title}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}
