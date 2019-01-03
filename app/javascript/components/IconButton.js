import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton({ icon, size = 'lg', ...props }) {
  return (
    <button {...props} className="icon-button">
      <FontAwesomeIcon icon={icon} size={size} color="gray" />
    </button>
  );
}
