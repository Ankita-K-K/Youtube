import React from 'react'
import { BiFlag, BiHelpCircle, BiMusic, BiShoppingBag } from 'react-icons/bi'
import { BsCameraReels, BsFire } from 'react-icons/bs'
import { FaHistory, FaHome, FaThumbsUp, FaVideo } from 'react-icons/fa'
import { LiaVideoSolid } from 'react-icons/lia'
import { MdFeedback, MdLiveTv, MdSubscriptions, MdWatchLater } from 'react-icons/md'
import { PiPlaylist } from 'react-icons/pi'
import { SiStudyverse } from 'react-icons/si'
import { SlSettings } from 'react-icons/sl'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
  return (
    <div className='col-span-2 shadow-lg mt-1'>
        <div className='flex flex-col gap-3 m-2 text-lg'>
            <ul className='flex flex-col gap-2'>
                <li className='flex gap-3 items-center justify-start'>
                    <FaHome className='text-xl'/>
                    <p>Home</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <MdSubscriptions  className='text-xl'/>
                    <p>Subscription</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BsCameraReels className='text-xl'/>
                    <p>Shorts</p>
                </li>
            </ul>
            <hr />
            <ul className='flex flex-col gap-3'>
                <li className='flex gap-3 items-center justify-start'>
                    <FaHistory  className='text-xl'/>
                    <p>History</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <PiPlaylist className='text-xl'/>
                    <p>Playlists</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <LiaVideoSolid  className='text-xl'/>
                    <p>Your Videos</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <SiStudyverse  className='text-xl'/>
                    <p>Your Courses</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <MdWatchLater className='text-xl'/>
                    <p>Watch later</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <FaThumbsUp className='text-xl'/>
                    <p>Liked videos</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <FaHistory  className='text-xl'/>
                    <p>History</p>
                </li>
            </ul>
            <hr />
            <ul className='flex flex-col gap-3'>
                <li className='flex gap-3 items-center justify-start'>
                    <BsFire className='text-xl'/>
                    <p>Trending</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BiShoppingBag className='text-xl' />
                    <p>Shopping</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BiMusic className='text-xl' />
                    <p>Music</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <FaVideo className='text-xl' />
                    <p>Movies</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <MdLiveTv className='text-xl'/>
                    <p>Live</p>
                </li>
            </ul>
            <hr />
            <ul className='flex flex-col gap-3'>
                <li className='flex gap-3 items-center justify-start'>
                    <SlSettings className='text-xl' />
                    <p>Settings</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BiFlag className='text-xl' />
                    <p>Report history</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BiHelpCircle className='text-xl' />
                    <p>Help</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <BiFlag className='text-xl' />
                    <p>Report history</p>
                </li>
                <li className='flex gap-3 items-center justify-start'>
                    <MdFeedback className='text-xl' />
                    <p>Send Feedback</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar