// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        // Brand colours
        virginRed: string,
        purple: string,
        purpleLight: string,
        blue: string,
        // Supporting colours
        squidInk: string,
        toothbrush: string,
        blanket: string,
        tub: string,
        flannel: string,
        speakers: string,
        white: string,
        offWhite: string,
        backgroundGrey: string,
        black: string,
    },
    primary: {
        main: string,
        contrastText: string
    },
    secondary: {
        main: string,
        contrastText: string
    },
    breakpoints: {
        screenXs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string,
        xxl: string,
        xsmax: string,
        smmax: string,
        mdmax: string,
        lgmax: string,
        xlmax: string
    }
  }
}
