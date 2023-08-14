import './lagerImage.css'
import { RiCloseCircleFill } from "react-icons/ri";
import { useEffect, useRef } from 'react'

type largerImageProps = {
  closeLargerImage: () => void
  image: string
}

export const LargerImage = ({closeLargerImage, image}: largerImageProps) => {
  let imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
        closeLargerImage();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });


  return (
    <div className='larger-image-div' ref={imageRef}>
      <RiCloseCircleFill className='close-image' onClick={closeLargerImage}/>
        <img src={image} alt="larger image" className='enlarged-image'/>
    </div>
  )
}
