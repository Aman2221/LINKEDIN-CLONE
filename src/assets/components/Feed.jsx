import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/Feed.css'
import { useStateValue } from '../../StateProvider';

const Feed = ({imgSrc, userName, caption}) => {

    const [{user}] = useStateValue();
    return (
        <div className='feed'>
            <div className="feed_header">
                
                <div className="feed_userDetails">
                    <div id='userAvatar'>
                        <Avatar 
                        src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png'
                        />
                    </div>    
                    <div id='userData'>
                        <h6>{userName} .<small>Following</small></h6>
                        <p><small>Web developer</small></p>
                        <small>3h . <i class="fas fa-globe-asia"></i></small>
                    </div>
                </div>
                <div className="optionsFeed">
                     <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <p id='caption'>{caption}</p>
            <img src={imgSrc} alt="post" />

            <div className="feed_footer">
                <i className="fas fa-thumbs-up"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-hands-wash"></i>
                <small>2005 . 50 comments</small>
            </div>
            <div className="feedFooterSecond">
                <small><i className="far fa-thumbs-up"></i>Like</small>
                <small><i className="far fa-comments"></i>Comment</small>
                <small><i className="far fa-share-square"></i>Share</small>
                <small><i className="far fa-paper-plane"></i>Send</small>
            </div>
        </div>
    )
}

export default Feed
