import './App.css';
import React,{ Component } from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import ListPlayersComponents from './components/ListPlayersComponents';
import AutoGridTable from './components/AutoGridTable';


class App extends Component{

  render(){
    return (
      <div>
        <Router>
          <div className="container">   
            <Switch>
              <Route path="/view/all" component={ListPlayersComponents} />   
              <Route path="/grid/table" component={AutoGridTable} />    
 
            </Switch>
          </div>                
        </Router>
      </div>    
    );
  }
}

export default App;
