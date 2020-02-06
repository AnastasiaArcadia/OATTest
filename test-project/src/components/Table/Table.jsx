import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";


export class Table extends React.Component {
  constructor(props) {
    super();
    const {data, columns} = props;
    this.state = {
      data, columns
    };
  }

  renderColumns() {
    const {columns} = this.state;
    return Object.keys(columns).map(
      name => (
        {
          Header: name,
          accessor: columns[name],
          filterMethod: (filter, row) => row[columns[name]].indexOf(filter.value) >= 0
        }
      )
    );
  }

  render() {
    const {data} = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={
            this.renderColumns()
          }
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br/>
      </div>
    );
  }
}

export default Table;
