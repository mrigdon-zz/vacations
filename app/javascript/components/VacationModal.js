import React, { useState, useRef } from 'react';
import Modal from './Modal';
import { put } from 'lib/ajax';
import generatePreview from 'lib/generatePreview';
import AddImageTile from './AddImageTile';
import { connect } from 'react-redux';
import { addImage } from 'actions/vacations';

function travellersString(travellers) {
  if (travellers.length === 1) return travellers[0];
  return travellers.join(', ');
}

function VacationModal({ vacation, addImage, ...props }) {
  // props
  const { title, year, images, summary } = vacation;
  // state
  const [openImage, setOpenImage] = useState(null);
  // refs
  const imageInput = useRef(null);

  const addImages = (files) => {
    files.forEach((file) => {
      generatePreview(file).then((image) => addImage(image, vacation.id));
    });
  };

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
              onClick={() => setOpenImage(image)}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <AddImageTile
            className="vacation-modal__image"
            inputRef={imageInput}
            onClick={() => imageInput.current.click()}
            onSelect={(e) => addImages(Array.from(e.target.files))}
          />
        </div>
      </Modal>
      {openImage && (
        <Modal onRequestClose={() => setOpenImage(null)}>
          <img className="vacation-modal__big-image" src={openImage} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default connect(
  () => ({}),
  { addImage }
)(VacationModal);
