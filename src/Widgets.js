import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Widgets.css';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon className='FiberManualRecordIcon' />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Hello Patty is here", "Poppular news - 10,999 Likes")}
            {newsArticle("Good Morning Friday", "Top News of The week - 10851 shares")}
            {newsArticle("Hello Patty is here", "Poppular news - 10,999 Likes")}
            {newsArticle("Good Morning Friday", "Top News of The week - 10851 shares")}
            {newsArticle("Hello Patty is here", "Poppular news - 10,999 Likes")}
            {newsArticle("Good Morning Friday", "Top News of The week - 10851 shares")}


        </div>
    )
}

export default Widgets