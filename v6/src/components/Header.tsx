import { NavLink } from "react-router-dom";
import { ENTITY_LIST } from "../entities";

interface Props {
  onAuth: () => void;
  authed: boolean;
}
export const Header: React.FC<Props> = ({ onAuth, authed }: Props) => {
  return (
    <header className="App-header">
      <div className="App-header-block">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `App-link ${isActive ? "App-link-active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/authed"
          className={({ isActive }) =>
            `App-link ${isActive ? "App-link-active" : ""}`
          }
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
            className={({ isActive }) =>
              `App-link ${isActive ? "App-link-active" : ""}`
            }
          >
            {entity.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
