import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { login, logOut, onUserStateChange } from '../api/firebase';

export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogOut = () => {
    logOut().then(setUser);
  };
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
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogOut}>Logout</button>}
      </nav>
    </header>
  );
}
