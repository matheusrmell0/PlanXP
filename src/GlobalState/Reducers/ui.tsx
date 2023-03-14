import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../configureStore';

// Reducer para controle global do estado para desenvolvimento mobile
const slice = createSlice({
  name: 'modal',
  initialState: {
    mobile: null,
  },
  reducers: {
    changeModal(state, action) {
      state.mobile = action.payload;
    },
  },
});

// Ações do reducer
const { changeModal } = slice.actions;

/**
 * Funcao para o mobile em estado global
 * @param {Number} media
 * Define o parametro para o max-width em unidade escalável e relativa (REM) para definir o momento do estado mobile do site
 */
export const changeMatch = (media: number) => (dispatch: AppDispatch) => {
  const { matches } = window.matchMedia(`(max-width: ${media}rem)`);
  dispatch(changeModal(matches));
};

export default slice.reducer;
