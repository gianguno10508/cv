import { useState } from "react";

const ImagePreview = () => {
  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    // submit form data to backend here
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImage} />
        <button type="submit">Submit</button>
      </form>
      {image && <img src={URL.createObjectURL(image)} alt="uploaded image" />}
    </>
  );
};
export default ImagePreview;
