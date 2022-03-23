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
      primaryBackground: string;
      secondaryBackground: string;
      tertiaryBackground: string;
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
    primaryInk: "#505050",
    primaryBackground: "#fbfbfb",
    secondaryBackground: "#ffffff",
    tertiaryBackground: "#f4f4f4",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultVals,
  colors: {
    primaryInk: "#ffffff",
    primaryBackground: "#202020",
    secondaryBackground: "#1a1a1a",
    tertiaryBackground: "#000000",
  },
};
