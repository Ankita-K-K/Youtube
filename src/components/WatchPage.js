import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const comments = [
  {
    name: "Ankita",
    text: "Ankita is a great girl",
    replies: [
      {
        name: "Ankita",
        text: "Ankita is a great girl",
        replies:[
          {
            name: "Ankita",
            text: "Ankita is a great girl",
            replies: [
              {
                name: "Ankita",
                text: "Ankita is a great girl",
              }
            ]
          }
        ]
      },
      {
        name: "Ankita",
        text: "Ankita is a great girl",
        replies:[]
      }
    ]
  },{
    name: "Ankita",
    text: "Ankita is a great girl",
    replies: []
  },
  {
    name: "Ankita",
    text: "Ankita is a great girl",
    replies: [
      {
        name: "Ankita",
        text: "Ankita is a great girl",
        replies: [
      {
        name: "Ankita",
        text: "Ankita is a great girl",
        replies: []
      }
    ]
      }
    ]
  },
  {
    name: "Ankita",
    text: "Ankita is a great girl",
    replies: [
      {
        name: "Ankita",
        text: "Ankita is a great girl",
        replies: []
      },
      {
        name: "Ankita",
    text: "Ankita is a great girl",
    replies: []
      }
    ]
  },
  {
    name: "Ankita",
    text: "Ankita is a great girl",
    replies: [
      {
        name: "Ankita",
    text: "Ankita is a great girl",
    replies: [{
      name: "Ankita",
    text: "Ankita is a great girl",
    replies: []
    },{
      name: "Ankita",
    text: "Ankita is a great girl",
    replies: [{
      name: "Ankita",
    text: "Ankita is a great girl",
    replies: [{name: "Ankita",
      text: "Ankita is a great girl",
      replies: []}]
    }]
    }]
      }
    ]
  },
]

const Comment = ({info}) => {
  return (
    <div className='flex items-center gap-1 rounded-lg'>
      <img src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' alt='user' className='h-7'/>
      <div className='flex flex-col'>
        <p>{info.name}</p>
        <p>{info.text}</p>
      </div>
    </div>
  )
}

const CommentContainer = ({comment = []}) => {
  return(
    <div className='mt-4'>
      {
        comment.map((i, index) => {
          return(
            <div key={index} className='flex flex-col justify-start items-start'>
              <div>
                <Comment info={i} />
              </div>
              <div className='ml-6 border-l border-gray-500 pl-5'>
                <CommentContainer comment={i.replies} />
              </div>
            </div>
            
          )
        })
      }
    </div>
  )
}

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
  return (
    <div className='p-4 flex flex-col'>
        <iframe width="700" height="400" className="rounded-xl" src={"https://www.youtube.com/embed/"+ searchParams.get('v') +"?si=hK9upky3wPnBlf0G"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className='w-[43rem] p-5'>
          <h2 className='font-bold text-xl mt-1'>Comments: </h2>
          <div className='bg-gray-100 rounded-lg px-2'>
            <CommentContainer comment={comments} />
          </div>
        </div>
    </div>
  )
}

export default WatchPage