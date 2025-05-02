import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div>
        <div className='flex gap-5'>
            <p className='font-[500]'>{name}</p>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage