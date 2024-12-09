import logo from './logo.svg';
import './App.css';
import {browserRouter as Router,Route, Routes} from "react-router-dom"
import Homepage from './pages/HomePage/Homepage';

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
