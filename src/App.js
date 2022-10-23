// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import EpisodesList from "./components/EpisodesList";
// import SeasonFilter from './components/SeasonsFilter';
import { useEffect, useState } from 'react';
// import SearchBar from './components/SearchBar';
import Login from './components/Login';
import { Routes, Route, useNavigate } from 'react-router';
import Home from './screens/Home';
import EpisodeDetail from './screens/EpisodeDetail';


function App() {

  const [season, setSeason] = useState(1);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  // const navigate = useNavigate();

  function filterSeason(season) {
    setSeason(season);
  }

  function doSearch(text) {
    setSearch(text);
  }

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token]);

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="/episodes" element= {<Home search={search} doSearch={doSearch} filterSeason={filterSeason} season={season}/>} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />
          <Route path="/login" element= {<Login setToken={setToken} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
