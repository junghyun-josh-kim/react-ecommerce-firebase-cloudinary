import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <h1>lululime</h1>
        <FiShoppingBag />
      </Link>

      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>My Carts</Link>
        <Link to='/products/new'>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
