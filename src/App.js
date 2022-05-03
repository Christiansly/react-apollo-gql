import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./pages/CharactersList";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />}></Route>
        <Route strict exact path="/search" element={<Search/>}/>
        <Route strict exact path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
