const ProductReducer = (state={}, action)=>{
    switch(action.type){
        case 'GET_PRODUCSTS':
            return { ...state, posts: action.payload }
        case 'GET_PRODUCST':
            return { ...state, post: action.payload }
        default:
            return state
    }
}

export default ProductReducer