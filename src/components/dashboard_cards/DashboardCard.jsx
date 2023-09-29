import { Card, CardContent, IconButton, Typography, useTheme } from '@mui/material';

const DashboardCard = ({ title, icon, value, color }) => {
  const theme = useTheme();
  return (
    <Card sx={{ width: 250, height: 150, position: 'relative' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: theme.palette.custom[color], marginBottom: '8px' }}>
          {title}
        </Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
      <IconButton sx={{ position: 'absolute', bottom: 10, right: 10, color: theme.palette.custom[color] }}>
        {icon}
      </IconButton>
    </Card>
  );
};

export default DashboardCard;
