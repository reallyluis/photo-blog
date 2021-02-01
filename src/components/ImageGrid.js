import { AmplifyS3Image } from '@aws-amplify/ui-react';
import { useAuth, useStorage } from '../hooks';
import { generateHash } from '../helpers';
import ImageControl from './ImageControl';

import './ImageGrid.css';

const ImageGrid = ({ file, setSelectedImg }) => {
  const { isSignedIn=false } = useAuth();
  const { publicFiles=[], protectedFiles=[], error=null } = useStorage();

  const renderGridItem = (file, level) => {
    const prefix = level === 'public' ? '' : 'p';
    const uniqueId = generateHash(file.key, prefix);

    return (
      <div key={uniqueId} className="photo-grid__item">
        <AmplifyS3Image level={level} imgKey={file.key} />
        { isSignedIn &&
          <ImageControl uniqueId={uniqueId} />
        }
      </div>
    );
  };

  return (
    <div className="photos">
      { error && <div className="error">{ error }</div>}
      { publicFiles.length > 0 &&
        <>
          <h1>Public Files</h1>
          <div className="photo-grid">
            { publicFiles && publicFiles.map((file) => renderGridItem(file, 'public')) }
          </div>
        </>
      }
      { isSignedIn && protectedFiles.length > 0 &&
        <>
          <h1>Protected Files</h1>
          <div className="photo-grid">
            { protectedFiles && protectedFiles.map((file) => renderGridItem(file, 'protected')) }
          </div>
        </>
      }
    </div>
  );
};

export default ImageGrid;
