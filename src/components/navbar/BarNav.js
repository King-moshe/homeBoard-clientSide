import * as React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import BurgerModal from "../burgers/burgerModal"
import { useWindowSize } from '../../services/hooks/screenSizeHook';


export default function BarNav() {
  const { width } = useWindowSize();


  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  let showBurgerElement = width <= 768;

  return (
    <>
      {showBurgerElement && <BurgerModal />}
      <div className='navbar border-e-slate-950 text-stone-600 hidden md:flex h-[70px] bg-slate-700'>
        {/* <div className='mx-3 flex w-full justify-between'>
          <div className=''>

          </div>
          <div className=' flex'>
            <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>            
          </div>
        </div> */}
      </div>
      <hr />
    </>
  )
}


