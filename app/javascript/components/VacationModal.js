import React from 'react';
import Modal from './Modal';
import image0 from '../image0.jpg';
import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';

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
