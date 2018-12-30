import React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

function close(event, handler) {
  if (event.target.closest('.modal') && !event.target.closest('.modal__close'))
    return;
  if (handler) handler();
}

export default function Modal({
  children,
  onRequestClose,
  isPadded,
  isFixed,
  footer
}) {
  const modalClass = classNames('modal', { 'modal--fixed': isFixed });
  const childrenClass = classNames('modal__children', {
    'modal__children--padded': isPadded
  });

  const modal = (
    <div className="modal__container" onClick={(e) => close(e, onRequestClose)}>
      <div className={modalClass}>
        <button
          className="modal__close"
          onClick={(e) => close(e, onRequestClose)}
        />
        <div className={childrenClass}>{children}</div>
        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
  return createPortal(modal, document.getElementById('modals'));
}
