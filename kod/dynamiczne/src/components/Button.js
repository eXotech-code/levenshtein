import React from 'react';
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.sizeRef = React.createRef();
    }
  
    render() {
      let className = "button-primary";
  
      if (this.props.variant) {
        className = "button-" + this.props.variant;
      }
  
      return (
        <button className={className} ref={this.sizeRef} onClick={this.props.action}>
            {this.props.children}
        </button>
      );
    }
}

export default Button;