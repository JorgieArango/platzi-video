const reducer = (state, action)=>{
    switch(action.type){
        case 'SET_FAVORITE':
            return {
                ...state,
                mylist:[...state.myList, action.payload]
            }
        default:
            return state
    }
}

export default reducer