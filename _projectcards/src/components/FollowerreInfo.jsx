import React from 'react';

const FollowerreInfo = (props) => {
   
    return(
        <div>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>

        </div>
    )
}

export default FollowerreInfo;