import React from 'react'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { EngineeringRounded } from '@mui/icons-material';
import { ThemeProvider, useTheme } from '@mui/private-theming';
import { Box, createTheme } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.inherit',
        color: 'text.primary',
        borderRadius: 1,
        p: 1,
      }}
    >
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      {theme.palette.mode} mode
    </Box>
  );
}

export default function BarSide() {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <div className='border-e-2 border-e-slate-950 min-h-screen fixed hidden md:block bg-slate-700 text-white w-[20%]'>
      <div className=' text-center h-[70px] '>
        <Button>
          <img src='https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='person' className=' rounded-full w-20' />
        </Button>
      </div>
      <hr />
      <div className=' px-4 hidden md:block '>
        <ul className='px-2'>
          <p className='title text-gray-300 mt-6 '>MAIN</p>
          <Link to='/'  >
            <li className='ps-1 mb-12 cursor-pointer mt-3 hover:text-yellow-500'>
              <DashboardCustomizeRoundedIcon />
              <span className='mt-1 mx-2' >דף הבית</span>
            </li>
          </Link>
          <p className='title text-gray-300 mt-6'>LIST</p>
          <Link to='/users'>
            <li className='ps-1 cursor-pointer mt-3 hover:text-yellow-500'>
              <PeopleAltIcon />
              <span className='mt-1 mx-2'>
                משתמשים
              </span>
            </li>
          </Link>
          <Link to='/projects'>
            <li className='ps-1 mt-3  cursor-pointer hover:text-yellow-500'>
              <AccountTreeIcon />
              <span className='mt-1 mx-2'>
                פרוייקטים
              </span>
            </li>
          </Link>
          <Link to='/contractors'>
            <li className='ps-1 mb-12 mt-3 cursor-pointer hover:text-yellow-500'><EngineeringRounded />
              <span className='mt-1 mx-2'>קבלנים</span>
            </li>
          </Link>
          <p className='title text-gray-300 mt-6'>SERVICE</p>
          <Link to='...'>
            <li className='ps-1 mt-3 cursor-pointer hover:text-yellow-500'><ConnectWithoutContactIcon />
              <span className='mt-1 mx-2'>צור קשר</span>
            </li>
          </Link>
          <Link to='...'>
            <li className='ps-1 mt-3 cursor-pointer hover:text-yellow-500'><AssignmentIndIcon />
              <span className='mt-1 mx-2'>פרופיל</span>
            </li>
          </Link>
          <Link to='...'>
            <li className='ps-1 mt-3 cursor-pointer hover:text-yellow-500'><LogoutIcon />
              <span className='mt-1 mx-2 ' onClick={() => {
                localStorage.token = ''
                window.location.reload()
              }}>יציאה</span>
            </li>
          </Link>
          <Link to='/login'>
            <li className='ps-1 mb-12 mt-3 cursor-pointer hover:text-yellow-500'> <LoginIcon />
              <span className='mt-1 mx-2 '>כניסה</span>
            </li>
          </Link>
          <p className='title text-gray-300 mt-6'>MODE</p>
          <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
              <MyApp />
            </ThemeProvider>
          </ColorModeContext.Provider>
        </ul>
      </div>
    </div>

  )
}


// import React from 'react'
// import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { EngineeringRounded } from '@mui/icons-material';
// import Switch from '@mui/material/Switch';
// import { Button, FormControlLabel, styled } from '@mui/material';

// import { Link } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';

// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   '& .MuiSwitch-switchBase': {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',
//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(22px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           '#fff',
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
//     width: 32,
//     height: 32,
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         '#fff',
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },
// }));


// export default function BarSide(change, check) {


//   return (

//     <div className='border-2 border-e-slate-950 min-h-screen hidden md:block '>
//       <div className='m-1  text-center'>
//         <Button>
//           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-OhVu04vi5MILVrHMKjFHz68ULPUqfuE-g&usqp=CAU' alt='person' className=' rounded-full w-9' />
//         </Button>
//       </div>
//       <hr />
//       <div className=' px-4 hidden md:block '>
//         <ul className='px-2'>
//           <p className='title text-gray-400 mt-6 '>MAIN</p>
//           <Link to='/'  >
//             <li className='ps-1 mb-12 cursor-pointer mt-3'>
//               <DashboardCustomizeRoundedIcon />
//               <span className='mt-1 mx-2' >Dashboard</span>
//             </li>
//           </Link>
//           <p className='title text-gray-400 mt-6'>LIST</p>
//           <Link to='/users'>
//             <li className='ps-1 cursor-pointer mt-3'>
//               <PeopleAltIcon />
//               <span className='mt-1 mx-2'>
//                 Users
//               </span>
//             </li>
//           </Link>
//           <Link to='/projects'>
//             <li className='ps-1 mt-3  cursor-pointer'>
//               <AccountTreeIcon />
//               <span className='mt-1 mx-2'>
//                 Projects
//               </span>
//             </li>
//           </Link>
//           <Link to='...'>
//             <li className='ps-1 mb-12 mt-3 cursor-pointer'><EngineeringRounded />
//               <span className='mt-1 mx-2'>Constructor</span>
//             </li>
//           </Link>
//           <p className='title text-gray-400 mt-6'>SERVICE</p>
//           <Link to='...'>
//             <li className='ps-1 mt-3 cursor-pointer'><ConnectWithoutContactIcon />
//               <span className='mt-1 mx-2'>Contact us</span>
//             </li>
//           </Link>
//           <Link to='...'>
//             <li className='ps-1 mt-3 cursor-pointer'><AssignmentIndIcon />
//               <span className='mt-1 mx-2'>Profile</span>
//             </li>
//           </Link>

//           <li className='ps-1 mt-3 cursor-pointer'><LogoutIcon />
//             <span className='mt-1 mx-2 ' onClick={() => {
//               localStorage.token = ''
//               window.location.reload()
//             }}>Logout</span>
//           </li>

//           <Link to='/login'>
//             <li className='ps-1 mb-12 mt-3 cursor-pointer'> <LoginIcon />
//               <span className='mt-1 mx-2 '>Login</span>
//             </li>
//           </Link>
//           <p className='title text-gray-400 mt-6'>MODE</p>
//         </ul>
//         <FormControlLabel
//           control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
//           label="MUI switch"
//           onChange={change}
//           checked={check}
//         />
//       </div>


//     </div>

//   )
// }