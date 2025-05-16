import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
// import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title,category}) => {

  const [apiData,setApiData] = useState([])
  const cardsRef = useRef(); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGNlZDRjYTkzZGI0OWMyYTQ4ZmZjYzU5ZTFjYjY5ZSIsIm5iZiI6MS43NDczNjQ4NzU4MDA5OTk5ZSs5LCJzdWIiOiI2ODI2YWMwYjY4NzM2YTIzODM0YjU4ZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.D4EiUsb7UucGYJOwmjL-WikDJ1ipShypTeQp3fTEHBA'
    }
  };
  
 

  const handlewheel= (event)=>{
    event.preventDefault;
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel',handlewheel)
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards