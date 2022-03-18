import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBlue: string;
      primaryRed: string;
      neutralBlack: string;
      neutralDarkGrey: string;
      neutralGrey: string;
      neutralLightGrey: string;
      neutralSLightGrey: string;
      neutralWhite: string;
    };
  }
}

const defaultVals = {};

export const lightTheme: DefaultTheme = {
  ...defaultVals,
  colors: {
    primaryBlue: "#4d96ea",
    primaryRed: "#ff5151",
    neutralBlack: "#333",
    neutralDarkGrey: "#747678",
    neutralGrey: "#acacac",
    neutralLightGrey: "#f4f4f4",
    neutralSLightGrey: "#f6f6f8",
    neutralWhite: "#fff",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultVals,
  colors: {},
};
