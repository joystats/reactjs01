import { Link } from 'react-router-dom'

const Header = ()=>{
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    )
}

export default Header;