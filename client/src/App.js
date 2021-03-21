import Add from "./Components/Add";
import ContactList from "./Components/ContactList";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { toggleFlase } from "./JS/actions/edit";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Link to="/add">
        <Button inverted color="blue" onClick={() => dispatch(toggleFlase())}>
          Add Contact
        </Button>
      </Link>

      <Button inverted color="green">
        <Link to="/">show Contacts </Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
