import React from 'react';
import Modal from './Modal';

function travellersString(travellers) {
  if (travellers.length === 1) return travellers[0];
  return travellers.join(', ');
}

export default class VacationModal extends React.Component {
  state = { openImage: null, uploadedImages: [] };

  setOpenImage = (openImage) => this.setState({ openImage });

  addImage = (image) => {
    const { uploadedImages } = this.state;
    if (uploadedImages.includes(image)) return Promise.resolve();
    return new Promise((resolve) => {
      this.setState({ uploadedImages: [...uploadedImages, image] }, resolve);
    });
  };

  addImages = (files) => {
    if (files.length === 0) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.addImage(reader.result).then(() => this.addImages(files.slice(1)));
    });
    reader.readAsDataURL(files[0]);
  };

  render() {
    const { vacation, onRequestClose } = this.props;
    if (!vacation) return null;
    const { title, year, images, summary } = vacation;

    const { openImage, uploadedImages } = this.state;

    const imageInput = React.createRef(null);

    return (
      <React.Fragment>
        <Modal isPadded isFixed onRequestClose={onRequestClose}>
          <div className="vacation-modal__header">
            <h1>{title}</h1>
            <h1>{year}</h1>
          </div>
          {summary && <p className="vacation-modal__summary">{summary}</p>}
          <div className="vacation-modal__images">
            {[...images, ...uploadedImages].map((image) => (
              <div
                key={image}
                onClick={() => this.setOpenImage(image)}
                style={{ backgroundImage: `url(${image})` }}
                className="vacation-modal__image"
              />
            ))}
            <div
              className="vacation-modal__image vacation-modal__image--add"
              onClick={() => imageInput.current.click()}
            >
              <div className="vacation-modal__add-icon" />
              <input
                multiple
                ref={imageInput}
                onChange={(e) => this.addImages(Array.from(e.target.files))}
                type="file"
                className="vacation-modal__add-input"
                accept="image/*"
              />
            </div>
          </div>
        </Modal>
        {openImage && (
          <Modal onRequestClose={() => this.setOpenImage(null)}>
            <img className="vacation-modal__big-image" src={openImage} />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
