import React from 'react'

import '../assets/styles/components/Categories.scss'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

const Categories = (props)=>(
    <div className="categories">
        <h3 className="categories__title">{props.name}</h3>
        <Carousel>
            {
                props.data.map(item=> 
                    <CarouselItem key={item.id} data={item}/>)
            }
        </Carousel>
    </div>

);

export default Categories

