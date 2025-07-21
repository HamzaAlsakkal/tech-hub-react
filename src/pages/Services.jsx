import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Services.css';

const Services = () => {
  return (
    <div>
      <Header />
      <section className="services-hero">
        <div className="container">
          <h1>Our <span style={{ color: '#4fc3f7' }}>Services</span></h1>
          <p>Flexible plans for every learner</p>
        </div>
      </section>
      <main className="services-content">
        <div className="container">
          <div className="service-card">
            <div className="service-header">
              <div className="service-icon">📚</div>
              <h2 className="service-title">Basic Plan</h2>
            </div>
            <p>Access to all our beginner-level courses and community support.</p>
            <ul className="service-features">
              <li>Full access to beginner courses</li>
              <li>Community forum access</li>
              <li>Email support</li>
              <li>Downloadable resources</li>
            </ul>
            <div className="price-tag">Free</div>
            <a href="#" className="cta-secondary">Get Started</a>
          </div>
          <div className="service-card">
            <div className="service-header">
              <div className="service-icon">🚀</div>
              <h2 className="service-title">Pro Plan</h2>
            </div>
            <p>Unlock advanced courses, project reviews, and one-on-one mentorship.</p>
            <ul className="service-features">
              <li>Everything in Basic Plan</li>
              <li>Access to advanced courses</li>
              <li>Personalized project reviews</li>
              <li>One-on-one mentorship sessions</li>
              <li>Priority support</li>
            </ul>
            <div className="price-tag">$29/month</div>
            <a href="#" className="cta-secondary">Go Pro</a>
          </div>
          <div className="service-card">
            <div className="service-header">
              <div className="service-icon">🏢</div>
              <h2 className="service-title">Teams Plan</h2>
            </div>
            <p>Equip your team with the latest tech skills with our corporate plan.</p>
            <ul className="service-features">
              <li>All Pro features for your team</li>
              <li>Team progress tracking</li>
              <li>Dedicated account manager</li>
              <li>Customized learning paths</li>
              <li>Volume discounts</li>
            </ul>
            <div className="price-tag">Contact Us</div>
            <a href="#" className="cta-secondary">Request a Demo</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
