import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemple from './templates/MainTemplate';
import IndexPage from './components/IndexPage/IndexPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainTemple>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </MainTemple>
      </BrowserRouter>
    </div>
  );
};

export default App;
