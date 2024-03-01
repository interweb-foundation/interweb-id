import { extendTheme } from "@chakra-ui/react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react";

export const theme = extendTheme({
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Work Sans, system-ui, sans-serif",
  },
  colors: {
    // primary: {
    //   "50": "#e5e7f9",
    //   "100": "#bec4ef",
    //   "200": "#929ce4",
    //   "300": "#6674d9",
    //   "400": "#4657d1",
    //   "500": "#2539c9",
    //   "600": "#2133c3",
    //   "700": "#1b2cbc",
    //   "800": "#1624b5",
    //   "900": "#0d17a9",
    // },
    primary: {
      "50": "#E7D5E8",
      "100": "#D6A7DB",
      "200": "#C47CCF",
      "300": "#B055C2",
      "400": "#9B33B5",
      "500": "#8514A8",
      "600": "#620982",
      "700": "#41025C",
      "800": "#240036",
      "900": "#180024",
    },
    warmGray: {
      "50": "#FAFAF9",
      "100": "#F3F2F1",
      "200": "#EAEAE8",
      "300": "#D7D7D4",
      "400": "#B2B1AE",
      "500": "#868581",
      "600": "#5B5A57",
      "700": "#3C3B39",
      "800": "#232323",
      "900": "#1D1D1D",
    },
    purpleGray: {
      "50": "#DDCFE5",
      "100": "#B8ACBF",
      "200": "#9E92A6",
      "300": "#847B8C",
      "400": "#6D6573",
      "500": "#534C59",
      "600": "#453D4D",
      "700": "#352D40",
      "800": "#1F1B26",
      "900": "#15121A",
    },
  },
  breakPoints: {
    sm: "360px",
    md: "414px",
    lg: "768px",
    // lg: "85em",
    // xl: "96em",
  },
  shadows: {
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
});

export const parameters = {
  chakra: {
    theme,
  },
  viewport: {
    //👇 https://gs.statcounter.com/screen-resolution-stats
    viewports: {
      "mobile-sm": {
        name: "mobile(sm)",
        styles: {
          width: "360px",
          height: "800px",
        },
      },
      "mobile-lg": {
        name: "mobile(lg)",
        styles: {
          width: "414px",
          height: "896px",
        },
      },
      table: {
        name: "table",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      // "desktop-sm": {
      //   name: "desktop(sm)",
      //   styles: {
      //     width: "1366px",
      //     height: "768px",
      //   },
      // },
      // "desktop-md": {
      //   name: "desktop(md)",
      //   styles: {
      //     width: "1536px",
      //     height: "964px",
      //   },
      // },
    },
  },
};

addDecorator(withKnobs);
