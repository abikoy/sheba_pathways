import React from 'react';
import './Services.css';
import offline from '../assets/offline.png'
import hotel from '../assets/hotel.webp'
import guide from '../assets/guidance.avif'
import multi from '../assets/multi-lan.webp'
import individual from '../assets/individual-route-1.webp'



function Services() {
  const services = [
    {
      title: "🗺️Personalized Travel Planning",
      description: "Plan your trip effortlessly with our interactive maps and smart itinerary planner tailored to your preferences.",
      image:individual
    },
    {
      title: "🎧 Multi-Language Audio Tours",
      description: "Explore Ethiopia’s cultural treasures with audio guides available in multiple languages—perfect for both local and international travelers.",
      image:multi
    },
    {
      title: "🤝 Certified Local Guide Booking",
      description: "Connect with trusted, knowledgeable local guides who’ll bring your journey to life.",
      image:guide
    },
    {
      title: "🛌Accommodation Finder",
      description: "Easily find and book guesthouses and unique stays across Ethiopia, from city hubs to remote gems.",
      image: hotel
    },

    {
      title: "📶 Offline Access",
      description: "njoy seamless exploration—even without internet—thanks to offline features for maps, tours, and bookings.",
      image: offline
    },


    {
      title: " 👥 Group Tours",
      description: "Travel together, save more, and make new friends. Join our safe, guided group tours with exclusive discounts and shared experiences.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/16/8a/18/fb/small-group-tours.jpg"
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Discover Ethiopia's Wonders with Our Expert Guidance</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
