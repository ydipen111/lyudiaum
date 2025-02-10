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
import { ButtonGroup, Input, InputAdornment, InputBase, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Importing the icon for upload
import { useNavigate } from 'react-router-dom';
import SaveChannel from './CreadedChannel';

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

export default function CreateChannelDialouge() {
  const nav = useNavigate();
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
        onClick={
          handleClickOpen
        }>
        <Stack variant="body2">Create Channel</Stack>
        <CreateNewFolder sx={{
        }} />
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle variant='h5'
          sx={{ m: 0, p: 2, color: "#4A4543", }}
          id="customized-dialog-title">
          Create Channel
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ gap: "10px", borderRadius: '16px' }} dividers>
          <Stack spacing={3}>
            <Typography color='#343434' variant='h6' gutterBottom>
              <Stack sx={{ pb: "7px" }} variant='body2'>
                <Typography sx={{ pb: "5px", fontSize: '17px' }}>Your Channel Name</Typography>
              </Stack>
              <Paper sx={{ px: '3px', py: '0px', border: "none", backgroundColor: "#EFF2F6BF", boxShadow: "none" }}>
                <InputBase sx={{ py: '4px', border: "none", px: "5", fontSize: "18px", border: "#EFF2F6BF", height: "45.36px", width: "504.69px", color: "#8C8C8C", "& .MuiInputBase-input": { fontSize: "18px", } }} placeholder='United Channel' />
              </Paper>
            </Typography>

            <Typography color='#343434' gutterBottom>
              <Stack sx={{ pb: "7px" }} >
                <Typography sx={{ pb: "5px", fontSize: '18px' }}>Select Topic For Your Channel</Typography>
              </Stack>
              <Paper sx={{ boxShadow: "none", px: '4px', py: '0px', backgroundColor: "#EFF2F6BF", }}>
                <InputBase sx={{ py: '2px', px: "0", fontSize: "20px", border: "#EFF2F6BF", height: "45.36px", width: "504.69px", color: "#8C8C8C", "& .MuiInputBase-input": { fontSize: "18px", } }} placeholder='Select any one topic' />
              </Paper>
            </Typography>

            <Typography color='#343434' variant='h6' gutterBottom>
              <Stack sx={{ pb: "7px" }} variant='body2'>
                <Typography sx={{ pb: "5px", fontSize: 'px' }}>Update Channel Logo</Typography>
              </Stack>
              {/* <Paper
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  height: '256px',
                  width: '100%',
                  backgroundColor: '#EFF2F6BF',
                  boxShadow: 'none',
                  border: '2px dashed #ccc',
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#E23C14',
                    backgroundColor: '#EAEAEA',
                  },
                }}
              >
                <CloudUploadIcon sx={{ fontSize: '48px', color: '#ccc', mb: 1 }} />
                <Typography variant="body2" color="#8C8C8C">Upload Photo or Drag and drop</Typography>
                <Input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-photo"
                  type="file"
                />
                <label htmlFor="upload-photo">
                  <Button variant="contained" component="span" sx={{ mt: 2, backgroundColor: '#E23C14', color: 'white', '&:hover': { backgroundColor: '#D32F2F' } }}>
                    Upload Photo
                  </Button>
                </label>
              </Paper> */}
              <Stack
                sx={{
                  // width: '100%',
                  height: '150px', // Adjust as needed
                  backgroundColor: '#EFF2F6BF',
                  boxShadow: 'none',
                  border: '2px dashed #ccc',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    borderColor: '#E23C14',
                    backgroundColor: '#EAEAEA',
                  },
                }}
              >
                <Typography variant="body2" color="#8C8C8C">Choose File No file chosen</Typography>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="upload-photo"
                  type="file"
                />
                <label htmlFor="upload-photo">
                  <Button variant="contained" component="span" sx={{ mt: 2, backgroundColor: '#E23C14', color: 'white', '&:hover': { backgroundColor: '#D32F2F' } }}>
                    Upload Photo
                  </Button>
                </label>
              </Stack>
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{
          display: "flex",
          justifyContent: "start"




        }}>
          <Button sx={{
            backgroundColor: '#E23C14',
            color: "white"
          }} autoFocus onClick={handleClose}>
            Cancle
          </Button>

          <SaveChannel />

        </DialogActions>
      </BootstrapDialog>
    </React.Fragment >
  );
}