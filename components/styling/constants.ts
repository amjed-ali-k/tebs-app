import { Style } from "nativewind/dist/transform-css/types";
import { FlexStyle, StyleProp } from "react-native";

// Tailwind colors to variables
export const Red = {
  100: "#FFCDD2",
  200: "#EF9A9A",
  300: "#E57373",
  400: "#EF5350",
  500: "#F44336",
  600: "#E53935",
  700: "#D32F2F",
  800: "#C62828",
  900: "#B71C1C",
};

export const Gray = {
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

export const Blue = {
  100: "#BBDEFB",
  200: "#90CAF9",
  300: "#64B5F6",
  400: "#42A5F5",
  500: "#2196F3",
  600: "#1E88E5",
  700: "#1976D2",
  800: "#1565C0",
  900: "#0D47A1",
};

export const Green = {
  100: "#C8E6C9",
  200: "#A5D6A7",
  300: "#81C784",
  400: "#66BB6A",
  500: "#4CAF50",
  600: "#43A047",
  700: "#388E3C",
  800: "#2E7D32",
  900: "#1B5E20",
};

export const Yellow = {
  100: "#FFF9C4",
  200: "#FFF59D",
  300: "#FFF176",
  400: "#FFEE58",
  500: "#FFEB3B",
  600: "#FDD835",
  700: "#FBC02D",
  800: "#F9A825",
  900: "#F57F17",
};

export const Orange = {
  100: "#FFE0B2",
  200: "#FFCC80",
  300: "#FFB74D",
  400: "#FFA726",
  500: "#FF9800",
  600: "#FB8C00",
  700: "#F57C00",
  800: "#EF6C00",
  900: "#E65100",
};

export const Purple = {
  100: "#E1BEE7",
  200: "#CE93D8",
  300: "#BA68C8",
  400: "#AB47BC",
  500: "#9C27B0",
  600: "#8E24AA",
  700: "#7B1FA2",
  800: "#6A1B9A",
  900: "#4A148C",
};

export const Pink = {
  100: "#F8BBD0",
  200: "#F48FB1",
  300: "#F06292",
  400: "#EC407A",
  500: "#E91E63",
  600: "#D81B60",
  700: "#C2185B",
  800: "#AD1457",
  900: "#880E4F",
};

export const Indigo = {
  100: "#C5CAE9",
  200: "#9FA8DA",
  300: "#7986CB",
  400: "#5C6BC0",
  500: "#3F51B5",
  600: "#3949AB",
  700: "#303F9F",
  800: "#283593",
  900: "#1A237E",
};

export const Teal = {
  100: "#B2DFDB",
  200: "#80CBC4",
  300: "#4DB6AC",
  400: "#26A69A",
  500: "#009688",
  600: "#00897B",
  700: "#00796B",
  800: "#00695C",
  900: "#004D40",
};

export const Cyan = {
  100: "#B2EBF2",
  200: "#80DEEA",
  300: "#4DD0E1",
  400: "#26C6DA",
  500: "#00BCD4",
  600: "#00ACC1",
  700: "#0097A7",
  800: "#00838F",
  900: "#006064",
};

export const Brown = {
  100: "#D7CCC8",
  200: "#BCAAA4",
  300: "#A1887F",
  400: "#8D6E63",
  500: "#795548",
  600: "#6D4C41",
  700: "#5D4037",
  800: "#4E342E",
  900: "#3E2723",
};

export const BlueGray = {
  100: "#CFD8DC",
  200: "#B0BEC5",
  300: "#90A4AE",
  400: "#78909C",
  500: "#607D8B",
  600: "#546E7A",
  700: "#455A64",
  800: "#37474F",
  900: "#263238",
};

export const White = "#FFFFFF";
export const Black = "#000000";
export const Transparent = "transparent";

export const FontSize = {
  xs: {
    fontSize: 10,
    lineHeight: 14,
  },
  sm: {
    fontSize: 12,
    lineHeight: 18,
  },
  base: {
    fontSize: 14,
    lineHeight: 22,
  },
  lg: {
    fontSize: 16,
    lineHeight: 22,
  },
  xl: {
    fontSize: 18,
    lineHeight: 26,
  },
  "2xl": {
    fontSize: 22,
    lineHeight: 30,
  },
  "3xl": {
    fontSize: 28,
    lineHeight: 38,
  },
  "4xl": {
    fontSize: 34,
    lineHeight: 38,
  },
};

export const Inter = {
  medium: "Inter_500Medium",
  regular: "Inter_400Regular",
  bold: "Inter_700Bold",
  extraBold: "Inter_800ExtraBold",
  black: "Inter_900Black",
};

export const Shadow = {
  sm: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.0,
    elevation: 8,
  },
  xl: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 14.0,
    elevation: 12,
  },
};

export const FlexRow: {
  flexDirection: FlexStyle["flexDirection"];
  display: FlexStyle["display"];
} = {
  flexDirection: "row",
  display: "flex",
};

export const FlexColumn: {
  flexDirection: FlexStyle["flexDirection"];
  display: FlexStyle["display"];
} = {
  flexDirection: "column",
  display: "flex",
};
