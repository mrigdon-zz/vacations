import React from 'react';
import classnames from 'classnames';

export default function Validator({ errors, children }) {
  return (
    <span
      className={classnames('validator', {
        'validator--error': errors && errors.length
      })}
    >
      {children}
    </span>
  );
}
