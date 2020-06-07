import React from 'react';

const BioInfo = (props) => {
   
    console.log()

    return(
        <div>
            <p>Bio: {props.Bio || "I don't have a Bio"}</p>
            <p>Location: {props.Location || "Don't stalk me"}</p>
            <p>View my profile <a href={props.profileLink} target="_blank">here</a></p>
        </div>
    )
}

export default BioInfo;