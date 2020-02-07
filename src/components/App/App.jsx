import React from "react";
import {Route, Switch} from 'react-router-dom';
import UsersTable from "../UsersTablePage/UsersTablePage";
import UsersPage from "../UserPage/UserPage";
import PageNotFound from "../PageNotFound/PageNotFound";


export default class App extends React.Component {
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
