import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemple from './templates/MainTemplate';
import IndexPage from './pages/IndexPage';
import Navbar from './components/Navbar/Navbar';
import SearchComponent from './components/SearchComponent/SearchComponent';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MainTemple>
          <Navbar />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route path="/search" component={SearchComponent} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </MainTemple>
      </BrowserRouter>
    </div>
  );
};

export default App;
