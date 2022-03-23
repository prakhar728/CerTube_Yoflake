import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import { MdOutlineOpenInNew } from "react-icons/md";
import { useAuth } from '../../Context/AuthContext';
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setname] = useState('Name');
  const [Email, setEmail] = useState('Email');
  const [certificates, setcertificates] = useState([]);
  const [reloadBool, setreloadBool] = useState(false)
  const { currentUser } = useAuth();
  useEffect(() => {
    if(currentUser)
   { axios.post('http://localhost:5001/getUserFromId',{
      uid:currentUser.uid
    })
    .then(Response=>{
      console.log(Response.data);
      if(Response.data.name)
      setname(Response.data.name);
      setEmail(Response.data.email);
      if(Response.data.certificates){
        setcertificates(Response.data.certificates);
        console.log('Certificates',Response.data.certificates);
      }
      
    })    
    .catch(err=>{
      console.log(err);
    })}
  }, [currentUser,reloadBool]);
  
  const updateName =() =>{
    console.log(name);
    axios.post('http://localhost:5001/getUserFromId/changeName',{
      uid:currentUser.uid,
      name:name
    } ).
    then(resp=>{
      console.log(resp);
      setreloadBool(!reloadBool);
    }).catch(err=>{
      console.log(err);
    })
  }

  
  return (
    <div className='dashboardContainer'>
      <div className='dashboardWrapper'>
        <div className='linkContainer'><a href='/library' className='myPlaylistLink'>My Playlist</a></div>
        <div className='textDashboard'>
          Your Profile
        </div>
        <div className='pfpIconHolder'>
          <div className='pfp'>
          </div>
        </div>

        <div className='detailHolder'>
          <div className='inputHolderName'><input value={name} onChange={(e) => setname(e.target.value)} className='pfpnameHolder' /> <AiOutlineCloudUpload className='iconUsed' onClick={updateName} /></div>
          <div className='pfpEmailHolder'>{Email}</div>
        </div>
        <div className='certificateHolder'>
          <div className='certificateHeader'>MY CERTIFICATES</div>
          <div className='certificates'>
            {certificates.map(urlC=>{
              <div className='certificate'>{`Certifcate `}  <div onClick={()=>{
                navigate(`${urlC}`)
              }}><MdOutlineOpenInNew /></div></div>
            })}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard