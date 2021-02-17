import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Route excat path="/" />
        <Route exact path="/login" componet={Login} />
      </div>
    </Router>
  );
}

export default App;
