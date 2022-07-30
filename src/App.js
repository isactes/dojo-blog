import './App.css';
import Navabar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogdetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navabar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create /> 
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
