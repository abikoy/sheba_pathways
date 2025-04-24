import React from 'react';
import './About.css';
import seven from '../assets/landscape.jpg'
function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Sheba Pathways</h1>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2>Your Gateway to Ethiopian Adventures</h2>
          <p>Sheba Pathways is your premier guide to exploring the rich cultural heritage, stunning landscapes, and historical wonders of Ethiopia. With years of experience and deep local knowledge, we create unforgettable journeys through this ancient land.</p>
          
          <h3>Our Mission</h3>
          <p>To provide authentic, sustainable, and transformative travel experiences while preserving and promoting Ethiopia's unique cultural and natural heritage.</p>
          
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Interactive maps & itineraries</li>
            <li>Expert local guides</li>
            <li>Offline accommodation finder</li>
            <li>Real-time info, local flavors</li>
            <li>Gesthouse/accommodation finder</li>
            <li>24/7 support during your journey</li>
          </ul>
        </div>
        
        <div className="about-image">
          <img src={seven} alt="Ethiopian Landscape" />
        </div>
      </div>
    </div>
  );
}

export default About;
