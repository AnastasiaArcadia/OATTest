import React from "react";
import Spinner from "react-spinkit";
import {Table, Button, Input} from 'reactstrap';
import "./DataTable.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default class DataTable extends React.Component {
  constructor() {
    super();

    this.state = {
      pageNum: 0,
      lastPage: 0,
      filter: ''
    };

    this.onBack = this.onBack.bind(this);
    this.onFront = this.onFront.bind(this);
    this.onInputFilter = this.onInputFilter.bind(this);

    this.renderTable = this.renderTable.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
    this.renderFrontButton = this.renderFrontButton.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    const {data, error} = nextProps;
    let lastPage = this.state.lastPage;
    if (data.length) {
      lastPage = this.state.pageNum + 1;
    }
    this.setState({data, error, lastPage});
  }

  getData(filter = this.state.filter) {
    const {pageNum} = this.state;
    this.props.updateData(filter, pageNum);
  }

  onBack() {
    this.setState({
      pageNum: --this.state.pageNum
    });
    this.getData();
  }

  onFront() {
    this.setState({
      pageNum: ++this.state.pageNum
    });
    this.getData();
  }

  onInputFilter(e) {
    this.setState({
      filter: e.target.value,
      pageNum: 0
    });
    this.getData(e.target.value);
  }

  renderBackButton() {
    return (
      <Button className="page-back"
              outline color="secondary"
              onClick={this.onBack}
              disabled={this.state.pageNum === 0}>
        {'<<'}
      </Button>);
  }

  renderFrontButton() {
    const {lastPage, pageNum, data} = this.state;
    return (
      <Button className="page-front"
              outline color="secondary"
              onClick={this.onFront}
              disabled={pageNum === lastPage || data.length < this.props.pageSize}>
        {'>>'}
      </Button>
    );
  }

  renderHeader() {
    const {filter} = this.state;
    const {columns} = this.props;
    return (<thead>
      <tr>
        {columns.map(
          column => {
            return (
              <td key={column.header}>{column.header}</td>
            );
          }
        )}
      </tr>
      <tr>
        {columns.map(
          column => {
            return (
              <td key={column.header + 'inp'}>
                {column.filterable &&
                <Input value={filter} onChange={this.onInputFilter}/>}
              </td>
            );
          }
        )}
      </tr>
      </thead>
    );
  }

  renderRows() {
    const {data} = this.state;
    const {columns} = this.props;
    return (
      data.map((d, i) => (
        <tr key={i}>
          {columns.map(
            column => {
              return (
                <td key={column.header + i}>
                  {column.accessor(d)}
                </td>
              );
            })}
        </tr>
      ))
    );
  }

  renderTable() {
    return (
      <div>
        <Table striped bordered hover>
          {this.renderHeader()}
          <tbody>
          {this.renderRows()}
          </tbody>
        </Table>
        <br/>
      </div>
    );
  }

  render() {
    const {data, error, pageNum} = this.state;

    if (error) {
      return <ErrorMessage message={error}/>;
    }
    if (data) {
      return (
        <div>
          {this.renderTable()}
          <div align="center">
            {this.renderBackButton()}
            Page {pageNum + 1}
            {this.renderFrontButton()}
          </div>
        </div>
      );
    }
    return <Spinner name="double-bounce"/>;
  }
}

