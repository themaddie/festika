// REACT DEF
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// UI
import { ChakraProvider } from '@chakra-ui/react';
import theme from './component/theme';
import Fonts from './font/Fonts';
// ROUTES
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </BrowserRouter>
);