import React from 'react'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MovieIcon from '@mui/icons-material/Movie';
import LoginIcon from '@mui/icons-material/Login';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='Sidebar'>
         <ul>
         <Link to='/dashboard' style={{textDecoration:'none'}}><li><b><  HomeIcon style={{color:'white'}}/>dashboard</b></li></Link>
        <Link to='/about' style={{textDecoration:'none'}}><li><b>< InfoIcon style={{color:'white'}}/>about</b></li></Link>
        
        <Link to='/products' style={{textDecoration:'none'}}><li><b>< MovieIcon style={{color:'white'}}/>props used</b></li></Link>
        <Link to='/stat' style={{textDecoration:'none'}}><li><b>< BarChartIcon style={{color:'white'}}/>stats info</b></li></Link>
        <Link to='/business' style={{textDecoration:'none'}}><li><b>< LocalActivityIcon style={{color:'white'}}/>Business</b></li></Link>
        <Link to='/contact' style={{textDecoration:'none'}}><li><b>< ContactPageIcon style={{color:'white'}}/>contact</b></li></Link>
        <Link to='/login' style={{textDecoration:'none'}}><li><b><  LoginIcon style={{color:'white'}}/>team login</b></li></Link>
        
      </ul>
    </div>
  )
}

export default Sidebar