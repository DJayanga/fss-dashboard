import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Logo from '../../assets/i4Tlogo.png';
import { useProSidebar } from 'react-pro-sidebar';

const AppHeader = () => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton onClick={() => (broken ? toggleSidebar() : collapseSidebar())} color="secondary">
          <MenuIcon />
        </IconButton>
        <Box component={'img'} sx={styles.appLogo} src={Logo} />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton title="Notifications" color="secondary" style={{ marginRight: '10px' }}>
          <Badge badgeContent={12} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: 'neutral.main',
  },
  appLogo: {
    borderRadius: 2,
    width: 100,
    marginLeft: 2,
    cursor: 'pointer',
  },
};
