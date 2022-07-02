import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Products = ()=>{
    /*
    state = {
        products
    }
    state.products
    */
    const posts = useSelector((state)=>{
        return state.products?.posts
    })

    const listProducts = ()=>{
        return posts && posts.map((item, index)=>{
            return <li key={index}>{item.id} <Link to={`/product/${item.id}`}>{item.title}</Link></li>
        })
    }

    return(
        <Layout>
            Products page
            <hr/>
            { listProducts() }
        </Layout>
    )
}

export default Products