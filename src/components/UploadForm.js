import { useState } from 'react';
import ProgressBar from './ProgressBar';

import './UploadForm.css';

const UploadForm = ({ file, setFile }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label className="upload-button">
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      { file &&
        <div className="output">
          { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          { file &&
            <ProgressBar
              file={file}
              setFile={setFile}
              isUploading={isUploading}
              setIsUploading={setIsUploading}
            />
          }
        </div>
      }
    </form>
  );
}

export default UploadForm;
