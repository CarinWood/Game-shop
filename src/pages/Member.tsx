import "../styles/member.css";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import mario from "../assets/images/mario.png";
import { Carousel } from "../components/Carousel/Carousel";






export const Member = () => {
  const [user, setUser] = useContext(UserContext);



  return (
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
          

        <p className="choose-text">Choose a new avatar for your profile</p>
        <Carousel/>
    </div>
  );
};
