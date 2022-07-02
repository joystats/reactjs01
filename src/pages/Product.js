import Layout from "../components/Layout"
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProduct } from "../actions"
import { useDispatch, useSelector } from 'react-redux'

const Product = ()=>{

    const dispatch = useDispatch()
    const post = useSelector((state)=>{
      return state.products?.post
    })

    const params = useParams()
    const [q] = useSearchParams()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getProduct(params.id))
    },[params.id, dispatch])

    const showProduct = ()=>{
        return <div>
            id: {post.id}<br/>
            title: {post.title}<br/>
            body: {post.body}<br/>
            <button type="button" onClick={()=>navigate('/products')}>Go back</button>
        </div>
    }

    return(
        <Layout>
            product page id: { params.id }<br/>
            query name: { q.get('name') }<br/>
            query email: { q.get('email') }
            <hr/>
            { post && showProduct() }
        </Layout>
    )
}

export default Product