import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { UserContextProvider } from './contexts/UserContext';
import { Loginpage } from './pages/Loginpage';
import { Member } from './pages/Member';
import { Routes, Route} from 'react-router-dom'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <UserContextProvider>

        <Navbar/>

        <Routes>
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>

      </UserContextProvider>
    </div>
  );
}

export default App;
