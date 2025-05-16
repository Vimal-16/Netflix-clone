import React, { useEffect, useState } from 'react'
import './Player.css'
import back_button from '../../assets/back-button.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}= useParams();
  const navigate= useNavigate();

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGNlZDRjYTkzZGI0OWMyYTQ4ZmZjYzU5ZTFjYjY5ZSIsIm5iZiI6MS43NDczNjQ4NzU4MDA5OTk5ZSs5LCJzdWIiOiI2ODI2YWMwYjY4NzM2YTIzODM0YjU4ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D4EiUsb7UucGYJOwmjL-WikDJ1ipShypTeQp3fTEHBA'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  
  return (
    <div className='player'>
      <img src={back_button} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player