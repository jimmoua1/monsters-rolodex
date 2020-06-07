import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Profileinfo from './components/Profileinfo.jsx' // ~= const ProfileInfo = ProfileInfo.js
import BioInfo from './components/BioInfo'
import FollowerreInfo from './components/FollowerreInfo'

import './App.css';
import FollowerProfile from './components/FollowerProfile';

const App = () => {

  const [user, setUser] = useState({})

    useEffect(() => {

      axios
        .get('https://api.github.com/users/ejaona')
        .then(res => setUser(res.data))
        .catch(err => console.log(err))

    },[])

      console.log('this is the state of user;',user.html_url)

  return(
    <div>
      
      <Profileinfo 
        imgSrc={user.avatar_url} 
        Name={user.Name} 
        userName={user.login} 
      />
      
      <BioInfo 
        Bio={user.Bio}
        Location={user.Location}
        profileLink={user.html_url}
      />

      <FollowerreInfo 
        followers={user.followers}
        following={user.following}
      />

      <FollowerProfile
      />

    </div>
  )
}

export default App;
