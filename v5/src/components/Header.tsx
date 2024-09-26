import { NavLink } from "react-router-dom";
import { ENTITY_LIST } from "../entities";

type Props = {
  onAuth: () => void;
  authed: boolean;
};

export const Header: React.FC<Props> = ({ onAuth, authed }: Props) => {
  return (
    <header className="App-header">
      <div className="App-header-block">
        <NavLink
          to="/"
          exact
          activeClassName="App-link-active"
          className="App-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/authed"
          activeClassName="App-link-active"
          className="App-link"
        >
          Authed Only
        </NavLink>
        <button onClick={onAuth}>{authed ? "Logout" : "Login"}</button>
      </div>
      <div className="App-header-block">
        {ENTITY_LIST.map((entity) => (
          <NavLink
            key={entity.id}
            to={`/entity/${entity.id}`}
            activeClassName="App-link-active"
            className="App-link"
          >
            {entity.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
