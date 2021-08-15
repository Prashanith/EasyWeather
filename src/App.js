import './components/NavigationBar/Navbar'
import NavBar from './components/NavigationBar/Navbar';
import Weather from './components/Weather/Weather.js';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>

          <Route exact path="/">
            <Weather/> 
          </Route>

          <Route exact path="/about">
            <About /> 
          </Route>
          
        </Switch>
                 
      </div>
    </Router>
  );
}

export default App;
