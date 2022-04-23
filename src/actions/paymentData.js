import { PAYMENT_DATA } from '.';

import { httpRequest } from '../utils/request';
import { API } from '../constants/api';

const setLoading = () => ({
  type: PAYMENT_DATA.LOAD_PENDING,
});

export const setLoaded = () => ({
  type: PAYMENT_DATA.LOAD_SUCCESS,
});

export const setFail = (message) => ({
  type: PAYMENT_DATA.LOAD_FAIL,
  message,
});

export const setData = (data) => ({
  type: PAYMENT_DATA.SET_DATA,
  data,
});

export const submitPaymentData = (payload) => async (dispatch, getState) => {
  dispatch(setLoading());

  const { socket } = getState();

  socket.emit('PAYMENT_DATA_SEND', payload);
};

export const getAddressList = (name = null) => {
  return async () => {
    const { MAPBOX_TOKEN } = process.env;

    try {
      const { data } = await httpRequest.get(API.ADDRESS_LIST(name), {
        params: {
          access_token: MAPBOX_TOKEN,
          country: 'US,GB',
        },
      });

      const performedData = data.features.map((item) => {
        const zipItem = item.context.find((item) => item.id.includes('postcode'));
        const zip = zipItem?.text;
        const placeItem = item.context.find((item) => item.id.includes('place'));
        const place = placeItem?.text;
        const stateItem = item.context.find((item) => item.id.includes('region'));
        const state = stateItem?.text;

        return {
          id: item.id,
          name: item.place_name,
          zip,
          place,
          state,
          latitude: item.center[1],
          longitude: item.center[0],
        };
      });

      return performedData;
    } catch ({ response: { data = {} } = { response: { data: {} } } }) {
      return [];
    }
  };
};
