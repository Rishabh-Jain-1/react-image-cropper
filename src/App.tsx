import { useState } from 'react';
import './App.css';
import Cropper from './component/Cropper';

function App() {
  const [file,setSelectedFile]=useState<any>(null);
  const [croppedImage,setCroppedimage]=useState<any>(null)
  return (
    <>
    <input
      type="file"
      accept="image/*"
      onChange={(e:any) => {
        setSelectedFile(e.target.files[0]);
      }}
    />
    {/*to display the cropped output */}
    {croppedImage && <img src={croppedImage} alt="uploaded"></img>}
    {/* call the cropper */}
    {file &&  <Cropper imageToCrop={URL.createObjectURL(file)} croppedImage={(value:any)=>setCroppedimage(value)}/> }
    </>
  );
}

export default App;
