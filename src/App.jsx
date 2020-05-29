import React from 'react'

import './assets/styles/App.scss'
import Header from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import useInitialState from './hooks/useInitialState'

const API= 'http://localhost:3000/initialState'

function App(){
   
    const videos = useInitialState(API)

    return(
        <React.Fragment>
            <Header/>
            <Search/>
            {
               Object.keys(videos).map((key, index)=>{
                {videos[key].length>0 &&    
                <Categories key={index} name={key} data={videos[key]}/>}     
                }) 
            }
        </React.Fragment>
        
    );
};

export default App;