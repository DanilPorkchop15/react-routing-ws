import { ENTITY_LIST } from "../../entities";
import { useParams } from "react-router-dom";
export const EntityPage: React.FC = () => {
  const { entityId } = useParams<{entityId: string}>();
  const entity = ENTITY_LIST.find((entity) => entity.id === entityId);
  if (!entity) {
    return <div className="page">Entity not found</div>;
  }

  return <div className="page">
    <h1>{entity.name}</h1>
    <p>{entity.description}</p>
  </div>;
}