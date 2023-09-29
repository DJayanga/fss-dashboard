import { Typography, useTheme } from '@mui/material';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Sidebar style={styles.sidebar} breakPoint="md" backgroundColor={theme.palette.neutral.normal}>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              borderRadius: '5px',
              backgroundColor: active ? theme.palette.secondary.main : undefined,
              color: active ? theme.palette.neutral.main : undefined,

              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.common.white,
              },
            };
          },
        }}
      >
        <MenuItem
          active={location.pathname === '/'}
          style={{ marginBottom: '5px', marginTop: '25px' }}
          component={<Link to="/" />}
          icon={<SpaceDashboardIcon />}
        >
          <Typography variant="body2">Dashboard</Typography>{' '}
        </MenuItem>
        <MenuItem
          active={location.pathname === '/jobs'}
          style={{ marginBottom: '5px' }}
          component={<Link to="/jobs" />}
          icon={<WorkIcon />}
        >
          <Typography variant="body2">Jobs</Typography>
        </MenuItem>
        <MenuItem
          active={location.pathname === '/settings'}
          style={{ marginBottom: '5px' }}
          component={<Link to="/settings" />}
          icon={<SettingsIcon />}
        >
          <Typography variant="body2">Settings</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;

const styles = {
  sidebar: {
    height: '100%',
    top: 'auto',
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
    padding: '0 5px',
  },
};
