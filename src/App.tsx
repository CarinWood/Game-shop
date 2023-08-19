import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { UserContextProvider } from './contexts/UserContext';
import { Loginpage } from './pages/Loginpage';
import { Member } from './pages/Member';
import { Routes, Route} from 'react-router-dom'
import Search from './pages/Search';
import { Shop } from './pages/Shop';
import { Cart } from './components/cart/Cart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { Checkout } from './pages/Checkout';
import { WishListProvider } from './contexts/WishlistContext';


function App() {

 
  return (
    <div className="App">
      <ShoppingCartProvider>
      <UserContextProvider>
        <WishListProvider>
    

        <Navbar/>
        <Cart/>

        <Routes>
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/member" element={<Member/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/" element={<Shop/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

  


        </WishListProvider>
      </UserContextProvider>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
