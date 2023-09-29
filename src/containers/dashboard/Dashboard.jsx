import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import DashboardCard from '../../components/dashboard_cards/DashboardCard';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { StatusKeys } from '../../constants/status';

const Dashboard = () => {
  const theme = useTheme();

  const cardsPerRow = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  };

  const analyticsCards = [
    {
      title: 'New Jobs',
      icon: <WorkIcon />,
      value: 12,
      color: StatusKeys.NEW,
    },
    {
      title: 'Completed Jobs',
      icon: <AddTaskIcon />,
      value: 100,
      color: StatusKeys.COMPLETED,
    },
    {
      title: 'Total Earnings',
      icon: <CurrencyExchangeIcon />,
      value: 'LKR 100000 +',
      color: StatusKeys.ASSIGNED,
    },
    {
      title: 'Ratings',
      icon: <ReviewsIcon />,
      value: '100 +',
      color: StatusKeys.ACCEPTED,
    },
  ];

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h4">
        Welcome to Dashboard
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cardsPerRow.xs}, 1fr)`,
          gap: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: `repeat(${cardsPerRow.sm}, 1fr)`,
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: `repeat(${cardsPerRow.md}, 1fr)`,
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: `repeat(${cardsPerRow.lg}, 1fr)`,
          },
        }}
      >
        {analyticsCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  pageTitle: {
    fontWeight: 'bold',
    mb: 4,
  },
};
