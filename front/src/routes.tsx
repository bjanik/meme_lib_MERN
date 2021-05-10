import React from 'react';
import App from './App'
import Nav from './nav';
import Login from './component/login_register/login';
import Register from './component/login_register/register';
import Upload from './component/upload/upload'
import Update_password from './component/update_password/update_password'
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Nav/>
        <Switch>
            <Route exact path="/home" component={App} />
            <Route exact path="/">
            <Redirect to="/home" />
            </Route>   
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/update_password" component={Update_password} />             
        </Switch>
    </div>
  );
};