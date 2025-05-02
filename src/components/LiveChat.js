import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/chatHelper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
    const dispatch = useDispatch();
const message = useSelector(store => store.chat.message)
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(20)
      }))
    }, 200)
    return () => clearInterval(i);
    
  }, [])
  return (
    <div>
        <div className='flex flex-col-reverse scrollbar-hidden'>
            {
                message.map((m, index) => {
                    return (
                        <ChatMessage name={m.name} message={m.message} key={index}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LiveChat