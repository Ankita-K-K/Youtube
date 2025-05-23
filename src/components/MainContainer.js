import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='col-span-10 mt-2'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer