import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`@font-face {
        font-family: 'Dana';
        src: url('./Dana-FaNum-Medium.ttf') format('ttf');
      }`}
  />
);

export default Fonts;
