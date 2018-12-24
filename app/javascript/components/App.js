import PropTypes from 'prop-types';
import React from 'react';
import Map from './Map';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Map data={this.props.vacations} />
      </React.Fragment>
    );
  }
}
