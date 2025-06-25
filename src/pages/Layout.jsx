import {Link} from 'react-router-dom';
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
            </ul>
        </nav>
        </>
    )
}

export default Layout;