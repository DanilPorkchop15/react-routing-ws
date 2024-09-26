import { Link } from "react-router-dom";
import { ENTITY_LIST } from "../../entities";
export const EntityListPage: React.FC = () => {
  return (
    <div className="page">
      <h1>Entity List</h1>
      <ul>
        {ENTITY_LIST.map((entity) => (
          <li key={entity.id}>
            <Link to={`/entity/${entity.id}`}>
              {entity.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
