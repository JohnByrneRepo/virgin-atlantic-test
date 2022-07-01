import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Gotham;
        src: url('./public/gotham-light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @primary-font: Gotham, 'Helvetica', 'Arial', sans-serif;

    @font-weight-bold: 600;
    @font-weight-medium-bold: 500;
    @font-weight-medium: 400;
    @font-weight-light: 300;

    @transition-speed: 0.3s;
    @transition-easing: ease-in-out;

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Gotham;
        font-weight: @font-weight-light;
        color: #222222;
        text-align: left;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        overflow-x: hidden;
        background-color: #F4F5F9;
    }

    html {
        font-size: 62.5%;
    }

    .wrapper {
        width: 95%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .full-bleed {
        width: 100vw;
        margin-left: calc(50% - 50vw);
    }

    label {
        width: 100%;
        display: block;
    }

    h1 {
        font-size: 2.4rem;
    }
        
    input, select {
        font-family: @primary-font;
        font-weight: @font-weight-light;
    }

    .horizontal-slider {
        width: 100%;
        max-width: 500px;
        height: 40px;
        margin: auto;
    }
    .example-thumb {
        cursor: pointer;
        position: absolute;
        z-index: 100;
        background: #ffffff;
        border: 5px solid #3774ff;
        border-radius: 100%;
        display: block;
        box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
    }
    .example-thumb.active {
        background-color: grey;
    }
    .example-track {
        position: relative;
        background: #ddd;
    }
    .example-track.example-track-0 {
     background: #83a9ff;
    }
    .horizontal-slider .example-track {
        top: 20px;
        height: 4px;
    }
    .horizontal-slider .example-thumb {
        top: 12px;
        width: 10px;
        outline: none;
        height: 10px;
        line-height: 38px;
    }
`;

export default GlobalStyle;
