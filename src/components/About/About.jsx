import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Crafting tradition into every pot since 1998</p>
      </div>

      <div className="about-section">
        <h2>Our Journey</h2>
        <p>
          Founded in 1990, These began as a small family-run pottery business in Pune, India.
          With a passion for preserving traditional clay craftsmanship, we’ve grown into a trusted brand
          delivering handcrafted earthen pots across the country.
        </p>
      </div>

      <div className="about-section">
        <h2>Experience & Craftsmanship</h2>
        <p>
          With over <strong>25+ years of experience</strong>, we pride ourselves on blending age-old pottery
          techniques with modern design aesthetics. Each product we make is a symbol of durability, sustainability,
          and beauty.
        </p>
      </div>

      <div className="about-section timeline">
        <h2>Milestones</h2>
        <ul>
          <li><span>1998</span> - Company established in Pune</li>
          <li><span>2005</span> - Expanded to pan-India distribution</li>
          <li><span>2012</span> - Introduced eco-friendly product line</li>
          <li><span>2019</span> - 1 million handcrafted pots sold</li>
          <li><span>2024</span> - Launched online platform & mobile app</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
