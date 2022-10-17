import { useEffect, useState } from "react";
import { getEpisodes } from "../service/data-service";
import Episode from "./Episode";

const initialState = [];

function EpisodesList({ season, search }) {
  const [episodes, setEpisodes] = useState(initialState);

  // console.log("Resolving...");

  useEffect(() => {

    getEpisodes().then((episodes) => {
      // console.log(episodes);
      setEpisodes(episodes);
    });

  }, []);

  return (
    <div className="d-flex flex-wrap p-5">
      { episodes === initialState 
      ? 'Loading...' 
      : episodes
          .filter((e) => (season === null ? true : e.season === season))
          .filter((e) => e.name.includes(search))
          .map((episode, i) => (
            <Episode
              key={i}
              img={episode.image.medium}
              title={episode.name}
              description={episode.summary}
              number={episode.number}
              season={episode.season}
        />
      ))}
    </div>
  );
}

export default EpisodesList;
