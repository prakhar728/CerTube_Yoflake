import React from 'react'
import './Library.css';
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Library = () => {
  let navigate = useNavigate();
  const navigateTosearch = () =>{
    navigate('/searchVideo')
  }
  return (
    <div className='libraryContainer'>
      <div className='libraryWrapper'>
        <BsSearch className='iconSearch'onClick={navigateTosearch}/>
        <div className='libaryHeader'>
          Library
        </div>
        <div className='libraryText'>
          You saved them for a reason! All the Best!
        </div>
        <div className='playListcontainer'>
          <a href="https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ" className='YoutubeVid'>Flutter</a>
          <a className='YoutubeVid' href="https://youtube.com/playlist?list=PLG9aCp4uE-s2HRvW-fSs2E4hk07xWTGYB" >Data Science and Management</a>
          
        </div>
      </div>

    </div>
  )
}

export default Library