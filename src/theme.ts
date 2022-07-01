import { DefaultTheme } from "styled-components";

// theme.ts
export const defaultTheme: DefaultTheme = {
    colors: {
        // Brand colours
        virginRed: '#DA0530',
        purple: '#4F145B',
        purpleLight: '#6400A1',
        blue: '#2465CF',
        // Supporting colours
        squidInk: '#222222',
        toothbrush: '#6B6B6B',
        blanket: '#DDDFE4',
        tub: '#EFF1F7',
        flannel: '#F6F7FC',
        speakers: '#F6F8FC',
        white: '#FFFFFF',
        offWhite: '#FAFAFA',
        backgroundGrey: '#F4F5F9',
        black: '#222831',
    },
    primary: {
        main: '#DA0530',
        contrastText: '#ffffff'
    },
    secondary: {
        main: 'transparent',
        contrastText: '#000000'
    }
}
