import './App.css';
import Header from './components/Header';
import JP from './components/JPBody';
import EN from './components/ENBody';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={JP}></Route>
            <Route exact path="/contact" component={EN}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
