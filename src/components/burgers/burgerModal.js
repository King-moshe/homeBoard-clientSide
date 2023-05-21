import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Clear, EngineeringRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, useTheme } from '@mui/private-theming';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme } from '@mui/system';
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
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}


export default function BurgerModal() {

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



  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 190 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='bg-slate-700 text-white'>
        {[""].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Clear className='mb-2'>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </Clear>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}


      </List>
      <Divider />
      <List className='bg-slate-700 text-white'>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        <ul className='px-2'>
          <p className='title text-gray-300 mt-6 '>MAIN</p>
          <Link to='/'>
            <li className='px-3 mb-12 cursor-pointer hover:text-yellow-500'><DashboardCustomizeRoundedIcon />
              <span className='mt-1 mx-2'>דף הבית</span>
            </li>
          </Link>
          <p className='title text-gray-300 mt-6'>LIST</p>
          <Link to='/users'>
            <li className='px-3 cursor-pointer hover:text-yellow-500'><PeopleAltIcon />
              <span className='mt-1 mx-2'>משתמשים</span>
            </li>
          </Link>
          <Link to='/projects'>
            <li className='px-3 mt-3 cursor-pointer hover:text-yellow-500'><AccountTreeIcon />
              <span className='mt-1 mx-2'>פרוייקטים</span>
            </li>
          </Link>
          <Link to='/contractors'>
            <li className='px-3 mb-12 mt-3 cursor-pointer hover:text-yellow-500'><EngineeringRounded />
              <span className='mt-1 mx-2'>קבלנים</span>
            </li>
          </Link>        
          <p className='title text-gray-300 mt-6'>SERVICE</p>
          <li className='px-3 mt-3 cursor-pointer hover:text-yellow-500'><ConnectWithoutContactIcon />
            <span className='mt-1 mx-2'>צור קשר</span>
          </li>
          <li className='px-3 mt-3 cursor-pointer hover:text-yellow-500'><AssignmentIndIcon />
            <span className='mt-1 mx-2'>פרופיל</span>
          </li>
          <li className='px-3 mt-3 cursor-pointer hover:text-yellow-500'><LogoutIcon />
            <span className='mt-1 mx-2 '>יציאה</span>
          </li>
          <Link to="/login" className='icon'>
            <li className='px-3 mt-3 cursor-pointer hover:text-yellow-500'>
              <LoginIcon />
              <span className='mt-1 mx-2'>כניסה</span>
            </li>
          </Link>
         <p className='title text-gray-300 mt-6'>DARK MODE</p>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <MyApp />
          </ThemeProvider>
        </ColorModeContext.Provider>
        </ul>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <div className='bg-slate-700 flex justify-between w-full' position="static">
          <div>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor} >
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon fontSize='large' className='text-white' />
                </Button>
                <Drawer                
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <Button className='text-center'>
          <img src='https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='person' className=' rounded-full w-12'/>
          </Button>
        </div>
      </Box>
    </div>
  );
}