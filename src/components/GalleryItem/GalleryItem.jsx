function GalleryItem( props ) {

  let imageData = props.imageData;
  console.log(imageData);

  return(
    <>
    <img src={imageData.path} alt={imageData.description} width="500" height="500"></img>
    <p>Gallery goes here</p>
    <img src="images/goat_small.jpg"/>
    </>
  )
}

export default GalleryItem

// {"id":1,"path":"images/myImages/IMG_0986.JGP","description":"Photo of Blake climbing up the hallway.","likes":0}