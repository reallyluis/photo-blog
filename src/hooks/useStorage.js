import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    Storage.put(file.name, file, {
      level: 'protected',  // 'public'
      progressCallback(progress) {
        let percentage = (progress.loaded / progress.total) * 100;
        setProgress(percentage);
      },
    })
    .catch(err => setError(err));
  }, [file]);

  return { progress, error };
}

export default useStorage;