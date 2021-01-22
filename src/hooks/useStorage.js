import { createContext, useContext, useEffect, useState } from 'react';
import { Storage } from 'aws-amplify';

const storageContext = createContext();

const useStorage = () => {
  return useContext(storageContext);
};

const ProvideStorage = ({ children }) => {
  const storage = useProvideStorage();
  return <storageContext.Provider value={storage}>{children}</storageContext.Provider>;
};

const useProvideStorage = () => {
  const [progress, setProgress] = useState(0);
  const [publicFiles, setPublicFiles] = useState([]);
  const [protectedFiles, setProtectedFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => getFiles('public', setPublicFiles, setError), []);
  useEffect(() => getFiles('protected', setProtectedFiles, setError), []);

  useEffect(() => {
    if (progress === 100) {
      setProgress(0);
    }
  }, [progress, setProgress]);

  return {
    publicFiles,
    protectedFiles,
    error,
    progress,
    uploadFile: uploadFileByLevel(
      setProgress,
      publicFiles,
      setPublicFiles,
      protectedFiles,
      setProtectedFiles,
      setError,
    ),
  };
};

const getFiles = (level, setFiles, setError) => {
  Storage.list('', { level })
    .then(result => setFiles(result))
    .catch(err => setError(err));
};

const uploadFileByLevel = (
  setProgress,
  publicFiles,
  setPublicFiles,
  protectedFiles,
  setProtectedFiles,
  setError,
) => (level, file) => {
    Storage.put(file.name, file, {
      level,
      progressCallback(progress) {
        let percentage = (progress.loaded / progress.total) * 100;
        setProgress(percentage);
      },
    })
    .then(result => {
      if (level === 'public') {
        setPublicFiles([result, ...publicFiles]);
      } else if (level === 'protected') {
        setProtectedFiles([result, ...protectedFiles]);
      }
    })
    .catch(err => setError(err));
};

export {
  useStorage,
  ProvideStorage,
};
