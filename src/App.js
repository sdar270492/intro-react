// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EpisodesList from "./components/EpisodesList";
import SeasonFilter from './components/SeasonsFilter';
import { useState } from 'react';

function App() {

  const [season, setSeason] = useState(1);

  function filterSeason(season) {
    setSeason(season);
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <SeasonFilter season={season} filterSeason={filterSeason} />
        <EpisodesList season={season} />
      </div>
    </div>
  );
}

export default App;
