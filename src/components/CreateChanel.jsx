import { Button, ButtonGroup, Stack } from '@mui/material';
import { Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function CreateChanel() {
  return (
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
          <SendIcon />

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
    </Box >
  );
}

export default CreateChanel;