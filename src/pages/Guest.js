import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, ImageGrid, Modal } from '../components';
import { useAuth } from '../hooks/useAuth';
import { ProvideStorage } from '../hooks/useStorage';

const Guest = () => {
  const { isSignedIn=false } = useAuth();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ProvideStorage>
      <Title />
      { !isSignedIn &&
        <div className="guest message">
          <Link to="/signin">Sign in</Link> to add photos.
        </div>
      }
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </ProvideStorage>
  );
}

export default Guest;
