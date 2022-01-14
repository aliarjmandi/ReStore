
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/system";
import React from "react";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {

  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode : paletteType,
      background:{
        default: paletteType ==='light' ? '#eaeaea' : '#121212'
      }
    }
  })


  function handleThemeChange()
  {
    setDarkMode(!darkMode);

  }

  return (
    <>
      <ThemeProvider theme={theme}>
      </ThemeProvider>

      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}
export default App;
