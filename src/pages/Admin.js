import { useState } from 'react';
import { Title, UploadForm, ImageGrid, Modal } from '../components';
import { ProvideStorage } from '../hooks';

const Admin = () => {
  const [file, setFile] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ProvideStorage>
      <Title />
      <UploadForm file={file} setFile={setFile} />
      <ImageGrid file={file} setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </ProvideStorage>
  );
}

export default Admin;
