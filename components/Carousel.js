import React from 'react';
import Slider from 'react-slick';
import styles from './Carousel.module.css';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GothicCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: 'Textura',
      description1: 'Наиболее известный готический шрифт, также известный как &laquo;черное письмо&raquo; (blackletter).',
      description2: 'Характеризуется плотными, прямыми линиями и&nbsp;узкими, высокими буквами.',
      description3: 'Часто используется в&nbsp;официальных документах и&nbsp;печатях в&nbsp;средневековой Европе.',
      image: '/gothic/textura.png', 
    },
    {
      title: 'Rotunda',
      description1: 'Более круглый и&nbsp;менее угловатый вариант готического шрифта.',
      description2: 'Буквы имеют более округлые формы и&nbsp;выглядят менее строго по&nbsp;сравнению с&nbsp;текстурой.',
      description3: 'Часто использовалась в&nbsp;южной Европе, особенно в&nbsp;Италии и&nbsp;Испании.',
      image: '/gothic/Rotunda.png', 
    },
    {
      title: 'Schwabacher',
      description1: 'Переходный шрифт между готикой и&nbsp;ренессансными шрифтами.',
      description2: 'Более широкие и&nbsp;плавные формы букв, чем у&nbsp;текстуры.',
      description3: 'Широко использовался в&nbsp;немецкоязычных странах в&nbsp;XV-XVI&nbsp;веках.',
      image: '/gothic/Schwabacher.png', 
    },
    {
      title: 'Fraktur',
      description1: 'Очень популярный готический шрифт в&nbsp;Германии с&nbsp;XVI века и&nbsp;до&nbsp;начала XX&nbsp;века.',
      description2: 'Характеризуется ломанными линиями и&nbsp;декоративными элементами.',
      description3: 'Часто ассоциируется с&nbsp;немецкой культурой и&nbsp;литературой.',
      image: '/gothic/Fraktur.png', 
    },
    {
      title: 'Bastarda',
      description1: 'Смешанный стиль, сочетающий элементы готических и&nbsp;курсивных шрифтов.',
      description2: 'Буквы имеют более непринужденный и&nbsp;менее формальный вид.',
      description3: 'Использовалась для менее официальных текстов и&nbsp;деловой переписки.',
      image: '/gothic/Bastarda.png', 
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={styles.div} key={index}>
            <h3 className={styles.h3}>{slide.title}</h3>
            <p className={styles.p} dangerouslySetInnerHTML={{ __html: slide.description1 }}></p>
            <p className={styles.p} dangerouslySetInnerHTML={{ __html: slide.description2 }}></p>
            <p className={styles.p} dangerouslySetInnerHTML={{ __html: slide.description3 }}></p>
            <img className={styles.img} style={{filter:'invert(1)'}} src={slide.image} alt={slide.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GothicCarousel;
