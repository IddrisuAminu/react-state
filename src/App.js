import React, { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import ProfileForm from './components/ProfileForm'

function App() {

  const [allProfiles, setAllprofiles] = useState([

    {
      firstname: "Comfort",
      lastname: "Yelfaare",
      email: "comfort@gmail.com",
      phone:"0245678904"
    }
  ])

  const updateallprofiles = (profile) => {
    let arr = allProfiles;
    arr.push(profile)
    setAllprofiles([...arr])
  };


  return (
    <>
    <div className="app">
<h1>Our profile maker</h1>
    </div>
    <ProfileForm submit={updateallprofiles} />
      <hr />
      <div className="list">
        {allProfiles.map((person, index) => (
          <ProfileCard key={index} card={person} /> 
        ))}


      </div>
      </>
  )
}

export default App