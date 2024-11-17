import { Routes, Route } from 'react-router-dom';
import Todo from './todo';
import History from './history';
import NavBar from './navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route exact path="/history" element={<History />} />
        <Route path="*" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
