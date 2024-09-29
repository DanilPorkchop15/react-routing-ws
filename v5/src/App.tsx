import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { EntityListPage } from "./pages/EntityListPage/EntityListPage";
import { AuthedOnlyPage } from "./pages/AuthedOnlyPage/AuthedOnlyPage";
import { EntityPage } from "./pages/EntityPage/EntitePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Redirect } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const [authed, setAuthed] = React.useState(false);
  return (
    <div className="App">
      <Header onAuth={() => setAuthed(!authed)} authed={authed} />
      <Switch>
        <Route path="/" exact component={EntityListPage} />
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
