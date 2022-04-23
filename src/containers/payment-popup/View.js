import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../components/modals';
import { redirect } from '../../utils/navigation';

export const PaymentPopupView = ({ title, hours, price, ...props }) => (
  <Modal {...props}>
    <div id="main-popup">
      <h3>
        {title}
        <br />
        <p className="main-txtt">Session duration: {hours} hours</p>
      </h3>
      <form
        className="main_form popup_form"
        onSubmit={(e) => {
          e.preventDefault();
          const dateOfBirth = document.getElementById('date-birth').value;
          const email = document.getElementById('email').value;
          redirect('/payment', { query: { price, dateOfBirth, email } });
        }}
      >
        <div className="main_form_item">
          <div className="main_text">Your name</div>
          <input className="main_name" type="text" name="name" placeholder="Your name" required />
          <div className="main_text">E-mail</div>
          <input
            className="main_phone"
            type="email"
            id="email"
            name="phone"
            placeholder="Your e-mail"
            required
          />
          <div className="main_text">Date</div>
          <input className="main_date" type="date" name="date" placeholder="Date" required />
          <div className="main_text">Time</div>
          <select name="select_time" id="select_time" className="main_select" required>
            <option selected disabled hidden>
              Take your time
            </option>
            <option value>6:00 AM</option>
            <option value>7:00 AM</option>
            <option value>8:00 AM</option>
            <option value>9:00 AM</option>
            <option value>10:00 AM</option>
            <option value>11:00 AM</option>
            <option value>12:00 PM</option>
            <option value>1:00 PM</option>
            <option value>2:00 PM</option>
            <option value>3:00 PM</option>
            <option value>4:00 PM</option>
            <option value>5:00 PM</option>
            <option value>6:00 PM</option>
            <option value>7:00 PM</option>
            <option value>8:00 PM</option>
            <option value>9:00 PM</option>
            <option value>10:00 PM</option>
            <option value>11:00 PM</option>
            <option value>12:00 AM</option>
          </select>
          <div className="main_text">Date of birth</div>
          <span className="main_text" style={{ fontSize: '12px' }}>
            We need to know that you are over 18
          </span>
          <input
            className="main_date"
            type="date"
            name="date_birth"
            placeholder="Date of birth"
            required
            id="date-birth"
          />
          <div className="main_text">Address</div>
          <select name="adress" id="adress" className="main_adress" required>
            <option selected disabled hidden>
              Choose an address
            </option>
            <option value="">27 Woolwich Rd, London SE10 0RA</option>
            <option value="">671A Fulham Rd., London SW6 5PZ</option>
            <option value="">171 Stroud Green Rd, Finsbury Park, London N4 3PZ</option>
            <option value="">5 Lower Temple St, Birmingham B2 4JD</option>
            <option value="">33 Park Row, Leeds LS1 1LD</option>
            <option value="">59 Whitechapel, Liverpool L1 6DX</option>
          </select>
        </div>
        <div className="main_form_item main_form_item1">
          <button type="submit">Book - {price} £</button>
        </div>
      </form>
    </div>
  </Modal>
);

PaymentPopupView.propTypes = {
  title: PropTypes.string,
  hours: PropTypes.string,
  price: PropTypes.number,
};
