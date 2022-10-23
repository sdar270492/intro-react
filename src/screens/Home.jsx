import EpisodesList from "../components/EpisodesList";
import SearchBar from "../components/SearchBar";
import SeasonFilter from "../components/SeasonsFilter";

function Home({search, doSearch, filterSeason, season}) {
    return (
        <div className="Home">
            <SearchBar search={search} doSearch={doSearch} />
            <SeasonFilter season={season} filterSeason={filterSeason} />
            <EpisodesList season={season} search={search} />
        </div>
    )
}

export default Home;