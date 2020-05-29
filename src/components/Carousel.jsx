import React from 'reac'

import '../assets/styles/components/Carousel.scss'

const Carousel = (props)=>(
    <section className="carousel">
        <div className="carousel__container">
            {props.children}
        </div>
    </section>
)

export default Carousel 