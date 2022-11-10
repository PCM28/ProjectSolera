import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import ListTeam from './pages/ListTeam/ListTeam'
import NotFound from './pages/NotFound/NotFound'
import NavBar from './components/NavBar/NavBar';
import { Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className='Head'>
        <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
        <Link to="/"><img width='50px' src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" srcset="" /></Link>
      </div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/team" element={<Team/>} exact></Route>
        <Route path="/listTeam" element={<ListTeam/>} exact></Route>
        <Route path="*" element={<NotFound/>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
