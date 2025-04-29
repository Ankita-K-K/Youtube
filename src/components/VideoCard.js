import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics } = info;
    const {channelTitle, thumbnails, localized, title, publishedAt} = snippet;
    const {viewCount} = statistics;
  return (
    <div className='flex flex-col gap-2 w-[16rem] shadow-lg rounded-lg overflow-hidden'>
        <img src={thumbnails.medium.url} alt={title} className='overflow-hidden h-22'/>
        <div className='flex flex-col px-2'>
            <p className='font-semibold line-clamp-2 h-15'>{localized.title}</p>
            <p>{channelTitle}</p>
        </div>
        <div className='flex gap-3 pb-2 px-2'>
            <p>{viewCount} •views</p>
            <p>{new Date(publishedAt).getFullYear()}</p>
        </div>
    </div>
  )
}

export default VideoCard