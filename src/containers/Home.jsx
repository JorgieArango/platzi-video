<<<<<<< HEAD
import React from 'react'

import '../assets/styles/App.scss'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import useInitialState from '../hooks/useInitialState'

const API= 'http://localhost:3000/initialState'

function Home(){
   
    const videos = useInitialState(API)

    return(
        <React.Fragment>
            <Header/>
            <Search/>
           
              {
                  Object.keys(videos).map((key, index)=>{
                    videos[key].length>0 &&    
                    <Categories key={index} name={key} data={videos[key]}/>    
                    }) 
              } 
               
            
        </React.Fragment>
        
    );
};

export default Home;
=======
import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/containers/Home.scss'
import Search from '../components/Search'
import Categories from '../components/Categories'


function Home(props){  
   
    console.log(props)
    return(
        <React.Fragment>
            <Search/>
            {/* <Categories  name="myList" data={props.categories.myList}/>  */}
            {/* <Categories  name="trends" data={props.categories.trends}/> 
            <Categories  name="originals" data={props.categories.originals}/>  */}
            {
                Object.keys(props.categories).map((key, index)=>{
                    
                    //console.log(props.categories[key])
                    if(props.categories[key].length ){
                        return <Categories key={index} name={key} data={props.categories[key]}/>
                    }
                   
                }) 
            }
        </React.Fragment>
        
    );
};
const mapStateToProps= state =>{
    return {
        categories: {
            myList: state.myList,
            trends: state.trends,
            originals: state.originals
        }
       
    }
}
//export default Home;
export default connect(mapStateToProps, null)(Home)
>>>>>>> redux-router
