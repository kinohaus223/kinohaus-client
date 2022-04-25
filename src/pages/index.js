import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="Сюрприз"
        hours="3"
        price="5500"
      />
      <PaymentPopup
        open={dateSecond}
        onClose={() => setDateSecond(false)}
        title="Любовный вечер"
        hours="3"
        price="10500"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="Свидание над звездами"
        hours="4"
        price="190"
      />
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="С друзьями"
        hours="3"
        price="20500"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="Все что нужно"
        hours="3"
        price="25500"
      />
      <PaymentPopup
        open={partyThird}
        onClose={() => setPartyThird(false)}
        title="Все и сейчас"
        hours="3"
        price="30500"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen   bg-cover"
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(/style/img/main_first_bg.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column show-on-mobile column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h1 className="main_header" style={{ minHeight: '70px', paddingTop: '120px' }}>
                        Privates Cafe
                      </h1>
                      <div className="main_form_item" onClick={() => setDateFirst(true)}>
                        <button>Забронировать сейчас</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one column_column progress column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h1 className="main_header">Privates Cafe</h1>
                    <br />
                    <br />
                    <button className="button main_button" onClick={() => setDateFirst(true)}>
                      Забронировать сейчас
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section    bg-cover"
          id="action"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/halls_ny.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h2>Наши комнаты</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>У нас есть 3 идеальных варианта для вас:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vip-5-new.jpeg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h3>Surprise</h3>
                      <div className="price">
                        <span>5500</span>
                        <sup className="currency">₽</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При выборе
                          <br />
                          "сюрприз":
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Романтическое оформление зала лепестками роз и свечами;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Предварительный выбор любимого фильма или музыки;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Ужин на двоих (итальянская, японская, китайская кухня на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Вкусные десерты: шоколадное фондю с фруктами;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Чай или кофе (на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Duration: 3 hours</p>
                      <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                        Забронировать сейчас
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vip-7-new.jpeg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Любовный вечер</h3>
                      <div className="price">
                        <span>10500</span>
                        <sup className="currency">₽</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При выборе
                          <br />
                          "Вечер любви" вы получаете:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Романтическое оформление зала лепестками роз и свечами;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Предварительный выбор любимого фильма или музыки;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Ужин на двоих (итальянская, японская, китайская кухня на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Вкусные десерты: шоколадное фондю с фруктами;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Чай или кофе (на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Сюрприз от "Private Cafe": бутылка шампанского
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Продолжительность: 3 часа.
                      </p>
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setDateSecond(true)}
                      >
                        Забронировать сейчас
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vip-15-new.jpeg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Свидание над звёздами</h3>
                      <div className="price">
                        <span>15500</span>
                        <sup className="currency">₽</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При выборе
                          <br />
                          "Свидание над звездами":
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Мегаромантическое украшение большого зала лепестками роз, свечами, шарами (20 шт.)
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Ужин на двоих (итальянская, японская, китайская кухня на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px' }}>Fotoshooting am Ende des Datums;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Букет цветов для женщины / любимое блюдо для мужчины;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Вкусные десерты: шоколадное фондю с фруктами;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Чай или кофе (на выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Сюрприз от "Private Cafe": бутылка шампанского "Mondoro" или вина (на ваш
                         выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Продолжительность: 3 часа;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Предварительный выбор любимого фильма или музыки;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Подарок от "Private Cafe" - "Речной круиз по реке"
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateThird(true)}>
                        Забронировать сейчас
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section    bg-cover"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/bg6.jpeg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h2>Решения для отдыха вместе с компанией</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>3 варианта проведения торжеств "под ключ"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                      </div>
                      <h2>С друзьями</h2>
                      <div className="price">
                        <span>10500</span>
                        <sup className="currency">₽</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Подходит для одного мероприятия максимум для 10 человек.
                          <br />
                          Продолжительность - 3 часа
                          <br />
                          (Big hall).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      This is also available:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Смотрите музыкальные клипы и фильмы;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Настольные игры (большой выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Торт на любой вкус; чай / кофе для гостей
                      </p>
                      <br />
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setPartyFirst(true)}
                      >
                        Забронировать комнату
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                      </div>
                      <h2>Все что нужно</h2>
                      <div className="price">
                        <span>20500</span>
                        <sup className="currency">₽</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Подходит для одного мероприятия, рассчитанного максимум на 15 человек.
                          <br />
                          Продолжительность - 3 часа
                          <br />
                          (Big hall).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      This is also available:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Смотрите музыкальные клипы и фильмы;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Настольные игры (большой выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        2 торта на любой вкус; Чай / кофе для гостей
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Закуски (чипсы/попкорн в ассортименте) и неограниченное количество колы;
                      </p>
                      <br />
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setPartySecond(true)}
                      >
                        Забронировать комнату
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                      </div>
                      <h2>Всё и сейчас</h2>
                      <div className="price">
                        <span>430</span>
                        <sup className="currency">£</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Количество гостей - до 50 человек.
                          <br />
                          Time - 3 hours
                          <br />
                          (KC первый этаж - 2 комнаты и холл).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      В данном пакете:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Смотрите музыкальные клипы и фильмы;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Настольные игры (большой выбор);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Чай / кофе для гостей;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Закуски (чипсы/попкорн в ассортименте) и неограниченное количество колы;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                       Декоративные шарики (15 шт.);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Birthday cake;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Fotoshooting;</p>
                      <br />
                      <button
                        className="button main_button fourth_button"
                        onClick={() => setPartyThird(true)}
                      >
                        Забронировать комнату
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section  main_six "
          style={{ paddingTop: '40px', paddingBottom: '0px', backgroundColor: '#361841' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <center>
                      <h2>Отзывы наших посетителей</h2>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/1.png"
                        className="scale-with-grid"
                        alt={1}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Анна Грудинская</h4>
                      <div className="desc">
                        Вчера мы встретились в Private Cafe, чтобы посмотреть фильм, который мы сняли сами. Мы
                        остались очень довольны! Нас было 11 человек, собрались в 9-м зале. Экран яркий,
                        звук хороший. Сейчас я понимаю, что лучшего места для этой встречи было не найти. Мы
                        обязательно вернемся! Сегодня мы посетим Private Cafe с большой компанией :)
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/2.png"
                        className="scale-with-grid"
                        alt={2}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Дмитрий Виногоров</h4>
                      <div className="desc">
                       Недавно мы с девушкой были тут. Если вы ищете уютное место, где можно
                        спокойно посидеть на удобных креслах/диванах за просмотром любимых фильмов и вашим
			любимым коктейлем, вы пришли в нужное место. Нам всё понравилось. Единственный
                        минус в том, что предоплату можно внести с карты. Возврат средств осуществляется в течение 24
                        часов после личного визита.
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/3.png"
                        className="scale-with-grid"
                        alt={3}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Надежда Михеева</h4>
                      <div className="desc">
                        Я отпраздновала свой день рождения и осталась очень довольна)! Оборудование работало бесперебойно, зал
                        был чистым и комфортным. Стоимость соответствует качеству. Спасибо Маргарите за
                        все! ) Единственное пожелание - выбор напитков по доступной цене увеличить)
                        С Новым Годом!
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/4.png"
                        className="scale-with-grid"
                        alt={4}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Сергей Анатольев</h4>
                      <div className="desc">
                        Здравствуйте, меня зовут Сергей, и мы пошли в Private Cafe вместе с  девушкой. Мы хотели
                        оставить отзыв об этом месте! Нас очень хорошо встретили и проводили в нашу
                        комнату. Здесь очень уютно. Много подушек и одеял, очень мягкий и удобный
                        диван, хороший ковер. Место удобно для просмотра фильмов. Хорошая
                        картинка от проектора, хороший звук прекрасно передают все действие.
                        Действительно много интересных приятных моментов, которые никого не оставляют равнодушным.
                        Спасибо всем людям, которые работают в этом месте, вы отлично справляетесь со своей работой, мы не раз приходили и
                        еще не раз вернемся к вам!
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section  main_seven "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <h2>Как к нам добраться?</h2>
                    <div className="footer-impressum" style={{ marginTop: '40px' }}>
                      <p>
                        Контакты <br />
                        <br />
                        Вы можете получить поддержку по использованию Private Cafe по этой ссылке и через кнопку "Чат" в
                        внизу справа.
                        <br />
                        <br /> Мы принимаем юридические и нормативные запросы по почте, по факсу +44 020 577-5506
                        <br /> по телефону +44 020 577-5506. Наш общий адрес электронной почты
                      contact@privatescafe.com. Если
                      у Вас есть вопросы по использованию сайта, то ,пожалуйста, используйте указанную выше информацию или 
                      обратитесь в онлайн-чат и получите ответ от специалиста.
                      </p>
                    </div>
                    <div className="main_seven-flex">
                      <div className="main_seven-item adress_item">
                        <div className="adress-wrap">
                          <p className="main_seven-phone">
                            <a className="roistat-phone" href="tel:74996497094">
                              +7 (499) 649-70-94
                            </a>
                            <br />
                          </p>
                          <ul>
                            <li>
                              <span>Пн-Чт</span> 12:00 - 00:00
                            </li>
                            <li>
                              <span>Пт-Вс</span> 12:00 - 06:00
                            </li>
                            <li>
                              <span>Adress: </span>
                              <ul className="contacts-list-inner">
                                <li>
                                  <span>27 Woolwich Rd, London SE10 0RA</span>
                                </li>
                                <li>
                                  <span>671A Fulham Rd., London SW6 5PZ</span>
                                </li>
                                <li>
                                  <span>171 Stroud Green Rd, Finsbury Park, London N4 3PZ</span>
                                </li>
                                <li>
                                  <span>5 Lower Temple St, Birmingham B2 4JD</span>
                                </li>
                                <li>
                                  <span>33 Park Row, Leeds LS1 1LD</span>
                                </li>
                                <li>
                                  <span>59 Whitechapel, Liverpool L1 6DX</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section the_content no_content" />
        <div className="section section-page-footer">
          <div className="section_wrapper clearfix">
            <div className="column one page-pager"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
