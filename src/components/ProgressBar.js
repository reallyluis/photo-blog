import { useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { progress, uploadFile } = useStorage();

  useEffect(() => {
    if (file && progress === 0) {
      uploadFile('protected', file);
    }
  }, [file, progress, uploadFile]);

  useEffect(() => {
    if (progress === 100) {
      setFile(null);
    }
  }, [progress, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;
