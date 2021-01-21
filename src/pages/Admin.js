import { useState } from 'react';
import { Title, UploadForm, ImageGrid, Modal } from '../components';

const Admin = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
}

export default Admin;
