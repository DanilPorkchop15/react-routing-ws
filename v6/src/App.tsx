import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { EntityListPage } from "./pages/EntityListPage/EntityListPage";
import { AuthedOnlyPage } from "./pages/AuthedOnlyPage/AuthedOnlyPage";
import { EntityPage } from "./pages/EntityPage/EntitePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Navigate } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  const [authed, setAuthed] = React.useState(false);
  return (
    <div className="App">
      <Header onAuth={() => setAuthed(!authed)} authed={authed} />
      <Routes>
        <Route path="/" element={<EntityListPage />} />
        <Route path="/entity" element={<EntityListPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/authed"
          element={authed ? <AuthedOnlyPage /> : <Navigate to="/" replace />}
        />
        <Route path="/entity/:entityId" element={<EntityPage />} />
      </Routes>
    </div>
  );
}

export default App;
