import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

import {BsChatLeft} from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../assests/data/avatar.jpg';
import {Chat,Notification,UserProfile} from '.';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton =({title,customFunc,icon,color,dotcolor}) => (
<TooltipComponent content={title} position='BottomCenter' >

  <button type='button' onClick={customFunc} 
  style={{color}}
  className="relative text-xl rounded-full p-3 
  hover:bg-light-gray">
  <span style= {{background:dotcolor}} className="absolute inline-flex
  rpunded-full h-2 w-2 right-2 top-2 "/> 
 
  
  {icon}
  </button>

</TooltipComponent>
)

const Navbar = () => {

  const{activeMenu,setActiveMenu,isClicked,setisClicked,handleClick,screenSize,setscreenSize} =useStateContext(); 

  useEffect(()=> {
   const handleResize = ()=> setscreenSize(window.innerWidth);

   window.addEventListener('resize',handleResize);

   handleResize();

   return() => window.removeEventListener('resize',handleResize);
  },[] );


      useEffect (()=> {
      if(screenSize <= 900){
        setActiveMenu(false);
      } else{
        setActiveMenu(true);
      }

      },[screenSize])

  return (
    <div className= "flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={()=>
      setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color =" blue"
      icon={<AiOutlineMenu/>} />

      <div className='flex'>
        
      <NavButton title="Chat" 
      dotcolor="#03C9D7" 
      customFunc={() => handleClick('Chat')} 
      color =" blue"
      icon={<BsChatLeft/>} />

      <NavButton title="Notifications" 
      dotcolor="#03C9D7" 
      customFunc={() => handleClick('Notification')} 
      color =" blue"
      icon={<RiNotification3Line/>} />

      <TooltipComponent content="Profile" position ="BottomCenter">

       <div className="flex items-center 
       gap-2 cursor-pointer p-1
       hover:bg-light-grey  rounded-lg " 
       onClick={()=> handleClick ('UserProfile')}> 
       <img 
       className="rounded-full w-8 h-8" 
       src={avatar}/>

       <p>
        <span className="text-gray-400 text-14">Hi,</span> {'  '}
        <span className="text-gray-400 font-bold ml-1 text-14">Chathura</span>
       </p>

       <MdKeyboardArrowDown 
       className="text-gray-400 text-14"/>
       </div>

      </TooltipComponent>

      {isClicked.Chat && <Chat/>}
      {isClicked.Notification && <Notification/>}
      {isClicked.UserProfile && <UserProfile/>}


      </div>

    </div>
  )
}

export default Navbar