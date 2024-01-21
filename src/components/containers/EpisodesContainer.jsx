import { EpisodeList } from "../presentational/EpisodeList";
import { fetchEpisodes } from "../../api";
import { useEffect, useState } from "react";

export const EpisodesContainer = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes().then((data) => {
      setEpisodes(data);
    });
  }, []);

  return <EpisodeList episodes={episodes} />;
};
