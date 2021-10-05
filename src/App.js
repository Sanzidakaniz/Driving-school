
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Notfound from './Components/Notfound/Notfound';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  exact path="/Home">
        <Home></Home>
      </Route>
      <Route exact path="/About">
        <About></About>
      </Route>
      <Route exact path="/Contact">
     <Contact></Contact>
      </Route>
      <Route exact path="/Courses">
      <Courses></Courses>
      </Route>
      <Route exact path="*">
      <Notfound></Notfound>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
