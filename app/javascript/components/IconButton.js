import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

export default function IconButton({ icon, size = "lg", className, ...props }) {
  return (
    <button {...props} className={classnames("icon-button", className)}>
      <FontAwesomeIcon icon={icon} size={size} color="gray" />
    </button>
  );
}
