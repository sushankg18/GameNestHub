import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from "./components/Home";
import CatalogGames from "./components/CatalogGames";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import ForgetPass from "./components/ForgetPass";
import { NoteState } from "./Context/NoteState";
import GameDetails from "./components/GameDetails";
import Action from "./genreGames/Action";

function App() {

  return (
    <NoteState>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/catalog/:id"} element={<CatalogGames />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/forgetpassword" element={<ForgetPass />} />
          <Route path="/games/:id" element={<GameDetails />}/>
          <Route path="/genre/action" element={<Action />}/>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;


// `${URL}games?genres=2&page_size=40&key=${API_KEY}&page=${page}`