import React from 'react';
import '../../style/colorKit.css'
import BurgerModal from "../burgers/burgerModal"
import { useWindowSize } from '../../services/hooks/screenSizeHook';
import { useStateContext } from '../../context';


export default function BarNav() {
  const { width } = useWindowSize();
  const { login } = useStateContext()


  let showBurgerElement = width <= 768;

  return (
    <>
      {showBurgerElement && <BurgerModal />}
      {login === 2 && 
      <div className='navbar border-e-slate-950 text-stone-600 hidden md:flex h-[70px] login2'>Admin</div>
      }
      {login === 3 && 
      <div className='navbar border-e-slate-950 text-stone-600 hidden md:flex h-[70px] login3'>User</div>
      }
      <hr />
    </>
  )
}


