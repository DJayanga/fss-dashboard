import { Box, Typography } from '@mui/material';
import React from 'react';

const Settings = () => {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h4">
        Settings
      </Typography>
    </Box>
  );
};

export default Settings;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  pageTitle: {
    fontWeight: 'bold',
    mb: 2,
  },
};
