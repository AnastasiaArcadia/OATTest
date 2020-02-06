import React from "react";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import Spinner from "react-spinkit";
import "./UserPage.css";
import {getUser} from "../../services/users";
import {loadUserFailed, loadUserSuccess} from "../../actions/users";
import PageNotFound from "../PageNotFound/PageNotFound";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const fields = {
  "Last name": "lastName",
  "First name": "firstName",
  "Login": "login",
  "Title": "title",
  "Gender": "gender",
  "Email": "email",
  "Address": "address"
};

export class UserPage extends React.Component {
  componentWillMount() {
    const id = this.getId();
    this.setState({id});
    getUser(`${this.props.config.serverUrl}`, id)
      .then(result => {
        this.props.loadUserSuccess(result);
      })
      .catch(error => {
        this.props.loadUserFailed(error.message);
      });
  }

  getId() {
    return this.props.location.pathname.split('/user/')[1];
  }

  renderFields() {
    const {user} = this.props.users;
    return Object.keys(fields).map(
      f => <p key={f}><b>{f}</b>: {user[fields[f]]}</p>
    );
  }

  render() {
    const {user, error} = this.props.users;
    const {id} = this.state;

    if (!id) {
      return <PageNotFound/>;
    }

    if (error) {
      return <ErrorMessage message={error}/>;
    }

    if (user) {
      return (
        <div>
          <h1>User profile</h1>
          <div align="center">
            <div className="user-profile">
            <div align={"left"} className="user-info">
              {this.renderFields(user)}
            </div>
            <div className="user-pic">
              <a href="https://github.com/Joeyryanbridges">
                <img src={user.picture} className="githubIcon"/>
              </a>
            </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner name="double-bounce"/>;
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
    loadUserFailed: (data) => {
      dispatch(loadUserFailed(data))
    },
    loadUserSuccess: (data) => {
      dispatch(loadUserSuccess(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
