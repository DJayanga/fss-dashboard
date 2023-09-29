import { createTheme } from '@mui/material/styles';
import { green, grey, indigo } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
      normal: indigo['A700'],
    },
    secondary: {
      main: '#184eca',
    },
    neutral: {
      main: '#fff',
      normal: '#f5f7ff',
    },
    green: {
      main: green[800],
    },

    custom: {
      NEW: '#de59dd',
      ESTIMATED: '#ff4081',
      APPROVED: '#9c35ae',
      BIDS: '#00aeff',
      ASSIGNED: '#184eca',
      DISPATCHED: '#402f66',
      ACCEPTED: '#ffcc00',
      INPROGRESS: '#ff9500',
      ONHOLD: '#ff3b30',
      COMPLETED: '#4cd964',
      INVOICED: '#14a651',
      PAID: '#215d38',
    },
    grey: {
      light: '#d1d8dd',
      normal: '#94a4ae',
      dark: '#3a474f',
    },
  },
});

export default theme;
