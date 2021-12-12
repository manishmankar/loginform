import { createSlice } from "@reduxjs/toolkit";
import productMSTCruds from "./apis/productMSTCrud";
const REDUCER_NAME = "productMST";

const TYPES = {
    PRODUCT: 'product',
    PRODUCT_NEW: 'productNew',
    PRODUCT_BY_ID: 'productById',
}

export const productMSTSlice = createSlice({
  name: REDUCER_NAME,
  initialState: {
    ...Object.values(TYPES).reduce((occ, cur) => {
      return { ...occ, [cur]: { loading: false, error: null, data: null } };
    }, {}),
  },
  reducers: {
    catchError: (state, action) => {
      state[action.payload.type].loading = false;
      state[action.payload.type].error = action.payload.error;
    },
    startCall: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = true;
    },
    stopCall: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = false;
    },
    dataRecieved: (state, action) => {
      state[action.payload.type].error = null;
      state[action.payload.type].loading = false;
      state[action.payload.type].data = action.payload.data;
    },
  },
});

const startCall = (type) => productMSTSlice.actions.startCall({ type });
const stopCall = (type) => productMSTSlice.actions.stopCall({ type });
const dataRecieved = (type, data) => productMSTSlice.actions.dataRecieved({ type, data });
const catchError = (type, error) => productMSTSlice.actions.catchError({ type, error });

export const productMSTActions = {
    getProduct: (data) => dispatch => {
        dispatch(startCall(TYPES.PRODUCT))
        productMSTCruds
          .getAllProducts({
            body: { ...data },
          })
          .then((res) => {
            dispatch(dataRecieved(TYPES.PRODUCT, res))
            return Promise.resolve(res)
          })
          .catch((err) => {
            dispatch(catchError(TYPES.PRODUCT, err));
            return Promise.reject(err)
        });
       
    },
    getProductById: (id) => dispatch => {
        dispatch(startCall(TYPES.PRODUCT_BY_ID))
        productMSTCruds
          .byIdDTO({id})
          .then((res) => {
            dispatch(dataRecieved(TYPES.PRODUCT_BY_ID, res))
            return Promise.resolve(res)
          })
          .catch((err) => {
            dispatch(catchError(TYPES.PRODUCT_BY_ID, err));
            return Promise.reject(err)
        });
       
    },
    getNewArrivalProducts: () => dispatch => {
        dispatch(startCall(TYPES.PRODUCT_NEW))
        productMSTCruds
          .allNew()
          .then((res) => {
            console.log(res);
            dispatch(dataRecieved(TYPES.PRODUCT_NEW, res))
            return Promise.resolve(res)
          })
          .catch((err) => {
            dispatch(catchError(TYPES.PRODUCT_NEW, err));
            return Promise.reject(err)
        });
    }
}
