import React from 'react'
import Button from '../utils/Button'
import { useSelector } from 'react-redux';

const ButtonList = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const className = isMenuOpen ? "flex gap-5 overflow-hidden overflow-x-scroll w-[77%] scrollbar-hide px-2 text-sm" : "flex gap-5 overflow-hidden overflow-x-scroll w-screen scrollbar-hide px-2 text-sm"
    const l = ["All", "Music", "TED", "News", "Mixes", "AI", "Indian pop music", "APIs", "T-series", "Podcast", "Movies musicals", "Algorithms", "Comedy clubs", "Wealth", "Courses", "Sports", "Trending"];
  return (
    <div className={className}>
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