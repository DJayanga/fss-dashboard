import { Route, Routes } from 'react-router-dom';
import Settings from '../containers/settings/Settings';
import Jobs from '../containers/jobs/Jobs';
import Dashboard from '../containers/dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
