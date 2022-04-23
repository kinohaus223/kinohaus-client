import React from 'react';
import PropTypes from 'prop-types';

export const PaymentSupportView = ({ handleClose }) => {
  return (
    <div className="payment">
      <div className="card-form__inner small-top">
        <h3 style={{ marginBottom: '40px', padding: 0 }}>Contact site support</h3>
        <button
          type="submit"
          className="cta cta-full-width"
          onClick={handleClose}
          style={{ marginBottom: 0 }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

PaymentSupportView.propTypes = {
  handleClose: PropTypes.func,
};
