import PropTypes from 'prop-types';
import React from 'react';
import Map from './Map';
import Navbar from './Navbar';

export default class App extends React.Component {
  static propTypes = {
    mapData: PropTypes.arrayOf(
      PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Map data={this.props.mapData} />
      </React.Fragment>
    );
  }
}
