import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const AdvantagesPage = () => {
  const [dateFirst, setDateFirst] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="Surprise"
        hours="3"
        price="40"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg-party.jpg)',
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
                      <h1 className="main_header" style={{ paddingTop: '180px', minHeight: '50px' }}>
                        Чем Private Cafe отличается от других кафе?
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <div className="main_fourth-button-wrap">
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateFirst(true)}
                        >
                          Забронировать комнату
                        </button>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            id="about-us"
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#29033c' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>Наши преимущества</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-2.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Опыт</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>За 7 лет работы мы узнали, что важно для наших гостей</li>
                        <li>
                          С 2012 года нас посетили более 50.000 человек,
                          <br />
                          3.000 из них - постоянные посетители
                        </li>
                        <li>
                          Мы проводим опрос с каждым гостем, и 87% из них готовы,
                          <br />
                          вернуться, остальные 13% указывают на наши ошибки, мы исправляем их для вас.
                        </li>
                        <p />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Чистота</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>После каждого гостя проводится генеральная уборка.</li>
                        <li>Одеяла всегда чистые, свежие и в новой упаковке.</li>
                        <li>Мы используем ультрафиолетовые лампы для уничтожения бактерий.</li>
                        <li>В каждой комнате есть кондиционер для комфорта и удобства.</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '150px',
                  backgroundImage: 'url(style/img/party-4.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Приватность</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          Мы знаем, как важна конфиденциальность во время отдыха,
                          <br />
                          вот почему у нас нет скрытых камер.
                        </li>
                        <li>Наши сотрудники также не будут вас беспокоить, вы сами позовете их.</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  // backgroundImage: 'url(style/img/party-5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Преимущество</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>Вы можете взять с собой свои продукты и напитки бесплатно.</li>
                        <li>
                          Постоянные гости получают дисконтные карты от 10% до 25%.
                          <br />
                          Эти карты также включают бесплатный чай и фондю.
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/party-7.jpg)',
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
                      <h2 style={{ marginTop: '50px' }}>Наша команда</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>Эти люди создают ваш комфорт</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/party8.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Юлия</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Менеджер</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip pricing-box-team plan-header-team subtitle-team">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p9.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Елизавета</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Официант</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p10.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Диана</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Администратор</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/p11.jpg)',
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

export default AdvantagesPage;
