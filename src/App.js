import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import UI from './containers/UI/UI';

import Welcome from './containers/Welcome/Welcome';
import Play from './containers/Play/Play';
import ScaleSelector from './containers/ScaleSelector/ScaleSelector';

import {ScaleProvider} from './context/ScaleContext';

function App() {
  return (
    <ScaleProvider>
      <div className="App">
        <Router>
          <UI>
            <Switch>
              <Route path="/" exact component={Welcome}></Route>
              <Route path="/select-scale" exact component={ScaleSelector}></Route>
              <Route path="/play" exact component={Play}></Route>
            </Switch>
          </UI>
        </Router>
      </div>
    </ScaleProvider>
  );
}

export default App;
