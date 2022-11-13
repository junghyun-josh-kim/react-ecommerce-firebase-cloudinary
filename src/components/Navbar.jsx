import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <h1>lululime</h1>
      </Link>
    </header>
  );
}
