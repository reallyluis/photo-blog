import { useEffect, useState } from 'react';
import { useStorage } from '../hooks';
import { motion } from 'framer-motion';

import './ProgressBar.css';

const ProgressBar = ({ file, setFile }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { progress, uploadFile } = useStorage();

  useEffect(() => {
    if (!isUploading && progress === 0) {
      setIsUploading(true);

      if (file) {
        uploadFile('protected', file);
      }
    } else if (progress === 100) {
      setFile(null);
      setIsUploading(false);
    }
  }, [file, progress, isUploading, uploadFile, setFile, setIsUploading]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;
