import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getVideos();
  }, [])
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API)
    const data = await res.json();
    setVideos(data.items)
    console.log(data.items);
  }
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  const className = isMenuOpen ? "flex flex-wrap justify-evenly gap-3 my-2 mx-1 w-[77%]" : "flex flex-wrap justify-evenly gap-3 my-4 mx-1"
  return (
    <div className={className}>
      {
        videos.map(video => { 
          return(
            videos && videos.length > 0 && <VideoCard key={video.id} info={video} />
        )})
      }
      
    </div>
  )
}

export default VideoContainer