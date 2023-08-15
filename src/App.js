import React from 'react';
import './App.css';
import './index.css'
import styles from './style';

import { Billing, Business, Button, CardDeal, Client, CTA, FeedBack, Footer, GetStarted, Hero, Navbar, Stats, Testimonials } from './components'

function App() {
  return (
    <div className="bg-primary overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
           <Navbar /> {/*there will be nav */}
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
        
    </div>
  );
}

export default App;
