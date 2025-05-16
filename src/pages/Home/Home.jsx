import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_image from '../../assets/aladdin-cover.jpg'
import hero_title from '../../assets/kindpng_4212219.png'
import  play_icon from '../../assets/play-button.png'
import  info_icon from '../../assets/info (1).png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_image} alt="" className='banner-img'/>
            <div className="hero-caption">
                <img src={hero_title } alt="" width="250rem"className='caption-img' />
                <p> Aladdin is a magical adventure about a kind-hearted street urchin named Aladdin who lives in the bustling city of Agrabah. His life changes forever when he discovers a magical lamp containing a powerful and hilarious Genie who has the ability to grant three wishes. </p>
                <div className="hero-btns">
                   <button className='btn'><img src={play_icon} alt="" />Play</button>
                   <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
                </div>
                <TitleCards/> 
            </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/> 
        <TitleCards title={"Only on Netflix"} category={"popular"}/> 
        <TitleCards title={"Upcoming"} category={"upcoming"}/> 
        <TitleCards title={"Top picks for you"} category={"now_playing"}/> 
        </div>
        <Footer/>
    </div>
  )
}

export default Home