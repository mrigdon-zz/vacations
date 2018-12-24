import React from 'react';
import { createPortal } from 'react-dom';

function close(event, handler) {
  if (event.target.closest('.modal') && !event.target.closest('.modal__close'))
    return;
  if (handler) handler();
}

export default function Modal({ children, onRequestClose, isPadded, isFixed }) {
  const modalClass = `modal ${isPadded ? 'modal--padded' : ''} ${
    isFixed ? 'modal--fixed' : ''
  }`;

  const modal = (
    <div className="modal__container" onClick={(e) => close(e, onRequestClose)}>
      <div className={modalClass}>
        <button
          className="modal__close"
          onClick={(e) => close(e, onRequestClose)}
        />
        <div className="modal__children">{children}</div>
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById('modals'));
}
