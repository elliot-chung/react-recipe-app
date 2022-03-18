import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sharedValues: {
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
  sharedValues: {
    navbarHeight: "60px",
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
