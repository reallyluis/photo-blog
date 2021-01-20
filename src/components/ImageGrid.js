import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { AmplifyS3Image } from '@aws-amplify/ui-react';

const ImageGrid = ({ setSelectedImg }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Storage.list('', { level: 'public' })
      .then(result => setFiles(result))
      .catch(err => setError(err));
  }, []);

  return (
    <div className="img-grid">
      { error && <div className="error">{ error }</div>}
      { files && files.map((file, id) => (
        <AmplifyS3Image key={id} imgKey={file.key} />
      )) }
    </div>
  )
}

export default ImageGrid;
