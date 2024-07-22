import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import type { Themes, User } from '../../types';

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

const initialState: User = {
  user: { username: 'Pitter Bratt' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(state);
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
