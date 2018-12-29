import React from 'react';
import Modal from './Modal';

function travellersString(travellers) {
  if (travellers.length === 1) return travellers[0];
  return travellers.join(', ');
}

export default class VacationModal extends React.Component {
  state = { openImage: null };

  onClickImage = (image) => this.setState({ openImage: image });

  closeImage = () => this.setState({ openImage: null });

  render() {
    const { vacation, onRequestClose } = this.props;
    const { openImage } = this.state;
    if (!vacation) return null;
    const { title, year, images, summary } = vacation;
    return (
      <React.Fragment>
        <Modal isPadded isFixed onRequestClose={onRequestClose}>
          <div className="vacation-modal__header">
            <h1>{title}</h1>
            <h1>{year}</h1>
          </div>
          {summary && <p className="vacation-modal__summary">{summary}</p>}
          <div className="vacation-modal__images">
            {images.map((image) => (
              <div
                key={image}
                onClick={() => this.onClickImage(image)}
                style={{ backgroundImage: `url(${image})` }}
                className="vacation-modal__image"
              />
            ))}
          </div>
        </Modal>
        {openImage && (
          <Modal onRequestClose={this.closeImage}>
            <img className="vacation-modal__big-image" src={openImage} />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
