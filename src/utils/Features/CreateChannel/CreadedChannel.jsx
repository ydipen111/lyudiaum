import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CreateNewFolder } from '@mui/icons-material';
import { Box, InputBase, Paper, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    // overflow: 'hidden',
    maxHeight: 'none',
    overflow: '',
    height: ''
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: "504.69px"
  }
}));

export default function SaveChannel() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        spacing={4}
        sx={{
          backgroundColor: "#E23C14",
          color: "white",
          textTransform: "none",
          overflow: 'none',

        }}
        variant="outlined"
        onClick={handleClickOpen}>
        <Stack variant="body2">Create Channel</Stack>
        <CreateNewFolder sx={{
        }} />
      </Button>

      <BootstrapDialog
        sx={{ py: 9 }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, py: 3, color: "#4A4543" }}
          id="customized-dialog-title"
        >
          <Stack sx={{
            display: "flex",
            justifyContent: "center"
          }}>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", // Adjust for vertical centering
            }}
          >
            <Box>
              <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#4A4543",
                mt: 2, // Add spacing below the icon
              }}
            >
              Create Channel has been created successfully!
            </Typography>
          </Stack>

          <Stack>
            <Typography
              variant="h3"
              sx={{ fontSize: "17px", py: '3px', fontWeight: "normal", color: "#4A4543" }}
            >
              Start sharing your content or customizing your channel now.
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogActions sx={{
          display: "flex",
          justifyContent: "center"




        }}>
          <Button sx={{
            backgroundColor: '#E23C14',
            color: "white",
            textTransform: "none",
            fontSize: '17px'

          }} autoFocus onClick={handleClose}>
            Start Uploading.
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}