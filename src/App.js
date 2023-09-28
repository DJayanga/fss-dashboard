import { Box, CssBaseline, StyledEngineProvider, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { useState, Fragment } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import SideBar from './components/sidebar/SideBar';
import AppHeader from './components/header/AppHeader';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const container = () => window.document.body;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <AppHeader toggleSidebar={toggleSidebar} />
            <Box sx={styles.container}>
              <BrowserRouter>
                <SideBar />
                <Box component={'main'} sx={styles.mainSection}>
                  <AppRoutes />
                </Box>
              </BrowserRouter>
            </Box>
          </StyledEngineProvider>
        </ProSidebarProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)',
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    bgcolor: 'neutral.normal',
  },
};
