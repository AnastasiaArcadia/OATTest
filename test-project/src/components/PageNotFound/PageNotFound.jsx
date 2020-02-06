import React from "react";
import "react-table/react-table.css";
import {connect} from 'react-redux';


export class PageNotFound extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Not found</h2>
      </div>
    );
  }
}

export default connect()(PageNotFound);
