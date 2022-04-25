import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="Surprise"
        hours="3"
        price="40"
      />
      <PaymentPopup
        open={dateSecond}
        onClose={() => setDateSecond(false)}
        title="«Love evening»"
        hours="3"
        price="80"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="«Date in the stars»"
        hours="4"
        price="190"
      />
      <div className="sections_group">
        <div
          className="section mcb-section full-screen   bg-cover"
          style={{
            paddingTop: '0px',
            paddingBottom: '0px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svbg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 style={{ marginTop: '15px' }}>Date</h1>
                    <p>Выбери вариант незабываемого свидания в уютной комнате с большим экраном</p>

                    <br />
                    <strong>
                      Забронируй уютную комнату для потрясающего свидания
                    </strong>
                    <br />
                    <br />
                    <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                      Забронировать комнату
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section   "
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svromantik.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}} />
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <p className="main-form_header" style={{ textAlign: 'left' }}>
                      Проведите вечер с любимым человеком в приятной и комфортной атмосфере
                    </p>
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
            paddingBottom: '120px',
            backgroundColor: '#2d183a',
            backgroundImage: 'url(style/img/svbg7.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
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
                    <h2>Private cafe для пар: решения для идеального свидания</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>У нас есть 3 идеальных решения для Вас:</p>
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
                        <img src="style/img/svvip5.jpg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Surprise</h3>
                      <div className="price">
                        <span>40</span>
                        <sup className="currency">£</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При заказе
                          <br />
                          "Сюрприз" вы получите:
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
                        Продолжительность: 3 часа.
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                        Забронировать комнату
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip7.jpg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Love evening</h3>
                      <div className="price">
                        <span>80</span>
                        <sup className="currency">£</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При заказе
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
                        Забронировать комнату
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip15.jpg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Date in the Stars</h3>
                      <div className="price">
                        <span>190</span>
                        <sup className="currency">£</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          При заказе
                          <br />
                          "Свидание на звездах" вы получите:
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
                        Продолжительность: 4 часа;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Предварительный выбор любимого фильма или музыки;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Подарок от "Private Cafe" - "Речной круиз по реке"
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateThird(true)}>
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
          className="section mcb-section   "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <h2>How do we get there?</h2>
                    <div className="footer-impressum" style={{ marginTop: '40px' }}>
                      Контакты <br />
                      <br />
                      Вы можете получить поддержку в использовании сайта, нажав кнопку "Чат" в правом нижнем углу страницы.
                      <br />
                      <br /> Мы принимаем юридические и нормативные запросы по почте, по факсу +44 020 577-5506
                      <br /> по телефону +44 020 577-5506. Наш общий адрес электронной почты
                      contact@privatescafe.com. Если
                      у Вас есть вопросы по использованию сайта, то ,пожалуйста, используйте указанную выше информацию или 
                      обратитесь в онлайн-чат и получите ответ от специалиста.
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
                              <span>Пн-Чт</span> 12:00-00:00
                            </li>
                            <li>
                              <span>Пт-Вс</span> 12:00-06:00
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
        <div
          className="section mcb-section   "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#361841' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <p>Хотите пойти на свидание с замечательной девушкой? Тогда вам точно сюда! </p>
                    <p>
                      Здесь вы можете провести интересное, незабываемое свидание наедине со своей второй половинкой. Мы
                      гарантируем вам полную конфиденциальность, потому что в нашем заведении нет камер -
                      все сделано для вашего удобства и комфорта
                    </p>
                    <p>
                      Если вы думаете о том, как впечатлить девушку, то вы нашли нужное место. У нас есть 11
                      комфортабельных комнат с разными интерьерами. Приглушенный свет создает особую атмосферу
                      которая доставляет огромное удовольствие.{' '}
                    </p>
                    <p>
                      Вам больше не нужно думать о том, где и как провести свидание. мы поможем вам организовать
                      это на самом высоком уровне. У нас подготовлено множество сценариев, которые нравятся каждой девушке. Мы
                      сами позаботимся обо всех деталях, и вы сможете снять с себя оковы
                      ответственности за этот вечер, расслабиться и просто наслаждаться!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section the_content no_content">
          <div className="section_wrapper">
            <div className="the_content_wrapper" />
          </div>
        </div>
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
