import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import MyFollowers from './Components/MyFollowers';
import MyProfile from './Components/MyProfile';
import Home from './Components/Home';
import Nav from './Components/Nav';

import './App.css';


const App = _ => {

  const [myProfileinfo, setmyProfileinfo] = useState({})
  const [myFollowers, setmyFollowers] = useState([])

  useEffect(() => {

    axios
      .get('https://api.github.com/users/ejoana')
      .then(res => setmyProfileinfo(res.data))
      .catch(err => console.log(err))
  }) 

  useEffect(() => {

    axios
      .get('https://api.github.com/users/ejaona/followers')
      .then(res => setmyFollowers(res.data))
      .catch(err => console.log(err))
  })

  return(

    <div>
      
      <Nav />

      <Route exact path='/' component={Home} />

      <Route 
        path='/myProfile' 
        render={
          props => 
            <MyProfile 
              {...props} 
              img_src={myProfileinfo.avatar_url}
              name={myProfileinfo.name} 
              username={myProfileinfo.login}
              location={myProfileinfo.location}
              bio={myProfileinfo.bio}
            />        
        } />

      <Route path='/myFollowers' render={props => <MyFollowers {...props} />} />

    </div>

  )
}

export default App;
