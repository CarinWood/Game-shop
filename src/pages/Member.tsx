import "../styles/member.css";
import { useContext } from "react";
import { UserContext, useUserContext } from "../contexts/UserContext";
import { FaHeart} from "react-icons/fa";
import mario from "../assets/images/mario.png";
import { useWishList } from "../contexts/WishlistContext";
import GameItem from "../components/gameItem.tsx/GameItem";
import { WishItem } from "../components/wishItem/WishItem";
import { Footer } from "../footer/Footer";






export const Member = () => {
  const {user, setUser} = useUserContext()
  const { wishList, setWishList } = useWishList()



  return (
    <>
    <div className="member-container">
      <p className="welcome-message">Welcome {user}!</p>

      <article className="member-card">
        <div className="left">
          <p className="card-headline">
            Membership level: <span>Gold</span>
          </p>
          <p>
            Right now we offer all our gold members a 10% discount when buying any
            game in our shop! Use the code: <span>Mario10</span> at checkout.
          </p>
          <p className="validity"><i>The offer is valid until 10/14/2023</i></p>
        </div>

        <div className="right">
          <div className="image-container">
            <img src={mario} alt="mario image" />
          </div>
        </div>
      </article>
        
  
        <p className="wishlist-text"><FaHeart className="redheart"/> Your Wishlist:</p>
        
        <div className="shop-container">
          {wishList.map((item) => {
            return <div key={item.id}>
              <WishItem 
                _id={item.id} 
                _title={item.title} 
                _url={item.url} 
                _price={item.price} 
              />
            </div>
          })}

        </div>
        
    </div>
    <Footer color="white" />
    </>
  );
};
  