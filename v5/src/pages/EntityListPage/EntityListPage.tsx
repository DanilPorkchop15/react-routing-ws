import { NavLink } from "react-router-dom";
import { ENTITY_LIST } from "../../entities";
export const EntityListPage: React.FC = () => {
  return (
    <div className="page">
      <h1>Entity List</h1>
      <ul>
        {ENTITY_LIST.map((entity) => (
          <li key={entity.id}>
            <NavLink to={`/entity/${entity.id}`}>
              {entity.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
