import React from 'react';
import VacationModal from './VacationModal';
import SearchInput from './SearchInput';
import createVacation from 'lib/createVacation';

const yearPattern = /^\d{0,4}$/;

export default class AddModal extends React.Component {
  state = {
    title: '',
    year: '',
    summary: '',
    images: [],
    imagePreviews: [],
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

  handleAddImage = (preview, file) => {
    this.setState((state) => ({
      imagePreviews: [...state.imagePreviews, preview],
      images: [...state.images, file]
    }));
  };

  handleSave = () => {
    createVacation(this.state);
  };

  render() {
    const { onRequestClose } = this.props;
    const { title, year, summary, imagePreviews } = this.state;

    return (
      <VacationModal
        vacation={{
          images: imagePreviews,
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
              placeholder="Enter an optional summary"
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
        onAddImage={this.handleAddImage}
      />
    );
  }
}
