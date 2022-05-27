const INTIAL_STATE = {
    data: [],
    name: 'Saqib Ali'
}


export default (state = INTIAL_STATE,action)=>{
    switch(action.type){
        case 'SETDATA':
            return({
                ...state,
                data:[...state.data,action.payload]
            })
    }
    
    
    return state
}