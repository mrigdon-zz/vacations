import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default function AnimateScale({ children, duration = 200 }) {
  return (
    <ReactCSSTransitionGroup
      transitionName="animate-scale"
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}
    >
      {children}
    </ReactCSSTransitionGroup>
  );
}
