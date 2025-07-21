import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>About <span style={{ color: '#4fc3f7' }}>Tech Hub</span></h1>
          <p>Empowering developers through education and community</p>
        </div>
      </section>
      <main className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-section">
              <h3>🎯 Our Mission</h3>
              <p>
                Tech Hub is dedicated to making technology education accessible to everyone.
                We believe that coding skills are essential in today's digital world, and we're
                here to guide you through your learning journey with comprehensive courses,
                practical projects, and a supportive community.
              </p>
            </div>
            <div className="about-section">
              <h3>💡 What We Offer</h3>
              <p>
                From beginner-friendly tutorials to advanced programming concepts, we cover
                a wide range of technologies. Our hands-on approach ensures you build real
                projects while learning, giving you the confidence to tackle any challenge.
              </p>
              <div className="tech-stack">
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">CSS</span>
                <span className="tech-item">HTML</span>
              </div>
            </div>
            <div className="about-section">
              <h3>🚀 Our Vision</h3>
              <p>
                We envision a world where everyone has the opportunity to learn and grow in
                technology. Through our platform, we aim to bridge the gap between curiosity
                and expertise, creating a new generation of innovative developers and creators.
              </p>
            </div>
            <div className="about-section">
              <h3>👥 Community First</h3>
              <p>
                Learning is better when we do it together. Our community of learners and
                experts supports each other through challenges, celebrates victories, and
                shares knowledge freely. Join us and become part of something bigger.
              </p>
            </div>
          </div>
          <div className="about-section" style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3>📊 By the Numbers</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div>
                <h4 style={{ color: '#4fc3f7', fontSize: '2rem' }}>1000+</h4>
                <p>Students</p>
              </div>
              <div>
                <h4 style={{ color: '#4fc3f7', fontSize: '2rem' }}>50+</h4>
                <p>Courses</p>
              </div>
              <div>
                <h4 style={{ color: '#4fc3f7', fontSize: '2rem' }}>24/7</h4>
                <p>Support</p>
              </div>
              <div>
                <h4 style={{ color: '#4fc3f7', fontSize: '2rem' }}>95%</h4>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
