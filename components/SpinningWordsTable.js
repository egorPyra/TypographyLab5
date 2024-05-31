// components/SpinningWordsTable.js
import { useEffect, useState } from 'react';
import styles from './SpinningWordsTable.module.css';

const SpinningWordsTable = () => {
  const words = ['ЯБЛОКО', 'АКУШЕР', 'ИРОНИЯ', 'КАРТЕЖ', 'ШАХТЕР'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex].split('');

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {currentWord.map((letter, index) => (
            <td key={index} className={styles.cell}>
              <span className={styles.spin}>{letter}</span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default SpinningWordsTable;
