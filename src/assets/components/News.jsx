import React from 'react'
import '../styles/News.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const News = () => {
    return (
        <>
        <div className='news_container'>
            <div className='news'>
            <div className='news_header'>
                <h3>Linkedin News</h3>
                <InfoIcon/>
            </div>
                <ul>
                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                </ul>
                <div className="showMoreDiv">
                    <h4>Show More</h4>
                    <ExpandMoreIcon />
                </div>
            </div>
            <br/>
            <div className='news'>
            <div className='news_header'>
                <h4>Today's Most Viewed Courses</h4>
                <InfoIcon/>
            </div>
                <ul>
                    <li>Today's Most Viewed Courses</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>

                    <li>Linkedin India's Top Company 2021</li>
                    <small>Top News . 3002 readers</small>
                </ul>
                <div className="showMoreDiv">
                    <h4>Show More Linkedin Learning</h4>
                    <ArrowRightAltIcon />
                </div>
            </div>
        </div>
        </>
    )
}

export default News
