import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sharedValues: {
      navbarHeight: string;
    };
    colors: {
      primaryInk: string;
      secondaryBackground: string;
      primaryBackground: string;
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
    secondaryBackground: "#f4f4f4",
    primaryBackground: "#fff",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultVals,
  colors: {
    primaryInk: "#FFFFFF",
    secondaryBackground: "#101010",
    primaryBackground: "#121212",
  },
};
