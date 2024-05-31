import React from 'react';
import styles from './Hero.module.css';
import MorphingAnimation from '../components/Morth';

const Table = () => {
  // Define the SVG paths
  const svgPaths = [
    '<svg width="150" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M180 182.361L173.99 209.84H131.319V205.677C131.92 186.802 132.22 164.597 132.22 139.061V46.6312L29.7496 219H24.0401C24.8414 192.354 25.2421 168.205 25.2421 146.555V25.3973C21.6361 25.3973 14.8247 27.0627 4.80801 30.3935L0.901503 31.6426L0 29.1445L5.70952 1.6654H28.8481C31.8531 1.6654 35.3589 1.52661 39.3656 1.24903C43.5726 0.97147 46.6778 0.555126 48.6811 0V3.33079C47.8798 24.4258 47.4791 47.3251 47.4791 72.0285V151.135L134.324 1.6654H135.526C138.13 1.6654 141.235 1.52661 144.841 1.24903C148.648 0.97147 152.254 0.555126 155.659 0L155.96 3.33079C155.76 8.60455 155.559 14.0171 155.359 19.5684C155.359 25.1198 155.259 30.8099 155.058 36.6388C155.058 42.4677 154.958 48.4354 154.758 54.5418C154.758 60.6483 154.758 66.616 154.758 72.4449V186.108C157.362 186.108 164.174 184.443 175.192 181.112C175.793 180.835 176.394 180.696 176.995 180.696C177.596 180.418 178.197 180.141 178.798 179.863L180 182.361Z" fill="white"/></svg>',
    '<svg width="147" height="170" viewBox="0 -70 167 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M125.3 68.2c-3-8-6.9-15.1-11.7-21.3-4.6-6.2-10.2-11.1-16.8-14.7-6.6-3.6-14-5.4-22.2-5.4-9.8 0-18.6 2.5-26.4 7.5-7.6 5-13.6 12-18 21C26 64.1 23.9 74 23.9 85s2.1 21 6.3 30c4.4 8.8 10.5 15.7 18.3 20.7 7.8 5 16.6 7.5 26.4 7.5 8.8 0 16.5-2 23.1-6 6.8-4 12.5-9.2 17.1-15.6 4.8-6.4 8.7-13.7 11.7-21.9l19.5 5.1-17.4 64.8h-20.4l-.9-1.5 8.4-21.9c-2.8 1.8-5.9 3.7-9.3 5.7-4.6 3.2-9.7 5.9-15.3 8.1-5.6 2.2-12 3.3-19.2 3.3-13.2 0-25.3-3.4-36.3-10.2-11-6.8-19.7-16.2-26.1-28.2C3.4 112.9.2 99.5.2 84.7c0-14.8 3.2-28.1 9.6-39.9C16.2 33 24.9 23.7 35.9 16.9c11-6.8 23.4-10.2 37.2-10.2 7 0 13.2 1.1 18.6 3.3 5.4 2 10.3 4.6 14.7 7.8 1.4.8 2.7 1.6 3.9 2.4 1.4.8 2.6 1.4 3.6 1.8l-8.1-19.5L107 .7h20.7l16.5 62.4-18.9 5.1Z" fill="#fff"/></svg>'
  ];

  // Define the content for each cell, which includes text, SVG paths, and images
  const row1Content = [
    "", 
    "", 
    <img src='/i.gif' className={styles.tableImage} alt='gif' />, 
    svgPaths[1], 
    "т", 
    <img src='/o1.png' className={styles.tableImage}/>, 
    <img src='/r.png' className={styles.tableImage}/>, 
    "и", 
    <img src='/ya.png' className={styles.tableImage}/>
  ];
  const row2Content = [
    <img src='/t.png' className={styles.tableImage}/>, 
    <span className={styles.neonText}>и</span>, 
    <img src='/p.svg' className={styles.tableImage} />, 
    <img src='/o2.png' className={styles.tableImage}/>, 
    "г", 
    "р", 
    <img src='/a.png' className={styles.tableImage} />, 
    "ф", 
    "и", 
    <img className={styles.k} src='/k.gif' className={styles.tableImage}/>, 
    "и"
  ];

  const renderCellContent = (content) => {
    if (typeof content === 'string' && content.startsWith('<svg')) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    } else if (React.isValidElement(content)) {
      return content;
    } else {
      return content;
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
        <tr className={styles.merriweatherLight}>
            {row1Content.map((content, index) => (
              <td key={index}>
                {renderCellContent(content)}
              </td>
            ))}
          </tr>
          <tr>
            {row2Content.map((content, index) => (
              <td key={index}>
                {renderCellContent(content)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
