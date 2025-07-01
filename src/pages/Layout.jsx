import {Link} from 'react-router-dom';
import Movies from './Movies';
const Layout = () => {
    return (
        <>
        <nav>

            <h1>React Router</h1>
            <ul>
                <li>
                    <Link to = "/Home">Home</Link>
                </li>
                <li>
                    <Link to = "/About">About</Link>
                </li>
                <li>
                    <Link to = "/Contact">Contact</Link>
                </li>
                <li>
                    <Link to = "/User/:id">User</Link>
                </li>
                <li>
                    <Link to = "/Movies">Movies</Link>
                </li>
                <li>
                    <Link to = "/Counter">Counter</Link>
                </li>
                <li>
                    <Link to = "/Auth">Auth</Link>
                </li>
                <li>
                    <Link to = "/Posts">Posts</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Layout;