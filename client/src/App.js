import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemple from './templates/MainTemplate';
import IndexPage from './pages/IndexPage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar/Navbar';
import BookDetails from './components/Books/BookDetails';
import 'materialize-css/dist/css/materialize.min.css';
import './assets/style/index.css';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainTemple>
          <Navbar />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/search/:book_id" component={BookDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </MainTemple>
      </BrowserRouter>
    </div>
  );
}

export default App;
