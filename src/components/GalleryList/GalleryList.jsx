import "./GalleryList.css"
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList( props ) {

  console.log(props.pictureArray);
  let pictureArray = props.pictureArray;
  console.log(pictureArray);

  return (
    <div className="cardBox">
      {pictureArray.map(imageData => 
        <div className="card" key={imageData.id}><GalleryItem imageData={imageData} /></div>
      )}
    </div>
    
  );
}

export default GalleryList;
