import React from 'react';
import { useTheme } from '@mui/material';

const StatusPillar = ({ status }) => {
  const theme = useTheme();

  const backgroundColor = theme.palette.custom[status] || 'gray';

  const style = {
    width: '120px',
    height: '30px',
    borderRadius: '10px',
    backgroundColor: backgroundColor,
    padding: '5px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.neutral.main,
    fontWeight: 'bold',
  };

  return <div style={style}>{status}</div>;
};

export default StatusPillar;
