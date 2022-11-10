import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home/Home'
import Team01 from './pages/Team01/Team01'
import ListTeam01 from './pages/ListTeam01/ListTeam01'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <div className='Head'>
        <h1>SOLERA TEAMS. BOOTCAMP 4</h1>
        <img width='50px' src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="" srcset="" />
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/team01" element={<Team01/>} exact></Route>
        <Route path="/listTeam01" element={<ListTeam01/>} exact></Route>
        <Route path="*" element={<NotFound/>} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
