import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Loginpage } from './pages/Loginpage';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Loginpage/>
    </div>
  );
}

export default App;
