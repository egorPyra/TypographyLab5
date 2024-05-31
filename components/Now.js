import React from 'react';
import styles from './Now.module.css';

export default function Now() {


    const row1 = [
        { id: 1, imageUrlPIC: './a/ 5.png' },
        { id: 2, imageUrlPIC: './a/ 17.png' },
        { id: 3, imageUrlPIC: './a/ 3.png' },
        { id: 4, imageUrlPIC: './a/ 9.png' },
        { id: 5, imageUrlPIC: './a/ 1.png' },
        { id: 6, imageUrlPIC: './a/ 20.png' },
        { id: 7, imageUrlPIC: './a/ 15.png' },
        { id: 8, imageUrlPIC: './a/ 7.png' },
        { id: 9, imageUrlPIC: './a/ 14.png' },
        { id: 10, imageUrlPIC: './a/ 11.png' },
        { id: 11, imageUrlPIC: './a/ 4.png' },
        { id: 12, imageUrlPIC: './a/ 18.png' },
        { id: 13, imageUrlPIC: './a/ 2.png' },
        { id: 14, imageUrlPIC: './a/ 6.png' },
        { id: 15, imageUrlPIC: './a/ 19.png' },
        { id: 16, imageUrlPIC: './a/ 10.png' },
        { id: 17, imageUrlPIC: './a/ 12.png' },
        { id: 18, imageUrlPIC: './a/ 8.png' },
        { id: 19, imageUrlPIC: './a/ 13.png' },
        { id: 20, imageUrlPIC: './a/ 16.png' },
        { id: 21, imageUrlPIC: './a/ 21.png' },
    ];


    const row2 = [
        { id: 1, imageUrlPIC: './a/ 14.png' },
        { id: 2, imageUrlPIC: './a/ 3.png' },
        { id: 3, imageUrlPIC: './a/ 8.png' },
        { id: 4, imageUrlPIC: './a/ 19.png' },
        { id: 5, imageUrlPIC: './a/ 1.png' },
        { id: 6, imageUrlPIC: './a/ 12.png' },
        { id: 7, imageUrlPIC: './a/ 5.png' },
        { id: 8, imageUrlPIC: './a/ 17.png' },
        { id: 9, imageUrlPIC: './a/ 10.png' },
        { id: 10, imageUrlPIC: './a/ 4.png' },
        { id: 11, imageUrlPIC: './a/ 20.png' },
        { id: 12, imageUrlPIC: './a/ 15.png' },
        { id: 13, imageUrlPIC: './a/ 2.png' },
        { id: 14, imageUrlPIC: './a/ 9.png' },
        { id: 15, imageUrlPIC: './a/ 21.png' },
        { id: 16, imageUrlPIC: './a/ 18.png' },
        { id: 17, imageUrlPIC: './a/ 7.png' },
        { id: 18, imageUrlPIC: './a/ 13.png' },
        { id: 19, imageUrlPIC: './a/ 6.png' },
        { id: 20, imageUrlPIC: './a/ 11.png' },
        { id: 21, imageUrlPIC: './a/ 16.png' },
    ];


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>6. Современные шрифты</h1>
            <h2>В&nbsp;период с&nbsp;19&nbsp;по&nbsp;20&nbsp;века произошло значительное развитие типографии и&nbsp;шрифтового дизайна. </h2>


            <article className={styles.article}>
                <h1>Основные причины:</h1>

                <h2>Эволюция шрифтов с 19 по 20 век</h2>
                <p>В период с 19 по 20 век произошли значительные изменения в мире шрифтов, отражая достижения в области типографии и печати.</p>

                <h2>Переход от рукописных к печатным шрифтам</h2>
                <p>В начале 19 века основными шрифтами были различные варианты готических шрифтов, используемых в рукописях. Однако с развитием типографии начали активно применяться печатные шрифты, такие как роман, курсив и шрифты с засечками.</p>

                <h2>Индустриальная революция и технологические изменения</h2>
                <p>Индустриальная революция привела к развитию новых методов печати, таких как литография и офсетная печать, что существенно повлияло на производство и распространение шрифтов.</p>

                <h2>Появление новых стилей и направлений</h2>
                <p>В конце 19 века и начале 20 века появились различные новые стили в типографии, такие как арт-нуво, модерн, конструктивизм и дадаизм. Каждый из них отразился на дизайне шрифтов.</p>

                <h2>Стандартизация и развитие шрифтов</h2>
                <p>Во второй половине 19 века и в 20 веке начался процесс стандартизации шрифтов, особенно в промышленном масштабе. Были созданы такие системы, как классификация шрифтов Гарнера, которые помогли организовать многообразие шрифтов.</p>

                <h2>Развитие графического дизайна и рекламы</h2>
                <p>С развитием графического дизайна и рекламы в 20 веке стало большое внимание уделяться разработке эффективных и выразительных шрифтов для коммерческих целей.</p>
            </article>

            <h2>Один из шрифтов, наилучшим образом описывающих эту эпоху, можно считать шрифт <b>Helvetica</b> </h2>
            <div className={styles.box}>
                <img style={{ filter: 'invert(1)' }} src='https://cdn.prod.website-files.com/60a35497ea15cf45782248b1/64a69fac8555a4608087403c_6285evQ.webp' />
                <h2>Созданный в 1957 году в Швейцарии, он стал символом функционального и минималистичного дизайна, характерного для 20 века. Helvetica был широко использован в сфере графического дизайна, средствах массовой информации, рекламе и корпоративной идентификации. Его простота, чистота и универсальность отражают дух этой эпохи и влияние, которое она оказала на типографику.</h2>
            </div>

            <div className={styles.over}>


                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        {row1.map((block) => (
                            <img key={block.id} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage} />
                        ))}
                        {row1.map((block) => (
                            <img key={`${block.id}-copy`} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage} />
                        ))}
                    </div>
                </div>
            </div>

            <h2 className={styles.btw}>Стало появляться огромное количество шрифтов</h2>

            <div className={styles.marqueeContainer1}>
                <div className={styles.marquee1}>
                    {row2.map((block) => (
                        <img key={block.id} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage1} />
                    ))}
                    {row2.map((block) => (
                        <img key={`${block.id}-copy`} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage1} />
                    ))}
                </div>
            </div>


            <h2 className={styles.akw}>Многие из них являются декоративными. Сейчас мы их называем - </h2>
            <img className={styles.akwImg} src='akw.png'/>

            <h2 className={styles.akw}>Они включают в себя огромное количество шрифтов, поэтому сейчас их классифицируют </h2>
            <img src='1.webp' className={styles.types} />

        </div>

    )
}