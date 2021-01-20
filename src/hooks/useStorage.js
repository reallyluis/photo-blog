import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    Storage.put(file.name, file, {
      progressCallback(progress) {
        let percentage = (progress.loaded / progress.total) * 100;
        setProgress(percentage);
      },
    })
    .then (result => {
      console.log(result);
      setUrl('');
    })
    .catch(err => setError(err));
  }, [file]);

  return { progress, url, error };
}

export default useStorage;