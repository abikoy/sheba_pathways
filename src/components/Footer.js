import React from 'react';
import './Footer.css';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <p className="description">
          Sheba Pathways makes exploring Ethiopia simple, smart, and immersive—connect with local culture, plan easily, and travel confidently.
          </p>
          <div className="social-links">
            <h3>Follow Us On:</h3>
            <div className="social-icons">
  <a href="https://youtube.com/@shebapathways?si=WPJwaAUse4ugb75k" className="youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  <a href="#" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
  <a href="https://x.com/PathwaysSh" className="twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  <a href="https://instagram.com/shebapathways" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  <a href="https://www.tiktok.com/@yourusername" className="tiktok" target="_blank" rel="noopener noreferrer">
  <SiTiktok />
</a>

</div>

          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">Tour Package</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section tour-type">
          <h3>Tour Type</h3>
          <ul>
            <li><a href="#">Wild & Adventure Tours</a></li>
            <li><a href="#">Group Tour</a></li>
            <li><a href="#">Seasonal Tours</a></li>
            <li><a href="#">Relaxation Tours</a></li>
            <li><a href="#">Family Friendly Tours</a></li>
          </ul>
        </div>

       
      </div>

      <div className="footer-bottom">
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+251907624429">+251907624429</a>
          </div>
          <div className="contact-item">
            <a href="https://www.shebapathways.com" target='_blank'>shebapathways.com</a>
          </div>
          <div className="contact-item">
            <span>Addis Ababa,Ethiopia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
