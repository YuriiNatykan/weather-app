import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {}

export const useTheme = () => useContext(ThemeContext);
