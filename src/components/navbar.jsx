import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark shadow-0'>
            <div className='container px-lg-5'>
                <Link className='navbar-brand'>فرادرس</Link>
            </div>
        </nav>
    );
}

export default Navbar;
