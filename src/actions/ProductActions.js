import axios from 'axios'

const getProducts = ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    /*
    axios.get(url)
    .then((res)=>{
        console.log(res.data)
    })*/
    return (dispatch)=>{
        axios.get(url)
        .then((res)=>{
            dispatch({
                type: 'GET_PRODUCSTS',
                payload: res.data
            })
        })
    }
}


const getProduct = (id)=>{
    const url = "https://jsonplaceholder.typicode.com/posts/"+id
    return (dispatch)=>{
        axios.get(url)
        .then((res)=>{
            dispatch({
                type: 'GET_PRODUCST',
                payload: res.data
            })
        })
    }
}

export { 
    getProducts, getProduct
 }
