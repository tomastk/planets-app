import React from "react";
import './App.css'
import Header from "./components/Header";
import Planet from "./components/Planet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
  <div className="app">
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/neptuno" exact element={<Planet name="Neptuno" englishName={"neptune"}/>}>
          </Route>
          <Route path="/urano" exact element={<Planet name="Urano" englishName={"uranus"}/>}>
          </Route>
          <Route path="/saturno" exact element={<Planet name="Saturno" englishName={"saturn"}/>}>
          </Route>
          <Route path="/jupiter" exact element={<Planet name="Jupiter" englishName={"jupiter"}/>}>
          </Route>
          <Route path="/marte" exact element={<Planet name="Marte" englishName={"mars"}/>}>
          </Route>
          <Route path="/tierra" exact element={<Planet name="Tierra" englishName={"earth"}/>}>
          </Route>
          <Route path="/venus" exact element={<Planet name="Venus" englishName={"venus"}/>}>
          </Route>
          <Route path="/mercurio" exact element={<Planet name="Mercurio" englishName={"mercury"}/>}>
          </Route>
          <Route path="/" exact element={<Planet name="Tierra" englishName={"earth"}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    
  </div>
)};

export default App;
