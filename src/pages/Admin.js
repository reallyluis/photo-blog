import { useState, useEffect } from 'react';
import { Title, UploadForm, ImageGrid, Modal } from '../components';

const Admin = () => {
  const [file, setFile] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (file !== null) {
      console.log('reload image grid!');
    }
  }, [file]);

  return (
    <>
      <Title />
      <UploadForm file={file} setFile={setFile} />
      <ImageGrid file={file} setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default Admin;
