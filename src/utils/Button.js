import React from 'react'

const Button = ({name}) => {
  return (
    <button className='flex-none w-max bg-zinc-400 px-2 rounded-md h-8'>{name}</button>
  )
}

export default Button