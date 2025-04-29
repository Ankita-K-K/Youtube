import React from 'react'
import Button from '../utils/Button'

const ButtonList = () => {
    const l = ["All", "Music", "TED", "News", "Mixes", "AI", "Indian pop music", "APIs", "T-series", "Podcast", "Movies musicals", "Algorithms", "Comedy clubs", "Wealth", "Courses", "Sports", "Trending"];
  return (
    <div className='flex gap-5 overflow-hidden overflow-x-scroll w-screen scrollbar-hide px-2 text-sm'>
        {
            l.map((li, index) => {
                return(
                    <Button name={li} key={index} />
                )
            })
        }
    </div>
  )
}

export default ButtonList