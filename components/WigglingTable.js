// components/WigglingTable.js
import styles from './WigglingTable.module.css';

const WigglingTable = () => {
    const word = 'буквы';
    const letters = word.split('');

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          {letters.map((cell, index) => (
            <td className={styles.tdmini} key={index}>
              {cell.split('').map((letter, idx) => (
                <span key={idx} className={styles.wiggle}>{letter}</span>
              ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default WigglingTable;
