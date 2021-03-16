import Login from "./pages/Login"
import {
  Switch,
  Route
} from "react-router-dom"
function Dashboard() {



  return (
    <div className="App">
     Dashboard page
     <Switch>
     <Route path="/login/" component={Login} />
     </Switch>
    </div>
  );
}

export default Dashboard