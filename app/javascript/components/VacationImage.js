import React from "react";
import IconButton from "./IconButton";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import AnimateScale from "./AnimateScale";

export default class VacationImage extends React.Component {
  state = { isHolding: false };

  handleMouseDown = () => {
    if (this.props.isHeld) return;
    this.setState({ isHolding: true });
    this.holdTimer = setTimeout(this.props.onHeld, 1000);
  };

  handleMouseUp = () => {
    if (this.props.isHeld) return;
    clearTimeout(this.holdTimer);
  };

  render() {
    const { src, onHeld, className, isHeld, onRemove, ...props } = this.props;
    return (
      <a
        {...props}
        className={classnames("vacation-image", className)}
        href="javascript:void(0)"
        style={{ backgroundImage: `url(${src})` }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <AnimateScale>
          {isHeld && (
            <IconButton
              className="vacation-image__delete"
              icon={faTimesCircle}
              size="2x"
              onClick={onRemove}
            />
          )}
        </AnimateScale>
      </a>
    );
  }
}
