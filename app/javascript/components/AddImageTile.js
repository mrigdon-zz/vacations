import React from 'react';
import classNames from 'classnames';

export default function AddImageTile({
  className,
  onClick,
  inputRef,
  onSelect
}) {
  return (
    <a
      className={classNames('add-image-tile', className)}
      onClick={onClick}
      href="javascript:void(0)"
    >
      <div className="add-image-tile__icon" />
      <input
        className="add-image-tile__input"
        multiple
        ref={inputRef}
        onChange={onSelect}
        type="file"
        accept="image/*"
      />
    </a>
  );
}
