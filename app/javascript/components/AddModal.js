import React from 'react';
import VacationModal from './VacationModal';
import SearchInput from './SearchInput';
import createVacation from 'lib/createVacation';
import Validator from 'components/Validator';
import { addVacation } from 'actions/vacations';
import { connect } from 'react-redux';
import omit from 'lodash/omit';

const yearPattern = /^\d{0,4}$/;

class AddModal extends React.Component {
  state = {
    title: '',
    year: '',
    summary: '',
    images: [],
    latitude: null,
    longitude: null,
    errors: {}
  };
  yearInput = React.createRef();
  summaryTextarea = React.createRef();

  clearErrors = (key) => {
    this.setState({ errors: omit(this.state.errors, key) });
  };

  handleSelectCity = ({ latitude, longitude, title }) => {
    this.setState({ latitude, longitude, title });
    this.yearInput.current.focus();
  };

  handleChangeYear = (e) => {
    const { value } = e.target;
    if (!value.match(yearPattern)) return;
    this.setState({ year: value });
    this.clearErrors('year');
    if (value.length === 4) this.summaryTextarea.current.focus();
  };

  handleChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
    this.clearErrors('summary');
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
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    const { onRequestClose } = this.props;
    const { title, year, summary, images, errors } = this.state;

    return (
      <VacationModal
        vacation={{
          images: images,
          title: (
            <Validator errors={errors.title}>
              <SearchInput
                className="add-modal__input"
                placeholder="Enter a city"
                onSelect={this.handleSelectCity}
                onChange={() => this.clearErrors('title')}
              />
            </Validator>
          ),
          year: (
            <Validator errors={errors.year}>
              <input
                ref={this.yearInput}
                className="add-modal__input add-modal__input--right"
                value={year}
                placeholder="Enter a year"
                onChange={this.handleChangeYear}
              />
            </Validator>
          ),
          summary: (
            <Validator errors={errors.summary}>
              <textarea
                ref={this.summaryTextarea}
                className="add-modal__textarea"
                value={summary}
                placeholder="Enter a summary"
                onChange={this.handleChangeSummary}
              />
            </Validator>
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
