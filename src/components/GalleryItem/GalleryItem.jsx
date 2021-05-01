import './GalleryItem.css'

function GalleryItem( props ) {

  let imageData = props.imageData;
  console.log(imageData);

  return(
    <>
    {}
    <div className="imgBox"><img src={imageData.path} alt={imageData.description}></img></div>
    <p>{imageData.likes} people loved this!</p>
    </>
  )
}

export default GalleryItem

// {"id":1,"path":"images/myImages/IMG_0986.JGP","description":"Photo of Blake climbing up the hallway.","likes":0}