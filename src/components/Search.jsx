import React from 'reac'

import '../assets/styles/components/Search.scss'

const Search = ()=>(
    <section className="main">
        <h2 className="main__title">What do you want to watch today?</h2>
        <input type="text" className="input" placeholder="Search..."/>
    </section>
)

export default Search