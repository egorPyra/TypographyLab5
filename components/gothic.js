import React from 'react';
import styles from './gothic.module.css';
import { motion } from 'framer-motion';
import GothicCarousel from './Carousel';


export default function Gothic() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>4. Эпоха средневековья</h1>

            <p className={styles.text}>
          <span className={styles.dropcap}><img src='B.png' /></span> XII веке каролингский минускул начал трансформироваться в готическую письменность. Готические шрифты были более узкими и высокими, с характерными острыми углами и ломанными линиями. Эта эволюция отразила изменения в архитектуре и искусстве того времени, где господствовали готические соборы и витражи. Готическая письменность стала доминирующей в Европе в XIV веке и использовалась до начала эпохи Возрождения.
        </p>

        <div className={styles.GothicIntro} >
        <h2>В&nbsp;готическом письме буквы сближены и&nbsp;сильно вытянуты вверх. Вероятно, первоначально сужение букв было вызвано стремлением экономить место (пергамент был очень дорогим материалом), но&nbsp;оказалось, что такой стиль шрифта отражает вкусы позднего средневековья и&nbsp;прекрасно сочетается с&nbsp;готическим стилем в&nbsp;архитектуре. В&nbsp;качестве пера употребляли колем&nbsp;&mdash; ширококонечно очищенный тростник, замененный в&nbsp;624&nbsp;г. птичьим пером. Оба вида пера соответствуют металлическому ширококонечному перу нашего времени, но&nbsp;эластичнее его.</h2>
        <img src='https://i.pinimg.com/originals/05/01/1d/05011da1b51f1bf445471a9547438151.gif' />
        </div>

        <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.GothicTitle}>Разновидности готики</motion.h3>
        <div className={styles.carusel} >
        <GothicCarousel />
        </div>
        </div>

    )
}