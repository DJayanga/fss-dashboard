import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';
import dummyData from '../../assets/dummyData';
import StatusPillar from '../../components/status_piller/StatusPiller';
import JobDetailsPopup from '../../popups/JobDetailsPopup';
import { StatusKeys } from '../../constants/status';

const Jobs = () => {
  const data = dummyData;
  const assigners = new Set();
  assigners.add('ALL');

  data.forEach((job) => {
    assigners.add(job.asignerData.asignerName);
  });

  const columns = [
    { id: 'jobId', name: 'Id' },
    { id: 'title', name: 'Title' },
    { id: 'contact', name: 'Contact' },
    { id: 'date', name: 'Date' },
    { id: 'status', name: 'Status' },
    { id: 'assigner', name: 'Assigner' },
    { id: 'price', name: 'Price' },
  ];
  const theme = useTheme();

  const [rows, rowchange] = useState(data);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  const [filterName, setFilterName] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [popupData, setPopupData] = useState();

  // Function to filter data based on criteria
  const filterData = () => {
    return rows.filter((row) => {
      const isAssignerMatch =
        filterName === 'ALL' || row?.asignerData?.asignerName.toLowerCase().includes(filterName.toLowerCase());
      const isStatusMatch = filterStatus === 'ALL' || row?.status === filterStatus;
      return isAssignerMatch && isStatusMatch;
    });
  };

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };

  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const handleClick = (row) => {
    setPopupData(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setPopupData({});
  };

  const onSubmit = (data) => {
    setIsDialogOpen(false);
    updateData(data);
  };

  const updateData = (updatedData) => {
    const updatedRows = rows.map((row) => {
      if (row.jobId === updatedData.jobId) {
        return updatedData;
      }
      return row;
    });
    rowchange(updatedRows);
  };

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h4">
        Jobs
      </Typography>
      <Box sx={styles.filters}>
        <FormControl variant="standard" style={styles.formControl}>
          <InputLabel>Assigner</InputLabel>
          <Select value={filterName} onChange={(e) => setFilterName(e.target.value)}>
            {Array.from(assigners).map((asigner, index) => (
              <MenuItem key={index} value={asigner}>
                {asigner}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" style={styles.formControl}>
          <InputLabel>Status</InputLabel>
          <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <MenuItem value={'ALL'}>ALL</MenuItem>
            {Object.values(StatusKeys).map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: '55vh' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.neutral.main }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData()
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => {
                  return (
                    <TableRow key={i} style={styles.rowStyle} hover onClick={() => handleClick(row)}>
                      <TableCell style={{ width: '5%' }}>{row?.jobId}</TableCell>
                      <TableCell style={{ width: '20%' }}>{row?.title}</TableCell>
                      <TableCell style={{ width: '10%' }}>{row?.jobPoster?.contact}</TableCell>
                      <TableCell style={{ width: '10%' }}>{row?.date}</TableCell>
                      <TableCell style={{ width: '10%' }}>
                        <StatusPillar status={row?.status} />
                      </TableCell>
                      <TableCell style={{ width: '15%' }}>{row?.asignerData.asignerName}</TableCell>
                      <TableCell style={{ width: '10%' }}>LKR {row?.price}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowperpage}
          page={page}
          count={filterData().length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>

        {isDialogOpen && (
          <JobDetailsPopup isOpen={isDialogOpen} jobData={popupData} onClose={handleCloseDialog} submit={onSubmit} />
        )}
      </Paper>
    </Box>
  );
};

export default Jobs;

const styles = {
  pageTitle: {
    fontWeight: 'bold',
    mb: 2,
  },
  rowStyle: {
    cursor: 'pointer',
  },
  filters: {
    marginBottom: '20px',
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  },

  formControl: {
    width: '150px',
    height: '50px',
    textAlign: 'center',
  },
};
