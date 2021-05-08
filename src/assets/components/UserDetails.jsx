import React from 'react'
import '../styles/UserDetails.css'
import ava from '../img/ava.png'
import userEvent from '@testing-library/user-event'
import { useStateValue } from '../../StateProvider';

const UserDetails = () => {
    
    const [{user}] = useStateValue();

    return (
        <>
        <div className='UserDetails'>
            <div className="profile_details">
                <img className='bgImg' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190531175841/Full-Stack-Web-Developer.png" alt="background_img"/>
                    <div className="middle_div">
                        <img className='userImage' src={user?.photoURL} alt="avatar"/>
                        <h4>{user?.displayName}</h4>
                        <h6>{user?.email}</h6>
                    </div>
                
                <div className="profile_viewed">
                    <div className="Line">
                        <small>Who viewed your profile</small>
                        <small className='num'>565</small>
                    </div>
                    <div className="Line">
                        <small>Who viewed your video</small>
                        <small className='num'>1,898</small>
                    </div>
                    <small>Access exclusive tools & insight</small>
                    <p id='tryLine'>Try Premium For 1 Month</p>
                    <div className="saved">
                        <i className="fas fa-bookmark"></i>
                        <p>My items</p>
                    </div>
                </div>
            </div>

            <div className="recent_details">
                <small>Recent</small>
                    <div className="saved">
                        <i className="fas fa-hashtag"></i>
                        <p>100daysofcode</p>
                    </div>
                     <div className="saved">
                        <i className="fas fa-users"></i>
                        <p>React Developers</p>
                    </div>
                     <div className="saved">
                        <i className="fas fa-users"></i>
                        <p>Front End Developers</p>
                    </div>
                     <div className="saved">
                        <i className="fas fa-users"></i>
                        <p>Angular</p>
                    </div>
                    <div className="saved">
                        <i className="fas fa-hashtag"></i>
                        <p>growthwithgoogle</p>
                    </div>
            </div>
        </div>
        </>
    )
}

export default UserDetails
