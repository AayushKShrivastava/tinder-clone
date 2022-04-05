import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import TinderLogo from './images/tinderLogo.png'
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon' /> 
        </IconButton>
        <img src={TinderLogo} alt='tinder' className='header_logo'/>
        <IconButton>
            <ForumSharpIcon fontSize='large' className='header_icon' /> 
        </IconButton>
    </div>
  )
}

export default Header