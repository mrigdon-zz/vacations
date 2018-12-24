import PropTypes from 'prop-types';
import React from 'react';
import createMap from '../lib/map/createMap';
import createCountryShapes from '../lib/map/createCountryShapes';
import createCountryIndicators from '../lib/map/createCountryIndicators';
import addCountryHoverEffect from '../lib/map/addCountryHoverEffect';
import createMarkers from '../lib/map/createMarkers';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import VacationModal from './VacationModal';

export default class Map extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  state = { openDataItem: null };

  handleClickMarker = (dataItem) => {
    this.setState({ openDataItem: dataItem });
  };

  closeModal = () => this.setState({ openDataItem: null });

  componentDidMount() {
    am4core.useTheme(am4themes_animated);
    this.map = createMap();
    const polygonSeries = createCountryShapes(this.map);
    const polygonTemplate = createCountryIndicators(this.map, polygonSeries);
    addCountryHoverEffect(this.map, polygonTemplate);
    createMarkers(this.map, this.props.data, this.handleClickMarker);
  }

  componentWillUnmount() {
    if (this.map) this.map.dispose();
  }

  render() {
    return (
      <React.Fragment>
        <div id="chartdiv" />
        <VacationModal
          vacation={this.state.openDataItem}
          onRequestClose={this.closeModal}
        />
      </React.Fragment>
    );
  }
}
