import './App.css';
import Navabar from './navbar';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Navabar />
      <div className="content">
        <Home  />
      </div>
    </div>
  );
}

export default App;
