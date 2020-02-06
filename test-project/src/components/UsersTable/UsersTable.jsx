import React from "react";
import {loadUsersStart, loadUsersSuccess} from "../../actions";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import {loadData} from "../../services";
import Spinner from "react-spinkit";
import Table from "../Table/Table";


const columns = {
  "User id": "userId",
  "Last name": "lastName",
  "First name": "firstName",
};

const USERS_URL = "/users";

export class UsersTable extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.loadUsersStart();
    loadData(this.props.config.serverUrl + USERS_URL)
      .then(result => {
        this.props.loadUsersSuccess(result);
      });
  }

  render() {
    const {data} = this.props.users;
    if (data) {
      return (
        <Table data={data} columns={columns}/>
      );
    } else {
      return <Spinner name="double-bounce" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    config: state.config,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsersStart: () => {
      dispatch(loadUsersStart())
    },
    loadUsersSuccess: (data) => {
      dispatch(loadUsersSuccess(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
