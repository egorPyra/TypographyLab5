import React from 'react';
import styles from './picktograf.module.css';

export default function Pictograf() {
    const blocks = [
        // { id: 1, text: 'образно картинные письмо в котором определенные события изображались виде примитивного и условного рисунка', imageUrl: './pictogram.1.png' },
        { id: 2, text: 'Древний Египет: В Египте пиктограммы стали основой для иероглифической письменности, которая использовалась для записи религиозных текстов, исторических записей и административных документов. Иероглифы включали как изображения объектов, так и фонетические символы.', imageUrl: './pictogram.2.png' },
        { id: 3, text: 'Шумеры: В Месопотамии пиктограммы использовались для записи экономических и административных данных. Со временем они эволюционировали в клинопись, где символы выгравировывались на глиняных табличках с помощью клиновидного инструмента.', imageUrl: './pictogram.3.png' },
        { id: 4, text: 'Китай: В Китае ранние пиктограммы легли в основу китайских иероглифов, которые до сих пор являются частью современного китайского письма.', imageUrl: './pictogram.4.png' },
    ];

    const pictogram = [
        { id: 9, imageUrlPIC: './pictogram/1.png' },
        { id: 10, imageUrlPIC: './pictogram/2.png' },
        { id: 11, imageUrlPIC: './pictogram/3.png' },
        { id: 12, imageUrlPIC: './pictogram/4.png' },
        { id: 5, imageUrlPIC: './pictogram/5.png' },
        { id: 6, imageUrlPIC: './pictogram/6.png' },
        { id: 7, imageUrlPIC: './pictogram/7.png' },
        { id: 8, imageUrlPIC: './pictogram/8.png' },
        { id: 9, imageUrlPIC: './pictogram/9.png' },
    ];

    return (
        <>

            <div className={styles.container}>
                <h1 className={styles.h1}>1. Пиктография</h1>
                <p style={{ fontSize: '40px', margin: '40px', textAlign: 'right' }} alt=''> &mdash;&nbsp;образно картинное письмо, в&nbsp;котором определенные события изображались виде примитивного и&nbsp;условного рисунка</p>
                {blocks.map((block) => (
                    <div key={block.id} className={styles.block}>
                        <img src={block.imageUrl} alt={block.text} className={styles.image} />
                        <p className={styles.text}>{block.text}</p>
                    </div>
                ))}


                <h1>Из-за простоты и удобства их используют до сих пор</h1>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marquee}>
                        {pictogram.map((block) => (
                            <img key={block.id} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage} />
                        ))}
                        {pictogram.map((block) => (
                            <img key={`${block.id}-copy`} src={block.imageUrlPIC} alt={`Image ${block.id}`} className={styles.marqueeImage} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}