import React, { useState, useEffect } from 'react';
import './Home.css';
import Loader from './Loader';
import Features from './Features';
import aksum from '../assets/aksum2.jpg';
import awash from '../assets/awash.jpeg';
import bale from '../assets/bale.jpg';
import fasil from '../assets/fasil.jpg';
import gedeo from '../assets/gedeo.jpg';
import harar from '../assets/harar.jpg';
import konso from '../assets/konso.jpg';
import lalibela from '../assets/lalibela.jpg';
import omo from '../assets/omo.jpg';
import semien from '../assets/semien.jpg';
import tiya from '../assets/tiya.jpg';
import one from "../assets/1t.jpg";
import two from "../assets/2t.jpg";
import three from "../assets/3t.jpg";
import four from "../assets/4t.jpg";
import five from "../assets/5t.jpg";
import six from "../assets/6t.jpg";
import seven from "../assets/7t.webp";
import eight from "../assets/8t.avif";
import nine from "../assets/9t.jpg";
import ten from "../assets/10t.jpg";
import aman from "../assets/aman.jpg"
import isru from "../assets/isru.jpg";
import haile from '../assets/hai.jpg';
import miki from '../assets/miki.png'

function Home() {
  const destinations = [
    { name: 'Simien Mountains National Park', places: 15, hotels: 18, image: semien, description: 'Spectacular mountain scenery and home to endangered species' },
    { name: 'Rock-Hewn Churches of Lalibela', places: 12, hotels: 20, image: lalibela, description: 'Remarkable monolithic churches carved from rock' },
    { name: 'Aksum', places: 10, hotels: 15, image: aksum, description: 'Ancient capital with obelisks and archaeological sites' },
    { name: 'Fasil Ghebbi (Gondar)', places: 8, hotels: 12, image: fasil, description: 'Fortress-city and former imperial capital' },
    { name: 'Lower Valley of the Awash', places: 6, hotels: 10, image: awash, description: 'Paleoanthropological site with early human fossils' },
    { name: 'Lower Valley of the Omo', places: 5, hotels: 8, image: omo, description: 'Prehistoric site with ancient human remains' },
    { name: 'Tiya', places: 7, hotels: 10, image: tiya, description: 'Archaeological site with mysterious carved stelae' },
    { name: 'Harar Jugol', places: 9, hotels: 15, image: harar, description: 'Historic walled city with unique architecture' },
    { name: 'Konso Cultural Landscape', places: 6, hotels: 8, image: konso, description: 'Terraced hillside settlements and cultural traditions' },
    { name: 'Gedeo Cultural Landscape', places: 8, hotels: 12, image: gedeo, description: 'Living cultural landscape with traditional farming' },
    { name: 'Bale Mountains National Park', places: 10, hotels: 14, image: bale, description: 'Diverse ecosystem and rare wildlife species' }
  ];
  

  const testimonials = [
    {
      img: aman,
      name: "Adam Groff",
      text: "An incredible journey through Ethiopia's rich history. The app made planning so easy!",
      role: "Travel Blogger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Lilyan Danclark",
      text: "The local insights and easy booking process made our trip unforgettable.",
      role: "Adventure Seeker"
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Shwan Pull",
      text: "Best travel experience ever! The app's features are incredibly helpful.",
      role: "Photographer"
    }
  ];
  const images = [one, two, three, four, five, six, seven, eight, nine, ten];

  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const sliderRef = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Match this with the CSS animation duration
    }
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.firstElementChild;
      const lastCard = sliderRef.current.lastElementChild;
      sliderRef.current.style.transition = 'none';
      sliderRef.current.insertBefore(lastCard, firstCard);
      sliderRef.current.style.transform = 'translateX(-350px)';
      setTimeout(() => {
        sliderRef.current.style.transition = 'transform 0.5s ease';
        sliderRef.current.style.transform = 'translateX(0)';
      }, 10);
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.firstElementChild;
      sliderRef.current.style.transition = 'transform 0.5s ease';
      sliderRef.current.style.transform = 'translateX(-350px)';
      
      setTimeout(() => {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
        sliderRef.current.appendChild(firstCard);
      }, 500);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home">
     <div className="hero">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="hero-video-bg"
  >
    <source src="/videos/new1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="hero-content">
    <h1>Move The Earth</h1>
    <p>Experience Ethiopia's Ancient Wonders</p>
    <div className="hero-buttons">
      <a href="#" className="app-button">Download on App Store</a>
      <a href="#" className="app-button">Get it on Google Play</a>
    </div>
  </div>
</div>
      
      <section className="destinations">
        <h2>11 Ethiopian UNESCO World Heritage Sites</h2>
        <p>Explore Ethiopia's most remarkable historical and natural wonders</p>
        <div className="destination-grid">
          {destinations.map((dest, index) => (
            <div key={index} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <div className="destination-info">
                <h3>{dest.name}</h3>
                <p className="destination-description">{dest.description}</p>
                <div className="destination-stats">
                  <span>{dest.places} Places</span>
                  <span>{dest.hotels} Hotels</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="travel-gallery py-12 px-4 md:px-16 bg-white text-center">
  <h2 className="text-3xl font-bold mb-2 text-gray-800">Travel Gallery</h2>
  <p className="text-gray-600 mb-8">Capture the beauty of Ethiopia through our lens</p>
  
  <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <img src={one} alt="Gallery One" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={two} alt="Gallery Two" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={three} alt="Gallery Three" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={four} alt="Gallery Four" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={five} alt="Gallery Five" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={six} alt="Gallery Six" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={seven} alt="Gallery Seven" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={eight} alt="Gallery Eight" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={nine} alt="Gallery Nine" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
    <img src={ten} alt="Traditional Dance" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
  </div>
</section>

      <Features />

      <section className="testimonials">
        <h2>What Our Clients Say About Us</h2>
        <div className="testimonial-nav">
          <button className="nav-button prev" onClick={handlePrev}>
            <span className="arrow">&#8249;</span>
          </button>
          <button className="nav-button next" onClick={handleNext}>
            <span className="arrow">&#8250;</span>
          </button>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-slider" ref={sliderRef}>
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="testimonial-image">
                  <img src={testimonial.img} alt={`Client ${index + 1}`} />
                </div>
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <p className="quote">"{testimonial.text}"</p>
                <div className="rating">★★★★★</div>
              </div>
            ))}
            {/* Duplicate set for continuous scrolling */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="testimonial-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="testimonial-image">
                  <img src={testimonial.img} alt={`Client ${index + 1}`} />
                </div>
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <p className="quote">"{testimonial.text}"</p>
                <div className="rating">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="founders">
        <h2>Meet Our Founders</h2>
        <div className="founders-grid">
          <div className="founder-card">
            <img src={isru} alt="Founder 1" />
            <h3>Israel Abebaw</h3>
            <p>CEO & Co-founder</p>
          </div>
          <div className="founder-card">
            <img src={haile}alt="Founder 2" />
            <h3>Haile Kinfu</h3>
            <p>CTO & Co-founder</p>
          </div>
          <div className="founder-card">
            <img src={miki} alt="Founder 3" />
            <h3>Miki Shibabaw</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
      )}
    </>
  );
}

export default Home;
