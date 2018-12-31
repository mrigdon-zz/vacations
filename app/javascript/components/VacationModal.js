import React from 'react';
import Modal from './Modal';
import { put } from 'lib/ajax';
import generatePreview from 'lib/generatePreview';
import AddImageTile from './AddImageTile';

function travellersString(travellers) {
  if (travellers.length === 1) return travellers[0];
  return travellers.join(', ');
}

export default class VacationModal extends React.Component {
  state = { openImage: null, uploadedImages: [] };

  setOpenImage = (openImage) => this.setState({ openImage });

  addImages = (files) => {
    files.forEach((file) => {
      generatePreview(file).then((preview, file) => {
        if (this.props.vacation.images.includes(preview)) return;
        this.props.onAddImage(preview, file);
      });
    });
  };

  render() {
    // props
    const { vacation, ...props } = this.props;
    const { title, year, images, summary } = vacation;
    // state
    const { openImage, uploadedImages } = this.state;
    // refs
    const imageInput = React.createRef(null);

    return (
      <React.Fragment>
        <Modal isPadded isFixed {...props}>
          <div className="vacation-modal__header">
            <h1>{title}</h1>
            <h1>{year}</h1>
          </div>
          {summary && <p className="vacation-modal__summary">{summary}</p>}
          <div className="vacation-modal__images">
            {images.map((image) => (
              <a
                className="vacation-modal__image"
                href="javascript:void(0)"
                key={image}
                onClick={() => this.setOpenImage(image)}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <AddImageTile
              className="vacation-modal__image"
              inputRef={imageInput}
              onClick={() => imageInput.current.click()}
              onSelect={(e) => this.addImages(Array.from(e.target.files))}
            />
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
