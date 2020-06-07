import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Profileinfo from './Profileinfo.jsx'
import FollowerreInfo from './FollowerreInfo'
import BioInfo from './BioInfo'

const FollowerProfile = () => {
    
    const [followersList, setfollowersList] = useState([])
    
    useEffect(() => {

        axios 
            .get('https://api.github.com/users/ejaona/followers')
            .then(res => setfollowersList(res.data))
            .catch(err => console.log(err))
    }, [])

    // console.log('list of followers:', followersList)

    return(
        <div>
            {followersList.map(follower => (
             
                <div>
                    <Profileinfo 
                         imgSrc={follower.avatar_url}   
                         name={follower.name}
                         userName={follower.login}        
                    />

                    <BioInfo
                        Bio={follower.Bio}
                        Location={follower.Location}
                        profileLink={follower.html_url}
                    />

                    <FollowerreInfo 
                        followers={follower.followers}
                        following={follower.following}
                    />

                </div>

            ))}

        </div>
    )
}

export default FollowerProfile;