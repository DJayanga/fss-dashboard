import { Box, Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h4">
        Welcome to Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
  pageTitle: {
    fontWeight: 'bold',
    mb: 2,
  },
};
