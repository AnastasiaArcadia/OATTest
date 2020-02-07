import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import UsersTable from "../UsersTablePage/UsersTablePage";
import UsersPage from "../UserPage/UserPage";
import PageNotFound from "../PageNotFound/PageNotFound";


export class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={UsersTable}/>
          <Route exact path='/users' component={UsersTable}/>
          <Route path='/user' component={UsersPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
