import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [showSearch, setShowSearch] = useState(false);    
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(toggleMenu());
    }
    useEffect(() => {
        const timer = setTimeout(() => search && getSearch(), 200)
        return () => {
            clearTimeout(timer)
        }
    }, [search])

    const getSearch = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API+search);
        const json = await data.json();
        setSearchList(json[1])        
    }
  return (
    <div className='shadow-lg h-11'>
        <div className='grid grid-flow-col place-content-between px-5 mt-3 mx-2'>
            <div className='h-8 col-span-1 flex gap-2 items-center justify-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RSFUCVDtI0_JiMDys4Yjth1nZUZARA8DMA&s' alt='menu' className='h-8 cursor-pointer' onClick={toggleHandler} />
                <img src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png' alt='youtube-logo' className='h-20 cursor-pointer'/>
            </div>
            <div>
                <div className='h-8 col-span-10 w-full flex items-center justify-center'>
                    <input type='text' placeholder='search' className='w-[35rem] border border-gray-400 rounded-l-full p-2' onChange={(e) => setSearch(e.target.value)} value={search} onFocus={() => setShowSearch(true)} onBlur={() => setShowSearch(false)}/>
                    <button className='p-2 border border-gray-400 rounded-r-full bg-gray-300'><img src='https://img.icons8.com/ios7/600/search.png' alt='search-button' className='h-6' /></button>
                </div>
                {search && searchList.length > 0 && showSearch && <div className='fixed bg-white rounded-lg w-[35rem] shadow-sm mt-2 p-5'>
                    <ul className='flex flex-col gap-2'>
                        {
                            searchList.map(s => <div className='flex gap-3 justify-center items-center'>
                                <img src='https://img.icons8.com/ios7/600/search.png' alt='search button' className='h-4'/>
                                <li className='hover:bg-gray-100 py-0.5 px-3 rounded-xl cursor-default w-full'>{s}</li>
                            </div>)
                        }
                    </ul>
                </div>}
            </div>
           
            <div className='col-span-1 h-8'>
                <img src='https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png' alt='profile' className='h-8'/>
            </div>
        </div>
    </div>
    
  )
}

export default Header