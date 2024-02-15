import "./ImageShow.css";

function ImageShow({ image }) {
  return (
    <div className="images">
      <img src={image.urls.small} alt={image.alt_description}></img>
    </div>
  );
}

export default ImageShow;
