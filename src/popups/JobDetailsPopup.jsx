import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StatusKeys } from '../constants/status';

const JobDetailsPopup = ({ isOpen, jobData, onClose, submit }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(isOpen);
  const [updatedStatus, setUpdatedStatus] = useState(jobData.status);

  const closepopup = () => {
    setOpen(false);
    onClose();
  };

  const handleStatusChange = (e) => {
    setUpdatedStatus(e.target.value);
  };

  const handleSubmit = () => {
    const updatedJobData = {
      ...jobData,
      status: updatedStatus,
    };
    submit(updatedJobData);
    closepopup();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="md">
        <DialogTitle>
          Job Details
          <IconButton onClick={closepopup} style={{ float: 'right' }}>
            <CloseIcon color="secondary" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Title
                  </TableCell>
                  <TableCell>{jobData.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Description
                  </TableCell>
                  <TableCell>{jobData.desc}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Date
                  </TableCell>
                  <TableCell>{jobData.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Time
                  </TableCell>
                  <TableCell>{jobData.time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Status
                  </TableCell>
                  <TableCell>
                    <FormControl variant="standard" style={styles.formControl}>
                      <Select value={updatedStatus} onChange={handleStatusChange}>
                        {Object.values(StatusKeys).map((status) => (
                          <MenuItem key={status} value={status}>
                            {status}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Price
                  </TableCell>
                  <TableCell>LKR {jobData.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Job Poster
                  </TableCell>
                  <TableCell>{jobData.jobPoster.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Address
                  </TableCell>
                  <TableCell>{jobData.jobPoster.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Contact
                  </TableCell>
                  <TableCell>{jobData.jobPoster.contact}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Email
                  </TableCell>
                  <TableCell>{jobData.jobPoster.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Assigner
                  </TableCell>
                  <TableCell>{jobData.asignerData.asignerName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Assigner Contact
                  </TableCell>
                  <TableCell>{jobData.asignerData.asignerContact}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Assigner Email
                  </TableCell>
                  <TableCell>{jobData.asignerData.asignerEmail}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobDetailsPopup;

const styles = {
  formControl: {
    width: '150px',
  },
};
