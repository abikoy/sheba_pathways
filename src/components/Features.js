import React from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';
import { FaHotel, FaLocationArrow, FaUserTie, FaMobileAlt, 
         FaImages, FaUsers, FaStar, FaRoute } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { MdHolidayVillage } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      icon: <div className="guesthouse-icon-wrapper">
        <MdHolidayVillage className="icon-main" />
        <BsFillHouseFill className="icon-secondary" />
      </div>,
      title: "Integrated Booking Guesthouse",
      description: "Seamless booking system for easy tour reservations and scheduling."
    },
    {
      icon: <FaLocationArrow />,
      title: "Advanced Nearest Tour",
      description: "Find the nearest tour packages based on your location."
    },
    {
      icon: <FaUserTie />,
      title: "Certified local guides booking",
      description: "Book certified local guides for your tour packages."
    },
    {
      icon: <FaMobileAlt />,
      title: "Connect With Chapa, Tele Birr",
      description: "Secure payment processing with chapa and tele birr integration."
    },
    {
      icon: <FaImages />,
      title: "Tours Carousel",
      description: "Interactive carousel showcasing featured tours and destinations."
    },
    {
      icon: <FaUsers />,
      title: "Group Tours",
      description: "Group tours with flexible options and discounts for groups of booking tours."
    },
    {
      icon: <FaStar />,
      title: "Advanced Tour Review",
      description: "Comprehensive review system for tour feedback and ratings."
    },
    {
      icon: <FaRoute />,
      title: "Tour Pages",
      description: "Detailed tour pages with itineraries and information."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Awesome Features</h2>
        <p className="features-subtitle">
          Discover all the tools you need to create and manage your tour packages effectively.
          Our platform offers a smooth experience with drag-and-drop functionality.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
