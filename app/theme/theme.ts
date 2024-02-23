"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),

    allVariants: {
      color: "white",
    },

    caption: {
      fontVariantCaps: "titling-caps",
      color: "#b2b2b2",
    },

    h1: {
      fontSize: "2.4rem",
    },

    body1: {
      fontSize: "0.8rem",
    },
  },

  palette: {
    primary: {
      main: "#E25319",
    },

    secondary: {
      main: "#111111",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          height: "100vh",
          backgroundColor: "#111111",
          boxSizing: "border-box",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#ffffff",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              color: "#ffffff",
              border: "solid #3A3A3A 2px",
              borderRadius: "1rem",
            },
            "&:hover fieldset": {
              border: "solid #E25319 2px",
            },
            "&.Mui-focused fieldset": {
              border: "solid #E25319 2px",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
            backgroundColor: "#22222c",
            borderRadius: "1rem",
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #22222c inset",
              WebkitTextFillColor: "white",
              caretColor: "white",
              WebkitBorderRadius: "1rem",
            },
          },
        },
      },
    },
  },
});
