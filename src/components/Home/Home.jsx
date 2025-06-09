import { useEffect, useState } from 'react';
import img1 from '../../assets/img/image1.jpg';
import img2 from '../../assets/img/image2.jpg';
import img3 from '../../assets/img/image3.jpg';
import img4 from '../../assets/img/image4.jpg';
import img5 from '../../assets/img/image5.jpg';
import img6 from '../../assets/img/image6.jpg';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const navigate = useNavigate(); // ✅ Hook used correctly inside component
  const [index, setIndex] = useState(0);

  const btnhh = () => {
    navigate('/services');
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Go to previous image
  const goPrev = () => {
    setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Go to next image
  const goNext = () => {
    setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="background-slider" style={{ backgroundImage: `url(${images[index]})` }}>
      <div className="slider-overlay">
        <button className="arrow left-arrow" onClick={goPrev} aria-label="Previous image">
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={goNext} aria-label="Next image">
          &#10095;
        </button>

        <div className="slider-content">
          <h1 className="slider-title">Crafted with Care, Shaped by Hand</h1>
          <p className="slider-description">
            Explore our unique pottery collection, handmade with love and tradition. Every piece tells a story.
          </p>
          <button onClick={btnhh} className="cta-button order-now-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
