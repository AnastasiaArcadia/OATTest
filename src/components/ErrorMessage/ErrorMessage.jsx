import React from "react";
import "./ErrorMessage.css";


export class ErrorMessage extends React.Component {
  render() {
    const {message} = this.props;
    return (
      <div className="error">
        <h3>Error occurred: {message}</h3>
      </div>
    );
  }
}

export default ErrorMessage;