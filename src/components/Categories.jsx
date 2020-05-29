import React from 'react'

import '../assets/styles/components/Categories.scss'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

const Categories = (props)=>(
    

    <div className="categories">
        <h3 className="categories__title">{props.name}</h3>
        <Carousel>
            { 
                props.data.map(item=> {
                    return props.data.length>0 && <CarouselItem key={item.id} data={item}/>
                    // if(props.data.length){
                    //     return <CarouselItem key={item.id} data={item}/>
                    // }
                })
            }
        </Carousel>
    </div>

);

export default Categories

