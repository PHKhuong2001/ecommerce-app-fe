import React from 'react';
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
  return React.Children.only(children);
}

export default GlobalStyles;
