import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ChatPrompt from '../components/ChatPrompt';
import Chat from '../components/Chat';

const Routes = ({childProps}) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={ (props) => <ChatPrompt {...childProps} {...props} /> }  />
          <Route path="/chat" render={(props)=> <Chat {...childProps} {...props} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;