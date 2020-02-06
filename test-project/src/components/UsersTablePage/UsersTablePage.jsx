import React from "react";
import {Link} from "react-router-dom";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import {loadUsersFailed, loadUsersSuccess} from "../../actions/users";
import {getUsers} from "../../services/users";
import DataTable from "../DataTable/DataTable";


const mapStateToProps = (state) => {
  return {
    config: state.config,
    data: state.users.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsersFailed: (data) => {
      dispatch(loadUsersFailed(data))
    },
    loadUsersSuccess: (data) => {
      dispatch(loadUsersSuccess(data))
    }
  };
};

const UsersDataTable = connect(mapStateToProps)(DataTable);


const PAGE_SIZE = 10;

export class UsersTablePage extends React.Component {
  constructor() {
    super();

    this.state = {
      columns: [
        {
          header: "User id",
          accessor: user => user.userId,
        },
        {
          header: "Profile",
          accessor: user => this.getProfileLink(user),
        },
        {
          header: "Name",
          accessor: user => user.firstName + ' ' + user.lastName, filterable: true
        }
      ]
    };

    this.getUsers = this.getUsers.bind(this);
  }

  getProfileLink(user) {
    return (
      <Link to={`/user/${user.userId}`}>
        {`${window.location.host}/user/${user.userId}`}
      </Link>
    );
  }

  getUsers(filter, pageNum) {
    getUsers(
      `${this.props.config.serverUrl}`,
      PAGE_SIZE,
      pageNum * PAGE_SIZE,
      filter
    ).then(result => {
      this.props.loadUsersSuccess(result);
    })
      .catch(error => {
        this.props.loadUsersFailed(error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <UsersDataTable
          updateData={this.getUsers}
          columns={this.state.columns}
          pageSize={PAGE_SIZE}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTablePage);
