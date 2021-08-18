import React from 'react';
import '../css/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w9AjAf5YZjAAX9kquoM&_nc_ht=scontent-sjc3-1.xx&oh=f8f3d45b3a61edf9a7143da9409fe430&oe=6142054B"
            message="Wow this works"
            timestamp="1 day ago"
            username="Matt Bertrand"
            image="data:image/jpeg;base64,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"
            />
            <Post 
            profilePic="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/38144352_10156663207947360_8248451771043676160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w9AjAf5YZjAAX9kquoM&_nc_ht=scontent-sjc3-1.xx&oh=f8f3d45b3a61edf9a7143da9409fe430&oe=6142054B"
            message="Wow this works"
            timestamp="1 day ago"
            username="Matt Bertrand"
            />
        </div>
    )
}

export default Feed
