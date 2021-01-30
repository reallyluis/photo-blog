import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/videos/blur_downtown_no_sound.mp4';

import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <video src={backgroundVideo} loop muted="muted" autoPlay="autoplay"></video>
      <div className="home-overlay"></div>
      <div className="home-content">
        <h2>Photos and Blogs</h2> 
        <h3>Subtitle goes here</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
        <Link to="/guest">Preview</Link>
      </div>
    </section>
  );
}

export default Home;
