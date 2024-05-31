import React from 'react';
import styles from './serif.module.css';

export default function Serif() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>2. Первая антиква</h1>

            <div className={styles.block}>
                <img src={'https://sun1-89.userapi.com/s/v1/ig2/XkfX6K-BPfUFPrLWwMFlk9A6-DnWGPSFqqN6Q83prNNehmbD7Eky6kk2h8SCj8JRmm6LKrQJ1gCJuYm0snyRc_ty.jpg?size=631x631&quality=95&crop=327,0,631,631&ava=1'} className={styles.image} />
                <img src={'grekAlf.png'} style={{ margin: '0 auto' }} />
            </div>
            <h1> <br /> Свой алфавит греки заимствовали у&nbsp;финикийцев, перейдя к&nbsp;письму слева направо. </h1>
            <h1> Греческое письмо стало называться&nbsp;&mdash; </h1>
            <p style={{ fontSize: '100px', margin: '0 auto', textAlign: 'center' }} alt=''>КАПИТАЛЬНЫЙ</p>
            <h1> Оно характеризуется прямыми, точно высеченными линиями. </h1>
            <div className={styles.empty}></div>
            <h1>КАПИТАЛЬНЫЙ шрифт послужил основой для римского алфавита. У него появились характерные засечки</h1>
            <div className={styles.serifCircleContainer}>
                <img className={styles.serifCircle} src='serif.png' alt='Serif' />
                <div className={styles.blinkingCircle} style={{ width: '45px', height: '45px', top: '1%', left: '67%' }}></div>
                <div className={styles.blinkingCircle} style={{ width: '30px', height: '30px', top: '53.9%', left: '48%' }}></div>
                <div className={styles.blinkingCircle} style={{ width: '40px', height: '40px', top: '68%', left: '67%' }}></div>
            </div>
            <img className={styles.column} src='column.png' />
            <h1>Вертикальные штрихи с засечками были похожи на колонны</h1>
            <h1> <br/> <br/> Но&nbsp;не&nbsp;всегда такой набор был удобен. Поэтому в&nbsp;качестве книжного письма развился шрифт пером.</h1>
            <div className={styles.empty}></div>
        </div>

    )
}