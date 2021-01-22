import { AmplifyS3Image } from '@aws-amplify/ui-react';
import { useStorage } from '../hooks';
import { generateHash } from '../helpers';

const ImageGrid = ({ file, setSelectedImg }) => {
  const { publicFiles=[], protectedFiles=[], error=null } = useStorage();

  return (
    <div className="img-grid">
      { error && <div className="error">{ error }</div>}
      { publicFiles && publicFiles.map((file) => (
        <AmplifyS3Image key={generateHash(file.key)} level="public" imgKey={file.key} />
      )) }
      <div></div>
      { protectedFiles && protectedFiles.map((file) => (
        <AmplifyS3Image key={generateHash(file.key)} level="protected" imgKey={file.key} />
      )) }
    </div>
  );
};

export default ImageGrid;
