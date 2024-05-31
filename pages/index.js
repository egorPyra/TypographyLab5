import Link from 'next/link';
import Table from '../components/Hero';
import MorphingAnimation from '../components/Morth';
import MouthText from '../components/MouthText';
import styles from './styles.module.css';
import ChatComponent from '../components/chatComponent';
import WigglingTable from '../components/WigglingTable';
import SpinningWordsTable from '../components/SpinningWordsTable';
import React from 'react';
import ProgressBar from '../components/ProgressBar';
import Pictograf from '../components/picktograf';
import Serif from '../components/serif';
import Rustik from '../components/rustik';
import Gothic from '../components/gothic';
import Renaissance from '../components/renaissance';
import Now from '../components/Now';


export default function Home() {

    const texts = [
        { content: 'Привет!', speed: 3, angle: 16, top: '30%', left: '-10%', delay: 100 },
        { content: 'Пошли на рыбалку?', speed: 4, angle: 5, top: '40%', left: '-10%', delay: 2200 },
        { content: 'Как дела?', speed: 3.2, angle: 0, top: '57%', left: '-10%', delay: 400 },
        { content: 'Мен сені сүйемін', speed: 4, angle: 4, top: '47%', left: '-10%', delay: 3600 },
        { content: 'Сколько стоит жвачка по рублю?', speed: 3.5, angle: -3, top: '54%', left: '-10%', delay: 6800 },
        { content: 'OK', speed: 4.6, angle: -8, top: '39%', left: '-10%', delay: 6000 },
        { content: 'мин тизрәк өйгә кайтырга телим', speed: 4, angle: 11, top: '52%', left: '-10%', delay: 5200 },
        { content: 'ЛОЛ ', speed: 3, angle: 6, top: '43%', left: '-10%', delay: 1500 },
    ];



    return (
        <div>
            <ProgressBar />
            <div id="section0">

                <Table />
                <div>
                    <h1>Что такое текст?</h1>
                    <MouthText texts={texts} />
                    <span className={styles.text}>
                        В среднем за день мы произносим{' '}
                        <span className={styles.underline}>10 000 - 20 000</span>{' '}
                        слов даже не задумываясь об их происхождении
                    </span>
                    <span className={styles.text}><br /> <br /> Это только про произносимые слова</span>

                    <ChatComponent />

                    <span className={styles.text}>В&nbsp;современном мире даже сосчитать невозможно, сколько человек печатает и&nbsp;сколько текста он&nbsp;читает. И&nbsp;письменную речь, и&nbsp;звучащую объединяет одна типографика&nbsp;&mdash; а&nbsp;именно - </span>

                    <WigglingTable />

                    <span className={styles.text}><br />Они позволяют нам: </span>
                    <h1>1. составлять слова</h1>
                    <SpinningWordsTable />
                    <h1>2. общаться с любимыми</h1>
                    <img src='https://otvet.imgsmail.ru/download/99457453_4e4f0dad885a7274fb6bed981a1a6187_800.gif' style={{ margin: '0 auto', display: 'block' }} alt='' />

                    <h1>3. ругаться</h1>
                    <p style={{ fontSize: '120px', margin: '0 auto', textAlign: 'center', color: '#CF7D35' }} alt=''>&$!#%</p>


                    <p style={{ fontSize: '100px', marginBottom: '-20px' }} alt=''>Но, </p>
                    <h1>так было не всегда и не везде...</h1>

                    <p style={{ fontSize: '70px', margin: '50px', textAlign: 'right' }} alt=''>Сейчас мы разберемся: <br /> Откуда взялась письменность?</p>
                </div>

            </div>

            <div id="section1">
                <Pictograf />
            </div>

            <div id="section2">
                <Serif />
            </div>

            <div id="section3">
                <Rustik />
            </div>

            <div id="section4">
                <Gothic />
            </div>

            <div id="section5">
                <Renaissance />
            </div>

            <div id="section6">
                <Now />
            </div>

            <h1>Сегодня у&nbsp;нас есть несчитанное количество шрифтов как из&nbsp;прошлого, так и&nbsp;самые современные. И&nbsp;типографика является основным инструментом в&nbsp;графическом дизайне по&nbsp;сей день.</h1>
            
            <div className={styles.empty}></div>
            <h2 className={styles.author}>Автор: Есенский Егор</h2>
        </div>
    );
}
