import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { AmplifyS3Image } from '@aws-amplify/ui-react';

const ImageGrid = ({ file, setSelectedImg }) => {
  const [publicFiles, setPublicFiles] = useState([]);
  const [protectedFiles, setProtectedFiles] = useState([]);
  const [error, setError] = useState(null);

  // Public Files
  useEffect(() => {
    Storage.list('', { level: 'public' }) // 'public'
      .then(result => setPublicFiles(result))
      .catch(err => setError(err));
  }, []);

  // Protected Files
  useEffect(() => {
    Storage.list('', { level: 'protected' }) // 'public'
      .then(result => setProtectedFiles(result))
      .catch(err => setError(err));
  }, []);

  return (
    <div className="img-grid">
      { error && <div className="error">{ error }</div>}
      { publicFiles && publicFiles.map((file, id) => (
        <AmplifyS3Image key={id} level="public" imgKey={file.key} />
      )) }
      <div></div>
      { protectedFiles && protectedFiles.map((file, id) => (
        <AmplifyS3Image key={id} level="protected" imgKey={file.key} />
      )) }
    </div>
  )
}

export default ImageGrid;
