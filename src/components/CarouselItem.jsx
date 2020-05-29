import React from 'react'

import '../assets/styles/components/CarouselItem.scss'
import PlayIcon from '../assets/staticp/lay-icon.png'
import PlusIcon from '../assets/staticp/plus-icon.png'

const CarouselItem = (props)=>(
    <div className="carousel-item">
        <img className="carousel-item__img" src={props.data.cover} alt={props.data.title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon"/> 
                <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon"/> 
            </div>
            <p className="carousel-item__details--title">{props.data.title}</p>
            <p className="carousel-item__details--subtitle">{`${props.data.year} ${props.data.contentRating} ${props.data.duration}`}</p>
        </div>
    </div>
)

export default CarouselItem