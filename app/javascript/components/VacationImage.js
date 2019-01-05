import React from "react";

export default class VacationImage extends React.Component {
  state = { isHolding: false, isHeld: false };

  handleMouseDown = () => {
    this.setState({ isHolding: true });
    this.holdTimer = setTimeout(() => {
      this.setState({ isHeld: true });
      this.props.onHeld();
    }, 1000);
  };

  handleMouseUp = () => {
    if (this.state.isHeld) return;
    clearTimeout(this.holdTimer);
  };

  render() {
    const { isHeld } = this.state;
    const { src, onHeld, ...props } = this.props;
    return (
      <a
        {...props}
        href="javascript:void(0)"
        style={{ backgroundImage: `url(${src})` }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      />
    );
  }
}
