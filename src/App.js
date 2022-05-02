import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';

import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route strict exact path="/" element={<CharactersList/>}>
          {/* <CharactersList/> */}
        </Route>
      </Routes>
  
      
      

    </div>
  );
}

export default App;
