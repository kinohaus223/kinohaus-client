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
        title="Свидание над звёздами"
        hours="4"
        price="15500"
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
        title="Всё и сразу"
        hours="3"
        price="30500"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section action-main-page bg-cover"
            style={{
              paddingTop: '220px',
              paddingBottom: '0px',
              backgroundImage: 'url(https://msk.kinohouse.me/wp-content/uploads/2018/04/main_first_bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
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
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img
                            src="https://msk.kinohouse.me/wp-content/uploads/2018/05/vip-5-new.jpg"
                            alt="vip-5-new"
                            width={600}
                            height={370}
                          />
                        </div>
                        <h2></h2>
                        <h3>Сюрприз</h3>
                        <div className="price">
                          <span>20500</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          При заказе
                          <br />
                          Сюрприз вы получите:
                        </p>
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
                          Вкуснейшие десерты: шоколадное фондю с фруктами;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Чай или кофе (на выбор);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Продолжительность: 3 часа.
                        </p>
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setDateFirst(true)}
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
                          <img src="style/img/vip-7-new.jpeg" alt="vip-7-new" width={600} height={370} />
                        </div>
                        <h2></h2>
                        <h3>Любовный вечер</h3>
                        <div className="price">
                          <span>10500</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          При заказе
                          <br />
                          "Вечер любви" вы получаете:
                        </p>
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
                          Вкуснейшие десерты: шоколадное фондю с фруктами;
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
                          style={{ float: 'center' }}
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
                          <img src="style/img/vip-15-new.jpeg" alt="vip-15-new" width={600} height={370} />
                        </div>
                        <h2></h2>
                        <h3></h3>
                        <div className="price">
                          <span>15500</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          При заказе 
                          <br />
                          "Свидание в звездах" Вы получите:
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Мегаромантическое украшение большого зала лепестками роз, свечами, шарами (20
                          Шт.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Ужин на двоих (итальянская, японская, китайская кухня на выбор);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px' }}>
                          Фотосессия в конце свидания;
                        </p>
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
                          Сюрприз от "Private Cafe": бутылка шампанского "Mondoro" или вина (на
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
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateThird(true)}
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
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundImage: 'url(style/img/bg6.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
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
                      <p>3 варианта торжеств под ключ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>С друзьями</h2>
                        <div className="price">
                          <span>250</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Предназначен на 10 человек для одного мероприятия.
                          <br />
                          Продолжительность - 3 часа
                          <br />
                          (Big hall).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        В пакете доступно:
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
                          style={{ float: 'center' }}
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
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                        </div>
                        <h2>Все что нужно</h2>
                        <div className="price">
                          <span>25500</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Подходит для одного мероприятия, рассчитанного максимум на 15 человек.
                          <br />
                          Продолжительность - 3 часа
                          <br />
                          (Big hall).
                        </p>
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
                          Закуски (чипсы / попкорн в ассортименте) и неограниченное количество колы;
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
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
                          <img src="style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                        </div>
                        <h2>Всё и сразу</h2>
                        <div className="price">
                          <span>30500</span>
                          <sup className="currency">₽</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Количество гостей - до 50 человек.
                          <br />
                          Продолжительность - 3 часа
                          <br />
                          (KC первого этажа - 2 комнаты и холл).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        В пакете доступно:
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
                          Закуски (чипсы / попкорн в ассортименте) и неограниченное количество колы;Шары для украшения (15
                          шт.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Декоративные шарики (15 шт.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Birthday cake;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Photo shooting;</p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
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
            className="section mcb-section  main_seven "
            id="contacts"
            style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix">
                      <h2>Как к нам добраться?</h2>
                      <div className="footer-impressum">
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
          <div className="section the_content no_content" />
          <div className="section section-page-footer">
            <div className="section_wrapper clearfix">
              <div className="column one page-pager"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
