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
            image="https://blog-www.pods.com/wp-content/uploads/2021/03/resized_FI_Getty_San-Francisco-CA-1.jpg"
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
