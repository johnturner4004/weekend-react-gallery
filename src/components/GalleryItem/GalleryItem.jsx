import {useState} from 'react';
import './GalleryItem.css';

function GalleryItem( props ) {

  let imageData = props.imageData;
  console.log(imageData);

  const [click, setClick] = useState(true);
  const toggle = () => setClick(!click);
  console.log(click);

  return(
    <>
    {}
    <div className="imgBox" onClick={() => toggle()}>
      {click ? <img src={imageData.path} alt={imageData.description}></img> : <p>{imageData.description}</p>}
      </div>
    <p>{imageData.likes} people loved this!</p>
    </>
  )
}

export default GalleryItem

// {"id":1,"path":"images/myImages/IMG_0986.JGP","description":"Photo of Blake climbing up the hallway.","likes":0}