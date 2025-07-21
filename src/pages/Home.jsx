import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Tech Hub</h1>
          <p>Your Gateway to Technology Learning</p>
          <Link to="/services" className="cta-btn">Join Tech Hub</Link>
        </div>
      </section>
      <main className="main-content">
        <div className="container cards">
          <div className="card">
            <div className="icon"><span role="img" aria-label="Laptop">💻</span></div>
            <h2>Courses</h2>
            <p>Learn programming and tech skills</p>
          </div>
          <div className="card">
            <div className="icon"><span role="img" aria-label="Rocket">🚀</span></div>
            <h2>Projects</h2>
            <p>Build real-world applications</p>
          </div>
          <div className="card">
            <div className="icon">
              <span role="img" aria-label="Community">👥</span>
            </div>
            <h2>Community</h2>
            <p>Connect with tech enthusiasts</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
