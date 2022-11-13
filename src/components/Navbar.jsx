import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link
        to='/'
        className='flex items-center text-4xl text-brand'
      >
        <FiShoppingBag />
        <h1>lululime</h1>
      </Link>

      <nav className='flex items-center gap-8 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>My Carts</Link>
        <Link
          to='/products/new'
          className='text-xl'
        >
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
