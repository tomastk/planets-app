import React, { useState } from "react";
import './App.css'
import Header from "./components/Header";
import Planet from "./components/Planet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Planets from "./components/Planets";

const App = () => {
  const [showed, setShowed] = useState(true)
  const updateMenu = () => {
    setShowed(!showed)
  }
  return (
  <div className="app">
    <Router>
      <div>
        <Header  updateMenu={updateMenu} showed={showed} />
        <Routes>
          <Route path="/planetas" exact element={<Planets updateMenu={updateMenu}/>}> </Route>
          <Route path="/neptuno" exact element={<Planet updateMenu={updateMenu} name="Neptuno" englishName={"neptune"}/>}>
          </Route>
          <Route path="/urano" exact element={<Planet updateMenu={updateMenu} name="Urano" englishName={"uranus"}/>}>
          </Route>
          <Route path="/saturno" exact element={<Planet updateMenu={updateMenu} name="Saturno" englishName={"saturn"}/>}>
          </Route>
          <Route path="/jupiter" exact element={<Planet updateMenu={updateMenu} name="Jupiter" englishName={"jupiter"}/>}>
          </Route>
          <Route path="/marte" exact element={<Planet updateMenu={updateMenu} name="Marte" englishName={"mars"}/>}>
          </Route>
          <Route path="/tierra" exact element={<Planet updateMenu={updateMenu} name="Tierra" englishName={"earth"}/>}>
          </Route>
          <Route path="/venus" exact element={<Planet updateMenu={updateMenu} name="Venus" englishName={"venus"}/>}>
          </Route>
          <Route path="/mercurio" exact element={<Planet updateMenu={updateMenu} name="Mercurio" englishName={"mercury"}/>}>
          </Route>
          <Route path="/" exact element={<Planet updateMenu={updateMenu} name="Tierra" englishName={"earth"}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    
  </div>
)};

export default App;
