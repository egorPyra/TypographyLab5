// components/MouthText.js
import { useEffect, useRef } from 'react';
import styles from './MouthText.module.css';

const MouthText = ({ texts }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    const animateText = (text, index) => {
      let pos = 0;
      const speed = text.speed || 2;
      const angle = (text.angle || 0) * (Math.PI / 180);
      const deltaX = speed * Math.cos(angle);
      const deltaY = speed * Math.sin(angle);
      const opacity = 1;

      const moveText = () => {
        pos += 1;
        
        const element = textRefs.current[index];
        
        const newX = pos * deltaX;
        const newY = pos * deltaY;
        element.style.transform = `translate(${newX}px, ${newY}px)`;

        if (pos * deltaX >= 500 * speed) { // Reset position after moving a certain distance
          pos = -element.offsetWidth;
        }

        requestAnimationFrame(moveText);
      };

      setTimeout(moveText, text.delay || 0); // Add delay before starting the animation
    };

    texts.forEach((text, index) => {
      animateText(text, index);
    });
  }, [texts]);

  return (
    <div className={styles.container}>
      <img src="/mouth.gif" alt="Description" className={styles.image} />
      <div className={styles.blackCanvas}></div>
      {texts.map((text, index) => (
        <div
          key={index}
          className={styles.text}
          ref={(el) => (textRefs.current[index] = el)}
          style={{ top: text.top || '50%', left: text.left || '0%' }}
        >
          {text.content}
        </div>
      ))}
    </div>
  );
};

export default MouthText;
