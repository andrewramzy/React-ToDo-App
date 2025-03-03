
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import TaskDetails from './Taskdetails';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
     <div className="content">
      <Switch>
       <Route exact path="/">
          <Home />
       </Route>
       <Route path="/create">
          <Create />
       </Route>
       <Route path="/tasks/:id">
          <TaskDetails />
       </Route>
      </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App; 
 