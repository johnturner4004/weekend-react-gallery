import {useState} from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem( props ) {
  // places imageData from props into a variable
  let imageData = props.imageData;

  // hook used to track whether image or description should be rendered
  const [click, setClick] = useState(true);
  // function used to toggle value of click
  const toggle = () => setClick(!click);

  // function used to record clicks from the like button and send it to the server
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
    {/* div to load images or description */}
    <div className="imgBox" onClick={() => toggle()}>
      {/* uses click hook to determine whether image or description should be rendered */}
      {click ? <img src={imageData.path} alt={imageData.description}></img> : <p>{imageData.description}</p>}
      </div>
    {/* conditional rendering to render like count using the proper plurality */}
    {imageData.likes === 0 ? <p>No one has loves this image yet.</p> : imageData.likes === 1 ? <p>{imageData.likes} person loved this image!</p> :
    <p>{imageData.likes} people loved this image!</p>}
    {/* calls incrementLikes when like button is pressed */}
    <button onClick={() => incrementLikes()}>Love it!</button>
    </>
  )
}

export default GalleryItem