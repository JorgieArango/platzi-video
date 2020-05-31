
import React from 'react'

import '../assets/styles/components/CarouselItem.scss'
import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'
import { connect } from 'react-redux'
import {setFavorite} from '../actions/index'

const CarouselItem = (props)=>{
    const {cover, title, year, contentRating, duration}=props
    const handleSetFavorite = ()=>{
        props.setFavorite(
            {
                cover,
                title,
                year,
                contentRating,
                duration
            }
        )
    }
        return (
    <div className="carousel-item">
        <img className="carousel-item__img" src={props.data.cover} alt={props.data.title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 
                <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon" onClick={handleSetFavorite}/> 
            </div>
            <p className="carousel-item__details--title">{props.data.title}</p>
            <p className="carousel-item__details--subtitle">{`${props.data.year} ${props.data.contentRating} ${props.data.duration}`}</p>
        </div>
    </div>
    )
}
const mapDispatchToProps = {
    setFavorite
}
export default connect(null, mapDispatchToProps)(CarouselItem)

