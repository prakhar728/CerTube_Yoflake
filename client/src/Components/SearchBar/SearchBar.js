import React, { useState } from 'react'
import './SearchBar.css';
import axios from 'axios';
import { AiFillPlusSquare } from "react-icons/ai";
const SearchBar = () => {
  const [searchItem, setsearchItem] = useState('Enter Keyword To Search For');
  const [videos, setvideos] = useState([])

  const handleSearch = async () => {
    console.log('Searching');
    // const response = await youtube.get('/search',{
    //   params:{
    //     q:searchItem
    //   }
    // })
    // setvideos(response.data.items);
    axios({
      "method": "GET",
      "url": "https://www.googleapis.com/youtube/v3/search",
      "params": {
        'part': 'snippet',
        'maxResults': '3',
        'key': '',
        'q': searchItem,
        'type': 'playlist'
      }
    })
      .then(resp => {
        const videoArray = [];
        console.log(resp.data.items[0].id.playlistId);
        resp.data.items.forEach((item)=>{
          console.log(item.id.playlistId);
          videoArray.push(item.id.playlistId);
        })
        setvideos(videoArray);

      })
      .catch(err => {
        console.log(err);
      })
  }
  const addItemToLibrary = () =>{
    console.log('Item added');
  }
  return (
    <div className='searchContainer'>
      <div className='searchWrapper'>
        <div className='SearchHeader'>
          Search Your Vids
        </div>
        <div className='libraryText'>
          Find your videos to save them!
        </div>
        <div className='inputFieldContainerPlaylist'>
          <input placeholder='Search For your playlist' value={searchItem} onChange={e => setsearchItem(e.target.value)} /><button onClick={handleSearch}>Search</button>
        </div>
        <div className='searchResults'>
          {videos.map(item=>{
             <div className='searchResult'>
               <a href={`https://youtube.com/playlist?list=${item}`}>Link To Video</a>
               <AiFillPlusSquare onClick={addItemToLibrary}/></div>
          })}
         
        </div>
      </div>


    </div>
  )
}

export default SearchBar