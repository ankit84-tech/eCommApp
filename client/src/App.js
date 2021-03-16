import {
  Switch,
  Route
} from "react-router-dom"
import Dashboard from "./AdminPanal/Dashboard"
function App() {
  return (
    <div className="App">
    main app
     <Switch>
        <Route path="/admin" component={Dashboard} />
     </Switch>
    </div>
  );
}

export default App;