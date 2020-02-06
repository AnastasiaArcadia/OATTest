import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import "react-table/react-table.css";
import {connect} from 'react-redux';
import UsersTable from "../UsersTable/UsersTable";
import {PageNotFound} from "../PageNotFound/PageNotFound";


export class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={UsersTable}/>
          <Route exact path='/users' component={UsersTable}/>
          <Route path='/user' component={UsersTable}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
