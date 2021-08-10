import React from 'react'
import Logo from '../components/Logo'

function Home () {
  return (
    <div className="App bg-black">
      <div className="flex h-screen bg-war bg-cover bg-no-repeat bg-center">
        <div className="m-auto">
          <Logo/>
        </div>
      </div>
    </div>
  )
}

export default Home
