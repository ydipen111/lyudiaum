import React, { useEffect } from 'react'
import Stack from '@mui/material/Stack'
import { Grid, Grid2, Paper } from '@mui/material';
import { Grid3x3 } from '@mui/icons-material';
import NoteCard from './NoteCard';

const Json = () => {
  const [notes, setNotes] = React.useState([]);
  useEffect(() => {
    fetch('https://backs-0h7q.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setNotes(data))


  }, [])
  console.log(notes);

  return (
    <Stack>
      {/* grid, fetch data, card */}
      {/* {notes && notes.product?.map(note => {
        return <>
          <div key={note._id}>
            <h1>{note.rating}</h1>
          </div>
        </>
      })} */}
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>paper 1</Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper>paper 2</Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper>paper 3</Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper>paper 4</Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper>paper 5</Paper>
        </Grid>

      </Grid>
      <NoteCard notes={notes} />








    </Stack>
  )
}

export default Json
