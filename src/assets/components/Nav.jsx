import React from 'react'
import '../styles/Nav.css'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useStateValue } from '../../StateProvider';

const Nav = () => {

    const [{user}] = useStateValue();

    return (
        <div className='nav_div'>

            <div className='nav_logo'>
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="logo"/>
                <div className="search_div">
                    <SearchIcon />
                    <input type="text" placeholder='Search'/>
                </div>
            </div>

            <div className="nav_links">
                <div className="nav_options">
                    <HomeIcon />
                    <small>Home</small>
                </div>
                <div className="nav_options">
                    <GroupIcon />
                    <small>Network</small>
                </div>
                <div className="nav_options">
                    <WorkIcon />
                    <small>Jobs</small>
                </div>
                <div className="nav_options">
                    <QuestionAnswerIcon />
                    <small>Messaging</small>
                </div>
                <div className="nav_options">
                    <NotificationsActiveIcon />
                    <small>Notifications</small>
                </div>
                <div className="nav_options">
                    <Avatar 
                    src={user?.photoURL}
                    />
                </div>
                <div className="nav_options">
                    <AppsIcon />
                    <small>Work</small>
                </div>  
                <div className="premium_Offer">
                    <p><small>Try Premium Free for 1 Month</small></p>
                </div>
            </div>
        </div>
    )
}

export default Nav
