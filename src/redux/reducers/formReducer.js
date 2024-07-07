// reducers/formReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form1: {
    email: "",
    password: "",
  },
  form2: {
    firstName: "",
    lastName: "",
    address: "",
  },
  form3: {
    countryCode: "",
    phoneNumber: "",
    acceptTerms: false,
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm1: (state, action) => {
      state.form1 = action.payload;
    },
    saveForm2: (state, action) => {
      state.form2 = action.payload;
    },
    saveForm3: (state, action) => {
      state.form3 = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { saveForm1, saveForm2, saveForm3, resetForm } = formSlice.actions;

export default formSlice.reducer;
