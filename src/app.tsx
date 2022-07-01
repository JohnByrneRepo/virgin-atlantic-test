import { h, render } from "preact"
import App from "./components/app.component";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";

declare let window: Window;

const root: HTMLElement = document.getElementById('searchAppTarget')
const target: HTMLElement = document.querySelector('.renderTarget')

render(
    <ThemeProvider theme={defaultTheme}><GlobalStyle /><App /></ThemeProvider>
    , root, target)