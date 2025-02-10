import { Card, CardHeader, Drawer, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { ClassNames } from "@emotion/react";

function NoteCard() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        contrastText: 'white',
      },
    },
  });
  const drawerWidth = 499;
  drawer: {
    width: drawerWidth;

  }

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Card sx={{ mx: 4, my: 5, }}>
          <CardHeader
            sx={{ pr: 5 }}
            action={
              <IconButton>
                <DeleteOutlined />
              </IconButton>
            }
          />
        </Card>

      </ThemeProvider>
      <Drawer
        className={ClassNames.drawer}
        variant="permanent"
        anchor="left"

      >
        <div>
          <Typography>
            Left
          </Typography>
        </div>
      </Drawer>

      <List>
        <ListItem>
          <ListItemText />
        </ListItem>
      </List>




    </div>
  );
}

export default NoteCard;
