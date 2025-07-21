import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './WhatILearned.css';

const WhatILearned = () => {
  return (
    <div>
      <Header />
      <section className="learning-hero">
        <div className="container">
          <h1>What I <span style={{ color: '#4fc3f7' }}>Learned</span></h1>
          <p>Building this website taught me valuable lessons in web development</p>
        </div>
      </section>
      <main className="learning-content">
        <div className="container">
          <div className="lesson-card">
            <div className="lesson-header">
              <div className="lesson-icon">🏗️</div>
              <h2 className="lesson-title">HTML Structure & Semantics</h2>
              <span className="lesson-category">HTML</span>
            </div>
            <p>Creating this multi-page website reinforced the importance of proper HTML structure and semantic elements.</p>
            <div className="lesson-tips">
              <h4>Key Takeaways:</h4>
              <ul>
                <li>Using semantic HTML elements like <span className="highlight">&lt;header&gt;</span>, <span className="highlight">&lt;main&gt;</span>, and <span className="highlight">&lt;footer&gt;</span></li>
                <li>Proper navigation structure across multiple pages</li>
                <li>Accessibility considerations with alt text and ARIA labels</li>
                <li>Clean, organized code structure for maintainability</li>
              </ul>
            </div>
            <div className="code-snippet">
              <code>
                &lt;nav className="main-nav"&gt;<br />
                &nbsp;&nbsp;&lt;a href="index.html"&gt;Home&lt;/a&gt;<br />
                &nbsp;&nbsp;&lt;a href="about.html"&gt;About&lt;/a&gt;<br />
                &nbsp;&nbsp;&lt;a href="services.html"&gt;Services&lt;/a&gt;<br />
                &lt;/nav&gt;
              </code>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '95%' }}></div>
            </div>
            <small>Confidence Level: 95%</small>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatILearned;
