import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import type { Themes, User, UserToken } from '../../types';

const themes: Themes = {
  winter: 'winter',
  dracula: 'dracula',
};

const getThemeFromLocalStorage = () => {
  const localTheme: string | null = localStorage.getItem('theme');
  localTheme &&
    document.documentElement.setAttribute('data-theme', JSON.parse(localTheme));
  return localTheme ? JSON.parse(localTheme) : themes.dracula;
};

const getUserFromLocalStorage = () => {
  const localTheme: string | null = localStorage.getItem('user');
  return localTheme ? JSON.parse(localTheme) : null;
};

const initialState: User = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserToken>) => {
      const user = { ...payload.user, token: payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
    toggleTheme: (state) => {
      const { winter, dracula } = themes;
      state.theme = state.theme === winter ? dracula : winter;
      localStorage.setItem('theme', JSON.stringify(state.theme));
      document.documentElement.setAttribute('data-theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
