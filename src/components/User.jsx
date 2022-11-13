import React from 'react';

export default function User({ user: { displayName } }) {
  return (
    <div>
      <span>Welcome!</span>
      <span className='hidden md:block'> {displayName} </span>
    </div>
  );
}
