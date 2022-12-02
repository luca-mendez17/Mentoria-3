import React from 'react';
import { useContext } from 'react';
import './Sidebar.css';
import { Logo, SidebarNavItem } from '..';
import { RiBankCardFill, RiPieChartFill } from 'react-icons/ri';
import { AiFillEuroCircle } from 'react-icons/ai';
import { TiChartLine } from 'react-icons/ti';
import {VscComment} from 'react-icons/vsc'
import { DarkThemeContext } from '../Button';
import DarkModeToggle from "react-dark-mode-toggle";

const Sidebar = () => {
  const {turnOn, setTurnOn, mainColor} = useContext(DarkThemeContext);
  return (
    <nav className='Sidebar'>
      <div className='darkMode'>
      <Logo/>
      <DarkModeToggle onChange= {setTurnOn} checked={turnOn} size={60} className='darkModeBtn'/>

        
      </div>
      
      <div className='sidebar__nav'>
        <SidebarNavItem to='/assets' text='Assets' icon={<RiPieChartFill />} />
        <SidebarNavItem to='/trade' text='Trade' icon={<TiChartLine />} />
        <SidebarNavItem to='/pay' text='Pay' icon={<RiBankCardFill />} />
        <SidebarNavItem to='/deposit' text='Deposit' icon={<AiFillEuroCircle />}
        />
        <SidebarNavItem to='/contact' text='Contact' icon={<VscComment />}
        />
        {/* <Button/> */}
      </div>
    </nav>
    // </div>
  );
};

export default Sidebar;
