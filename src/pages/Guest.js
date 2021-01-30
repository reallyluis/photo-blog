import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, ImageGrid, Modal } from '../components';
import { useAuth, ProvideStorage } from '../hooks';

const Guest = () => {
  const { isSignedIn=false } = useAuth();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ProvideStorage>
      <div className="container">
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
      </div>
    </ProvideStorage>
  );
}

export default Guest;
