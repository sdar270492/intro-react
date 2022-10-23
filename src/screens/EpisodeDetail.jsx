import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Episode from "../components/Episode";
import { getEpisode } from "../service/data-service";

function EpisodeDetail() {
    const { id } = useParams();
    const [episode, setEpisode] = useState();

    useEffect(() => {
        getEpisode(id)
            .then((data) => setEpisode(data));
    }, []);

    return (
        episode ? 
        <Episode 
            id={episode.id}
            img={episode.image.medium}
            title={episode.name}
            description={episode.summary}
            number={episode.number}
            season={episode.season}
         /> 
         : <div>Loading...</div>
    );
}

export default EpisodeDetail;