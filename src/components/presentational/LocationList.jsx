import { Collapse } from "./Collapse";
import { CharactersContainer } from "../containers/CharactersContainer";

export const LocationList = ({ locations }) => {
  return (
    <div>
      {locations.map((location) => (
        <Collapse
          key={location.id}
          className="episode"
          title={location.type + " " + location.name}
          content={
            <CharactersContainer
              ids={location.residents.map((resident) => {
                const id = resident.split("/").pop();
                return id;
              })}
            />
          }
        />
      ))}
    </div>
  );
};
