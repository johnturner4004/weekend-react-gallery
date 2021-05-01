import "./GalleryList.css"
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ) {
  // assigns pictureArray from props to a variable
  let pictureArray = props.pictureArray;

  // renders area for image cards to be loaded and divs for each card
  //maps pictureArray to image cards and sends data to GalleryItem for each picture
  return (
    <div className="cardBox">
      {pictureArray.map(imageData => 
        <div className="card" key={imageData.id}><GalleryItem imageData={imageData} /></div>
      )}
    </div>
    
  );
}

export default GalleryList;
