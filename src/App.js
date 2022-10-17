// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EpisodesList from "./components/EpisodesList";
import SeasonFilter from './components/SeasonsFilter';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Login from './components/Login';

function App() {

  const [season, setSeason] = useState(1);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  function filterSeason(season) {
    setSeason(season);
  }

  function doSearch(text) {
    setSearch(text);
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        {token ? (
          <>
            <SearchBar search={search} doSearch={doSearch} />
            <SeasonFilter season={season} filterSeason={filterSeason} />
            <EpisodesList season={season} search={search} />
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}

export default App;
