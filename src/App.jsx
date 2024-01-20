import React from "react";
import "./App.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from "./components/Home";
import CatalogGames from "./components/CatalogGames";
function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path={"/catalog/:id"} element={<CatalogGames/>} />
        </Routes>
      </Router>
  );
}

export default App;
