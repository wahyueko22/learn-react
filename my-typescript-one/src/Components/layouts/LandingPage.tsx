import React from 'react';

import './style-landing-page.css';
import styles from  './module-landing-page.module.css';

const LandingPage = () => {
    return (
      <div>
        <span className='red-bold'> new child landing page  </span> <br/>
        <span className={styles.blueBold}> new child landing page2  </span>
      </div>
    );
  }
  
export default LandingPage ;