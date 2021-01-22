import { AmplifyS3Image } from '@aws-amplify/ui-react';
import { useStorage } from '../hooks/useStorage';

const ImageGrid = ({ file, setSelectedImg }) => {
  const { publicFiles=[], protectedFiles=[], error=null } = useStorage();

  const getUniqueKey = (key) => {
    return key.split('.')[0];
  };

  return (
    <div className="img-grid">
      { error && <div className="error">{ error }</div>}
      { publicFiles && publicFiles.map((file) => (
        <AmplifyS3Image key={getUniqueKey(file.key)} level="public" imgKey={file.key} />
      )) }
      <div></div>
      { protectedFiles && protectedFiles.map((file) => (
        <AmplifyS3Image key={getUniqueKey(file.key)} level="protected" imgKey={file.key} />
      )) }
    </div>
  );
};

export default ImageGrid;
