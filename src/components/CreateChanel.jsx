import { Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup, IconButton, Icon, TextField } from '@mui/material';
import { Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

function CreateChanel() {
  const [formats, setFormats] = useState([]);
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  // console.log({ formats });

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);

  }

  const handleName = (e) => {
    e.preventDefault();
    console.log("button submited");
    if (name && details) {
      console.log({ name, details });
    }
  }

  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Stack spacing={2} direction="column">
          <Stack spacing={0} direction="row">
            <Button variant="text" color="primary">
              Create Channel
            </Button>
            <Button variant="contained" color="primary">
              Create Channel
            </Button>
            <Button variant="outlined" color="primary">
              Create Channel
            </Button>
          </Stack>

          <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary">secondary</Button>
            <Button variant="contained" color="primary">secondary</Button>
            <Button variant="contained" color="error">secondary</Button>
            <Button variant="contained" color="info">secondary</Button>
            <Button variant="contained" color="success">secondary</Button>
            <Button variant="contained" color="warning">secondary</Button>
          </Stack>

          <Stack spacing={2} direction="row">
            <Button variant='contained' startIcon={<SendIcon />}>Send me</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Send me</Button>
            <IconButton aria-label="send">
              <SendIcon />
            </IconButton>

            <ButtonGroup
              variant='text'
              orientation='vertical'
              size='small'
              aria-label='alignment button group'
              color='primary'>
              <Button onClick={() => alert('one')}>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Box>
      {/* toggleButton, toggle */}
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          size='small'
          aria-label="text alignment">
          <ToggleButton value="bold" aria-label="left aligned">Left</ToggleButton>
          <ToggleButton value="italic" aria-label="centered">Center</ToggleButton>
          <ToggleButton value="underlined" aria-label="right aligned">Right</ToggleButton>
          <ToggleButton value="justify" aria-label="justified">Justify</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* text-field */}
      <Stack spacing={2} direction="row">
        <TextField
          variant='outlined'
          className='classes.field'
          onChange={(e) => setDetails(e.target.value)}
          label="details" />
        <TextField
          className='classes.field'
          onChange={(e) => setName(e.target.value)}
          label="Name"
          fullWidth
          color='secondary'
          variant="outlined" />

        <Button onClick={handleName} variant='contained' color='primary'>Submit</Button>


      </Stack>
    </>
  );
}

export default CreateChanel;