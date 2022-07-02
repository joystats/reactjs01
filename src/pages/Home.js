import Layout from '../components/Layout'
import { useState } from 'react'
import Counter from '../components/Counter'
import { getProducts } from '../actions'
import { useDispatch } from 'react-redux'

const Home = ()=>{

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(100)
    const [name] = useState("somchai")
     
    const add = ()=>{
        setCounter(counter+1)
    }
    const del = ()=>{
        setCounter(counter-1)
    }

    return(
        <Layout>
            Home page Hello { name }
            <br/>
            <Counter xxx={counter}/>
            <br/>
            <button type="button" onClick={add}>Add</button>
            <button type="button" onClick={del}>Delete</button>
            <br/>
            <br/>
            <button type="button" onClick={()=>dispatch(getProducts())}>Get Products</button>
        </Layout>
    )
}

export default Home