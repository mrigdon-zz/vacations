import React from 'react';
import VacationModal from './VacationModal';
import SearchInput from './SearchInput';
import createVacation from 'lib/createVacation';
import { addVacation } from 'actions/vacations';
import { connect } from 'react-redux';

const yearPattern = /^\d{0,4}$/;

class AddModal extends React.Component {
  state = {
    title: '',
    year: '',
    summary: '',
    images: [],
    latitude: null,
    longitude: null
  };
  yearInput = React.createRef();
  summaryTextarea = React.createRef();

  handleSelectCity = ({ latitude, longitude, title }) => {
    this.setState({ latitude, longitude, title });
    this.yearInput.current.focus();
  };

  handleChangeYear = (e) => {
    const { value } = e.target;
    if (!value.match(yearPattern)) return;
    this.setState({ year: value });
    if (value.length === 4) this.summaryTextarea.current.focus();
  };

  handleAddImage = (image) => {
    this.setState(({ images }) => ({ images: [...images, image] }));
  };

  handleSave = () => {
    createVacation(this.state)
      .then((vacation) => {
        this.props.addVacation(vacation);
        this.props.onRequestClose();
      })
      .catch((response) => console.log(response));
  };

  render() {
    const { onRequestClose } = this.props;
    const { title, year, summary, images } = this.state;

    return (
      <VacationModal
        vacation={{
          images: images,
          title: (
            <SearchInput
              className="add-modal__input"
              placeholder="Enter a city"
              onSelect={this.handleSelectCity}
            />
          ),
          year: (
            <input
              ref={this.yearInput}
              className="add-modal__input add-modal__input--right"
              value={year}
              placeholder="Enter a year"
              onChange={this.handleChangeYear}
            />
          ),
          summary: (
            <textarea
              ref={this.summaryTextarea}
              className="add-modal__textarea"
              value={summary}
              placeholder="Enter a summary"
              onChange={(e) => this.setState({ summary: e.target.value })}
            />
          )
        }}
        onRequestClose={onRequestClose}
        footer={
          <button className="button button--primary" onClick={this.handleSave}>
            Save
          </button>
        }
        addImage={this.handleAddImage}
      />
    );
  }
}

export default connect(
  () => ({}),
  { addVacation }
)(AddModal);
