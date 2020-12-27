import React, {useState} from 'react';
import './App.css';
import Header from "./Header"
import Navbar from "./Navbar"
import Results from "./Results"
import requests from "./requests"
import Watchlist from "./Watchlist"
import Watched from "./Watched"
import Add from "./Add"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GlobalProvider from "./GlobalState";

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <GlobalProvider>
        <Router>
          <Header />
            <Switch>

              <Route path="/watchlist">
                <Watchlist />
              </Route>

              <Route path="/watched">
                <Watched />
              </Route>

              <Route path="/add">
                <Add />
              </Route>

              <Route path="/">
                <Navbar  setSelectedOption={setSelectedOption}/>
                <Results selectedOption={selectedOption}/>
              </Route>

            </Switch>
        </Router>
      </GlobalProvider>



    </div>
  );
}

export default App;
