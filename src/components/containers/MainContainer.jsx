import { EpisodesContainer } from "./EpisodesContainer";
import { LocationsContainer } from "./LocationsContainer";
import { Collapse } from "../presentational/Collapse"
// import { EpisodesContainer } from "./components/containers/EpisodesContainer";

export const MainContainer = () => {
  return (
    <>
      <Collapse
        className="episode"
        title="Episodes"
        content={<EpisodesContainer />}
      />
      <Collapse
        className="episode"
        title="Locations"
        content={<LocationsContainer />}
      />
    < />
  )
}