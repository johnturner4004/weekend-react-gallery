import {useState} from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem( props ) {

  let imageData = props.imageData;
  console.log(imageData);

  const [click, setClick] = useState(true);
  const toggle = () => setClick(!click);
  console.log(click);

  const incrementLikes = () => {
    console.log('click', imageData.id);
    axios.put(`/gallery/like/${imageData.id}`)
    .then(response => {
      console.log('Increased likes for image', response);
    })
    .catch(error => {
      console.log('Error increasing likes');
      alert('Unable ton increase like count');
    });
  }

  return(
    <>
    {}
    <div className="imgBox" onClick={() => toggle()}>
      {click ? <img src={imageData.path} alt={imageData.description}></img> : <p>{imageData.description}</p>}
      </div>
    <p>{imageData.likes} people loved this!</p>
    <button onClick={() => incrementLikes()}>Love it!</button>
    </>
  )
}

export default GalleryItem

// {"id":1,"path":"images/myImages/IMG_0986.JGP","description":"Photo of Blake climbing up the hallway.","likes":0}