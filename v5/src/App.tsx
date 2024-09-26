import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { EntityListPage } from "./pages/EntityListPage/EntityListPage";
import { AuthedOnlyPage } from "./pages/AuthedOnlyPage/AuthedOnlyPage";
import { EntityPage } from "./pages/EntityPage/EntitePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  const [authed, setAuthed] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/" className="App-link">
          Home
        </NavLink>
        <NavLink to="/authed" className="App-link">
          Authed Only
        </NavLink>
        <button
          onClick={() => {
            setAuthed(!authed);
          }}
        >
          {authed ? "Logout" : "Login"}
        </button>
      </header>

      <Switch>
        <Route path="/" exact component={EntityListPage} />
        <Route path="/entity" exact component={EntityListPage} />
        <Route path="/authed">
          {authed ? <AuthedOnlyPage /> : <Redirect to="/" />}
        </Route>
        <Route path="/entity/:entityId" component={EntityPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
