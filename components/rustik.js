import React from 'react';
import styles from './rustik.module.css';

export default function Rustik() {

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>3. Рустика</h1>
            <i>&laquo;рустика&raquo; (или &laquo;рустический шрифт&raquo;), появился в&nbsp;Древнем Риме. Рустический шрифт (лат. scriptura rustica) был широко использован в&nbsp;древнеримских рукописях с&nbsp;1-го по&nbsp;6-й века нашей эры. Он&nbsp;был менее формальным и&nbsp;более простым по&nbsp;сравнению с&nbsp;другими рукописными шрифтами того времени, такими как унциал или квадратный капитальный шрифт.</i>

            <img className={styles.image} src='/rustik.png' />

            <div className={styles.containerForText}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>рис. 4.7</h2>
                    <p className={styles.content}>В&nbsp;конце I&nbsp;в. под влиянием Востока в&nbsp;римскую архитектуру стал все более проникать стиль круглых сводов, этот принцип округления стал все более проникать в&nbsp;письмо. Появился новый стиль&nbsp;&mdash; унциальное письмо. Удобство и&nbsp;быстрота начертания достигались в&nbsp;нем тем, что штрих принимал дугообразную форму, а&nbsp;углы округлялись. Полного своего развития шрифт достиг в&nbsp;IV&nbsp;в.&nbsp;и&nbsp;применялся до&nbsp;VIII&nbsp;в.</p>
                </div>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>рис. 4.8</h2>
                    <p className={styles.content}>Во&nbsp;второй половине IX&nbsp;в. монахи Кирилл и&nbsp;Мефодий создают на&nbsp;основе греческой&nbsp;&mdash; славянскую азбуку, которая распространилась на&nbsp;Руси в&nbsp;X&nbsp;в. Вместе с&nbsp;кириллицей в&nbsp;древнерусскую письменность пришел греческий устав. Полуунциал&nbsp;&mdash; переход от&nbsp;прописных букв к&nbsp;строчным. Появляются связи между буквами. Полуунциал&nbsp;&mdash; новый шаг в&nbsp;усвоении беглости курсива при сохранении ясности письма</p>
                </div>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>рис. 4.9</h2>
                    <p className={styles.content}>В&nbsp;VIII&nbsp;&mdash; IX&nbsp;вв. сложился новый тип латинского письма, в&nbsp;нем слова разделены хорошо заметными пробелами (раньше разделяли точкой). Шрифт такого типа, называется минускулом. Первый минускул появился во&nbsp;время правления французской королевской династии Каролингов, поэтому его называют каролингским минускулом. От&nbsp;каролингского минускула ведут происхождение строчные буквы современного латинского алфавита.</p>
                </div>
            </div>
        </div>

    )
}