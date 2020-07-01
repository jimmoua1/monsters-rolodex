import React from 'react';

const MyProfile = props => {
    console.log(props)
    return(
        <div>
            <img src={props.img_url} alt=""/>
            <h1>UserName: </h1>
            <h2>Name: </h2>
            <p>Location: </p>
            <p>Bio: </p>

        </div>
    )
}

export default MyProfile;