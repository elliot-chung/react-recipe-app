import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mediaQueries: {
      mobile: string;
      tablet: string;
      desktop: string;
      desktopL: string;
    };
    componentSizes: {
      recipeCardSize: string;
      navbarHeight: string;
    };
    colors: {
      primaryInk: string;
      secondaryInk: string;
      primaryBackground: string;
      secondaryBackground: string;
      tertiaryBackground: string;
      highlight: string;
      glow: string;
      red: string;
    };
    filters: {
      home: string;
    };
  }
}

const defaultVals = {
  mediaQueries: {
    mobile: "@media(min-width: 320px)",
    tablet: "@media(min-width: 768px)",
    desktop: "@media(min-width: 1024px)",
    desktopL: "@media(min-width: 1280px)",
  },
  componentSizes: {
    recipeCardSize: "20rem",
    navbarHeight: "4rem",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultVals,
  colors: {
    primaryInk: "#000000",
    secondaryInk: "#ffffff",
    primaryBackground: "#fbfbfb",
    secondaryBackground: "#0f9bff",
    tertiaryBackground: "#d1d1d1",
    highlight: "#c4c4ff",
    glow: "#0f9bffb0",
    red: "#ff7070",
  },
  filters: {
    home: "invert(1)",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultVals,
  colors: {
    primaryInk: "#DDDDDD",
    secondaryInk: "#000000",
    primaryBackground: "#333333",
    secondaryBackground: "#777777",
    tertiaryBackground: "#111111",
    highlight: "#22222C",
    glow: "#ffffff80",
    red: "#ff4050",
  },
  filters: {
    home: "invert(1)",
  },
};
