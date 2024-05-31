import React from 'react';
import styles from './renaissance.module.css';

export default function Renaissance() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>5. Ренессансное переосмысление </h1>

            <div className={styles.box}>
                <p className={styles.text}>В&nbsp;эпоху Возрождения (XV&ndash;XVI&nbsp;вв.) возрос интерес к&nbsp;античной культуре во&nbsp;всех ее&nbsp;проявлениях. Переписывая античные тексты, писцы старались копировать и&nbsp;сам шрифт этих текстов, связывая его с&nbsp;античностью, и&nbsp;даже называли его антиква.</p>

                <img className={styles.imgSerif} src='img242-11.jpg' />
            </div>

            <img className={styles.imgSerifTT} src='serifRen.png' />
            <h3 className={styles.h3}>Выше представлены два вида антиквы&nbsp;&mdash; прямая (романская) и&nbsp;наклонная (италик). Эти шрифты&nbsp;&mdash; прообразы всех шрифтов данного типа</h3>

            <img className={styles.imgSerifBeut} src='Duger.png' />
            
        </div>
    )
}