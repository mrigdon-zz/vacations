import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { put } from "lib/ajax";
import generatePreview from "lib/generatePreview";
import AddImageTile from "./AddImageTile";
import { connect } from "react-redux";
import { addImage, removeVacation, removeImage } from "actions/vacations";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import VacationImage from "./VacationImage";
import classnames from "classnames";

const deleteConfirmMessage =
  "Are you sure you want to delete this vacation? You'll lose all images associated with it.";

function travellersString(travellers) {
  if (travellers.length === 1) return travellers[0];
  return travellers.join(", ");
}

class VacationModal extends React.Component {
  state = { openImage: null, isEditingImages: false };

  imageInput = React.createRef();

  setOpenImage = openImage => this.setState({ openImage });

  setIsEditingImages = isEditingImages => this.setState({ isEditingImages });

  addImages = files => {
    const { vacation, onAddImage } = this.props;
    files.forEach(file => {
      generatePreview(file).then(url => {
        if (vacation.images.some(image => image.url === url)) return;
        onAddImage({ url, file }, vacation.id);
      });
    });
  };

  handleDelete = () => {
    if (!confirm(deleteConfirmMessage)) return;
    const { onRemove, onRequestClose, vacation } = this.props;
    onRemove(vacation.id).then(onRequestClose);
  };

  handleClickImage = image => {
    if (this.state.isEditingImages) return;
    this.setOpenImage(image);
  };

  handleHeldImage = () => {
    this.setIsEditingImages(true);
    document.onclick = e => {
      if (e.target.closest(".vacation-modal__image")) return;
      this.setIsEditingImages(false);
      document.onclick = null;
    };
  };

  componentWillUnmount() {
    document.onclick = null;
  }

  render() {
    // props
    const {
      vacation,
      onAddImage,
      onRemove,
      onRemoveImage,
      ...props
    } = this.props;
    if (!vacation) return null;
    const { title, year, images, summary, id } = vacation;
    // state
    const { openImage, isEditingImages } = this.state;

    return (
      <React.Fragment>
        <Modal className="vacation-modal" isPadded isFixed {...props}>
          {id && (
            <div className="vacation-modal__actions">
              {/* <IconButton icon={faEdit} /> */}
              <IconButton icon={faTrashAlt} onClick={this.handleDelete} />
            </div>
          )}
          <div className="vacation-modal__header">
            <h1 className="vacation-modal__title">{title}</h1>
            <h1 className="vacation-modal__year">{year}</h1>
          </div>
          {summary && <p className="vacation-modal__summary">{summary}</p>}
          <div
            className={classnames("vacation-modal__images", {
              "vacation-modal__images--editing": isEditingImages
            })}
          >
            {images.map(({ url, id }) => (
              <VacationImage
                className="vacation-modal__image"
                key={url}
                src={url}
                isHeld={isEditingImages}
                onClick={() => this.handleClickImage(url)}
                onHeld={this.handleHeldImage}
                onRemove={() => onRemoveImage(id, vacation.id)}
              />
            ))}
            <AddImageTile
              className="vacation-modal__image"
              inputRef={this.imageInput}
              onClick={() => this.imageInput.current.click()}
              onSelect={e => this.addImages(Array.from(e.target.files))}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddImage: ownProps.onAddImage
    ? ownProps.onAddImage
    : (image, vacationId) => dispatch(addImage(image, vacationId)),
  onRemoveImage: (imageId, vacationId) =>
    dispatch(removeImage(imageId, vacationId)),
  onRemove: id => dispatch(removeVacation(id))
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(VacationModal);
