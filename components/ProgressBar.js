import React, { useEffect, useState } from 'react';
import styles from './StatusBar.module.css'; // Import CSS module styles

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section0 = document.getElementById('section0');
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');
      const section4 = document.getElementById('section4');
      const section5 = document.getElementById('section5');
      const section6 = document.getElementById('section6');
      // Add more sections as needed

      if (section0) {
        const section0Height = section0.offsetTop + section0.offsetHeight;
        const section1Height = section1.offsetTop + section1.offsetHeight;
        const section2Height = section2.offsetTop + section2.offsetHeight;
        
        const winScroll = document.documentElement.scrollTop;

        if (winScroll < section0Height) {
          setShowProgressBar(false);
          setScrollPercentage(0);
        } else {
          setShowProgressBar(true);
          const totalScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledFromSection1 = Math.max(winScroll - section0Height, 0);
          const scrollableHeightFromSection1 = totalScrollableHeight - section0Height;
          const scrolledPercentage = (scrolledFromSection1 / scrollableHeightFromSection1) * 100;
          setScrollPercentage(Math.min(scrolledPercentage, 100));
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDotClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`${styles.progressBar} ${showProgressBar ? '' : styles.hidden}`}>
      <div className={styles.line} style={{ width: `${scrollPercentage}%` }} />
      <div className={styles.dotsContainer}>
        {/* <div className={styles.dotContainer} style={{ left: '0px' }} onClick={() => handleDotClick('section0')}>
          <div className={styles.dot} />
          <div className={styles.label}>Section 0</div>
        </div> */}
        <div className={styles.dotContainer} style={{ left: '2%' }} onClick={() => handleDotClick('section1')}>
          <div className={styles.dot} />
          <div className={styles.label}>3000 г. до н.э.</div>
        </div>
        <div className={styles.dotContainer} style={{ left: '12.5%' }} onClick={() => handleDotClick('section2')}>
          <div className={styles.dot} />
          <div className={styles.label}>500 г. до н.э.</div>
        </div>
        <div className={styles.dotContainer} style={{ left: '32%' }} onClick={() => handleDotClick('section3')}>
          <div className={styles.dot} />
          <div className={styles.label}>100 г. н.э.</div>
        </div>
        <div className={styles.dotContainer} style={{ left: '41%' }} onClick={() => handleDotClick('section4')}>
          <div className={styles.dot} />
          <div className={styles.label}>IV - XIV в.</div>
        </div>
        <div className={styles.dotContainer} style={{ left: '54%' }} onClick={() => handleDotClick('section5')}>
          <div className={styles.dot} />
          <div className={styles.label}>XVI в.</div>
        </div>
        <div className={styles.dotContainer} style={{ left: '74%' }} onClick={() => handleDotClick('section6')}>
          <div className={styles.dot} />
          <div className={styles.label}>XIX в. - сейчас</div>
        </div>
        {/* Add more dots for other sections */}
      </div>
    </div>
  );
};

export default ProgressBar;
