import React from 'react'
import { Avatar, Box, Button, ButtonGroup, createTheme, Grid, Grid2, Icon, IconButton, Stack, Typography } from '@mui/material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useNavigate } from 'react-router-dom';
import CreateChannelDialouge from '../utils/Features/CreateChannel/CreateChannelDialouge';
import HexEditIcon from './MAN/createIcon/SettingIcon';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import MenuIcon from '@mui/icons-material/Menu';
import { withTheme } from '@emotion/react';
import { Grid3x3 } from '@mui/icons-material';

const data = [{
  image: 'https://media.istockphoto.com/id/2161390438/photo/legal-liability-concept-law-books-and-magnifying-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=_JS-4ZIXaPSuEKmp_8404OMIn5nTGfoXQepZZwGPmZM=',
  gameName: 'Mit',
  field: 'School',
  count: '11'
},
{
  image: 'https://plus.unsplash.com/premium_photo-1734549547929-9219737132db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
  gameName: 'PUBG',
  field: 'Languag',
  count: '22'
}, {
  image: 'https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
  gameName: 'BMW',
  field: 'Bike',
  count: '98'
}, {
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D',
  gameName: 'IT',
  field: 'Business',
  count: '9'
}, {
  image: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
  gameName: 'Football',
  field: 'Sports',
  count: '12'
}, {
  image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
  gameName: 'Game of thorns',
  field: 'Coding',
  count: '22'
},
]
console.log(data);


const Profile = () => {
  const nav = useNavigate();
  const theme = createTheme({
    palette: {
      customGray: {
        main: "",
      }
    }

  })
  return (
    <div>
      <Stack
        sx={{
          height: "139px",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "center",
          pl: "5%",
          alignContent: "center"


        }}
      >
        {/* profile */}
        <Box


          sx={{
            display: "flex",
            // height: "115.19px",
            // alignContent: "end",
            // justifyContent: "center"
            // width: "382.23px",



          }}>
          <Avatar
            sx={{
              alignItems: "center",
              height: "79.19px",
              width: "79.19px"


            }}
            alt=''
            src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
          />

          <Stack
            sx={{
              pl: "16px",
              display: "flex-column",
              // justifyContent: "center",
              fontSize: "24px",
              fontWeight: "400",
              textAlign: "start"

            }}
          >
            <Typography sx={{

              fontSize: "28px",
              fontWeight: "500",
              lineHeight: "33.6px",
              textAlign: "start"
            }}>
              Chirag Pradhan
            </Typography>
            <Typography sx={{

              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "19.2px",
              color: "#6D6D6D",
              textAlign: "start"
            }}
            >
              @Chiragpradhan2021
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            sx={{
              display: "flex",
              direction: "row",
              // justifyContent: "center"



            }}
          >

            <ButtonGroup sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              pl: "33px"
              // backgroundColor: "red"
            }}>


              <SettingsApplicationsIcon
                sx={{
                  height: "39px",
                  width: "39px",
                  backgroundColor: "#5D5D5Ds",
                  color: "#5D5D5D"

                }}
                variant="contained" />

              <ButtonGroup sx={{

                // backgroundColor: "#E23C14",
              }}>

                <CreateChannelDialouge />

                {/* <Button
                  onClick={() => {
                    nav('/createchannel')
                  }}
                  sx={{
                    backgroundColor: "#E23C14",
                    textTransform: 'none',
                    color: "white",
                    fontSize: "2"
                  }} variant='contained '>Create Channel  <CreateNewFolderIcon sx={{
                    backgroundColor: "#E23C14"
                  }} /></Button> */}

              </ButtonGroup>

            </ButtonGroup>





          </Stack>


        </Box>
        {/* setting and create channel */}




      </Stack >
      <Typography sx={{
        display: "flex",
        direction: "row",
        pl: "5%"
      }}>

        <Typography sx={{ pt: "20px" }}>
          <ButtonGroup sx={{ gap: "30px" }}>
            <Button sx={{ display: "flex", gap: "18px", px: "5px", color: "#6D6D6D" }}>
              <FolderCopyIcon />
              <Typography sx={{ color: "#6D6D6D" }}>My library</Typography>
            </Button>
            <Button sx={{ display: "flex", gap: "18px", px: "5px", color: "#6D6D6D" }}>
              <MenuIcon />
              <Typography sx={{ color: "#6D6D6D" }}>My Channel</Typography>
            </Button>
          </ButtonGroup>
        </Typography>
      </Typography>

      <Grid
        container
        sx={{
          gap: "8px",
          px: "4%", py: '14px',
          display: "flex"
        }}>
        {data && data.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#212121",
              width: "300px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Image */}
            <img
              src={item?.image}
              alt={item?.image}
              style={{
                height: "250px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />

            {/* Icon */}
            <Box
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Icon>content_copy</Icon>
              <Typography variant="body2" sx={{ fontSize: "14px" }}>
                {item?.count}
              </Typography>
            </Box>

            {/* Content Below the Image */}
            <Stack sx={{
              pt: "4px",
              pb: "6px"
            }}>
              <Typography sx={{ display: "flex", color: "white", px: "7px", gap: "5px", alignItems: "center" }}>
                <Stack sx={{ fontSize: "20px" }}>{item?.gameName}</Stack>
                <Button size='small' sx={{
                  px: '5px',
                  py: "2px",
                  color: "white", backgroundColor: "#E23C14"
                }} variant="contained">
                  {item?.field}
                </Button>
              </Typography>
              <Typography sx={{ color: "white", px: "7px" }}>View all videos</Typography>
            </Stack>
          </Box>
        ))}
      </Grid>


    </div >
  )
}

export default Profile
