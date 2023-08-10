import './carousel.css'
import { BsCheckLg } from "react-icons/bs";
import { useContext, useEffect } from 'react'
import mariohead from '../../assets/images/mariohead.png'
import luigihead from '../../assets/images/luigihead.png'
import princesshead from '../../assets/images/princesshead.png'
import toadhead from '../../assets/images/toadhead.png'
import yoshihead from '../../assets/images/yoshihead.png'

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/sea-green';
import { ProfilePicContext } from '../../contexts/ProfilePicContext';




export const Carousel = () => {

    const [profilePic, setProfilePic] = useContext(ProfilePicContext)

    const handleClick = (character) => {
        setProfilePic(character)
    }

    console.log(profilePic)

  
  return (
    <div className='carousel-container'>
          <Splide options={{ 
            perPage: 3, 
            pagination: false, 
            focus: 'center', 
            type: 'loop', 
            perMove: 1,
            updateOnMove: true,
            }}>
            <SplideSlide>
       
                <div 
                    className={profilePic === 'mario' ? 'slider-image-container frame' : 'slider-image-container'} 
                    onClick={()=>handleClick('mario')}
                >
                    <img  src={mariohead} onClick={()=>handleClick('mario')}/>
                </div>
             
            </SplideSlide>

           
            <SplideSlide>
               
                <div 
                    className={profilePic === 'princess' ? 'slider-image-container frame': 'slider-image-container'} 
                    onClick={()=>handleClick('princess')}
                >
                    <img src={princesshead}  onClick={()=>handleClick('princess')}/>
                </div>
               
            </SplideSlide>
            <SplideSlide>
                <div 
                    className={profilePic === 'luigi' ? 'slider-image-container frame': 'slider-image-container'}
                    onClick={()=>handleClick('luigi')}
                >
                    <img src={luigihead}  onClick={()=>handleClick('luigi')}/>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div 
                    className={profilePic === 'toad' ? 'slider-image-container frame': 'slider-image-container'} 
                    onClick={()=>handleClick('toad')}
                >
                    <img src={toadhead} onClick={()=>handleClick('toad')}/>
                </div>
            </SplideSlide>

            <SplideSlide>
                <div 
                    className={profilePic === 'yoshi' ? 'slider-image-container frame': 'slider-image-container'}
                    onClick={()=>handleClick('yoshi')}>
                    <img src={yoshihead}  onClick={()=>handleClick('yoshi')}/>
                </div>
            </SplideSlide>
          </Splide>
    </div>
  )
}
