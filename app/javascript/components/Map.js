import PropTypes from 'prop-types';
import React from 'react';
import drawMap from 'lib/map/drawMap';
import VacationModal from './VacationModal';
import cloneDeep from 'lodash/cloneDeep';

export default class Map extends React.Component {
  state = { openVacationId: null, vacations: cloneDeep(this.props.vacations) };

  handleClickMarker = ({ id }) => this.setState({ openVacationId: id });

  closeModal = () => this.setState({ openVacationId: null });

  withImage = (vacation, image) => ({
    ...vacation,
    images: [...vacation.images, image]
  });

  isOpen = (vacation) => vacation.id === this.state.openVacationId;

  handleAddImage = (image) => {
    this.setState({
      vacations: this.state.vacations.map((vacation) => {
        if (this.isOpen(vacation)) return this.withImage(vacation, image);
        return vacation;
      })
    });
  };

  componentDidMount() {
    this.map = drawMap(this.state.vacations, this.handleClickMarker);
  }

  componentWillUnmount() {
    if (this.map) this.map.dispose();
  }

  render() {
    const { openVacationId, vacations } = this.state;
    return (
      <React.Fragment>
        <div id="chartdiv" />
        {openVacationId && (
          <VacationModal
            vacation={vacations.find((v) => v.id === openVacationId)}
            onAddImage={this.handleAddImage}
            onRequestClose={this.closeModal}
          />
        )}
      </React.Fragment>
    );
  }
}
