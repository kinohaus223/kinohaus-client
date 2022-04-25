import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const PartyPage = () => {
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="«Все для друзей»"
        hours="3"
        price="5500"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="«Все что нужно»"
        hours="3"
        price="10500"
      />
      <PaymentPopup
        open={partyThird}
        onClose={() => setPartyThird(false)}
        title="«Здесь и сейчас»"
        hours="3"
        price="15500"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pbg.jpg)',
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
                        Аренда кинотеатра для компании
                      </h1>
                      <p style={{ fontWeight: 700 }}>Movies, karaoke, games just for you and your friends</p>
                      <p style={{ fontWeight: 700 }}>
                        Думаете, где отметить день рождения, устроить корпоративную вечеринку или повеселиться
                        с друзьями? Арендуйте кинотеатр! В наличии 12 залов для групп до 10 человек
                        и больших групп до 50 гостей.
                        <br />
                        В кинозале нет никаких ограничений: смотрите фильмы на полной громкости, не стесняясь пойте,
                        танцуйте или играйте под легкую музыку. Хорошая звукоизоляция позволяет вам
                        кричать от души, а кондиционер обеспечивает одну комфортную температуру
                        для активной вечеринки.
                      </p>
                      <br />
                      <br />
                      <button
                        className="button main_button fourth_button"
                        style={{ float: 'center' }}
                        onClick={() => setPartyFirst(true)}
                      >
                        Забронировать сейчас
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h4 style={{ marginBottom: '15px' }}>
                        Что бы вы хотели получить,
                        <br />
                        посетив Private Cafe?
                      </h4>
                      <ul style={{ color: '#ffffff', fontSize: '18px', lineHeight: '18px', fontWeight: 700 }}>
                        <li>Зал предназначен только для вашей группы</li>
                        <li>Ресторанная кухня и авторские напитки</li>
                        <li>Возможность петь караоке без стеснения</li>
                        <li>Широкий выбор фильмов на любой вкус</li>
                        <li>И, наконец, атмосфера веселья и праздника</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h3 style={{ marginBottom: '15px' }}>
                        Незабываемое торжество
                        <br />
                        <span style={{ color: '#e5097f' }}></span>
                      </h3>
                      <div className="main_fourth-button-wrap">
                        <p>
                          Мы гарантируем
                          <br />
                          Вашу конфиденциальность
                        </p>
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
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pabg.jpg)',
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
                      <h2>
                        Аренда кинозала:
                        <br />
                        Праздник по собственному сценарию
                      </h2>
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
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon.png"
                          className="scale-with-grid"
                          alt="icon6"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          В кинотеатре удобно планировать встречу большой компании.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon2.png"
                          className="scale-with-grid"
                          alt="icon2"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Каждая комната оформлена в соответствии с уникальным стилем. Вы можете сделать это самостоятельно, украсив
                          воздушными шарами, вывесками или с нашей помощью.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/icon3.png"
                          className="scale-with-grid"
                          alt="icon3"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Во всех больших залах есть караоке и несколько микрофонов. Есть тысячи
                          песен на компьютере. Вы также можете принести свой плейлист с собой.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon4.png"
                          className="scale-with-grid"
                          alt="icon4"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Приносить свою еду или напитки не запрещено. Кроме того, мы можем запросить доставку
                          из близлежащих ресторанов и кафе.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon5.png"
                          className="scale-with-grid"
                          alt="icon5"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Если вы отмечаете свой день рождения в кинотеатре, вы получите скидку на прокат в
                          размере вашего возраста. Имениннику 30 лет, например, скидка 30%.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#2c0144' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>
                        Предлагается полный пакет развлечений,
                        <br />
                        при аренде кинотеатра
                      </h2>
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
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Смотрите Фильм</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Как выбрать кинотеатр и кинозал? Никто не шумит в частном
                        кафе никто не беспокоит и не жует. Выбери фильм из многомиллиардного архива и наслаждайся просмотром
                        на диване!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa2.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}> Пойте караоке</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Теперь у вас есть свой собственный караоке-зал! Никаких очередей, тысячи песен на профессиональном
                        оборудовании. Private Cafe - это дешевое караоке. Рассчитывайте на количество людей, а не на
                        песни, и пойте столько, сколько захотите!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Еда</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Особенность аренды зала в Private Cafe - можно приносить еду
                        и напитки бесплатно. Также в нашем баре вы всегда можете заказать напитки, воду
                        и еду от наших партнеров. Официант принесет все вам прямо в зал
                        в течение 15-20 минут.
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa4.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Играйте в приставку</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Играйте в бестселлеры с Sony Playstation. Станьте чемпионом FIFA. Теперь вам больше не нужно
                        больше не беспокоиться о том, что вашим гостям будет скучно. Вы спрашиваете себя: "Как круто провести
                        день рождения, чтобы друзья не скучали? " Вы знаете ответ =)
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Играйте в настольные игры</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Поете, танцуете, играете в видеоигры, но не всем хватает разнообразия? тогда самое время
                        время для настольных игр! У нас есть "Мафия", "Элиас" и многие другие на любой вкус
                        и для больших компаний друзей.{' '}
                      </p>
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
            className="section mcb-section   "
            id="action"
            style={{ paddingTop: '80px', paddingBottom: '40px', backgroundColor: '#210131' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <center>
                        <h2>Отметьте день рождения у нас</h2>
                      </center>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <center>
                        <p>3 варианта торжеств под ключ</p>
                      </center>
                      <br />
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
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>С друзьями</h2>
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
                            Предназначен для компании численностью до 10 человек.
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
                        That would also:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Смотреть музыкальные клипы и фильмы;
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
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
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
                            Предназначен для компании численностью до 15 человек.
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
                        Вы получите:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Смотреть музыкальные клипы и фильмы;
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
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p style={{ color: '#ffffff' }}>
                          <big>
                            Количество гостей - до 50 человек.
                            <br />
                            Продолжительность - 3 часа
                            <br />
                            (KC первый этаж - 2 комнаты и гостиная зона).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        Вы получите:
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
                          Закуски (чипсы / попкорн в ассортименте) и неограниченное количество колы;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Шары для украшения (15 шт.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>birthday cake;</p>
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
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg7.jpg)',
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
                      <h2>How do we get there?</h2>
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
      {/* .four-columns - sidebar */}
    </div>
  );
};

export default PartyPage;
