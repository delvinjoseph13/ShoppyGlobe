import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className='bg-blue-600 shadow-md py-4'>
            <nav className='flex justify-around'>
            <ul className='flex justify-center item-center gap-10 p-4'>
                <Link to='/'>
                <li className='text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300'>
                    Home
                </li>
                </Link>
                <Link to='/products'>
                <li className='text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300'>
                    Products Details
                </li>
                </Link>
                
                <Link to='checkout'>
                <li className='text-white font-medium text-lg px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition duration-300'>
                Checkout pages
                </li>
                </Link>

            </ul>
            <Link to='/cart'>
            <ShoppingCart className='mt-4 hover:cursor-pointer ' />

            </Link>
            </nav>
           
        </div>
    )
}

export default Header;