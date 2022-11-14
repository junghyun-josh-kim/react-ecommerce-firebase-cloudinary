import React from 'react';

export default function ProductCard({
  product: { id, image, title, price, category },
}) {
  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img
        className='w-full'
        src={image}
        alt={title}
      />
      <div className='mt-2 px-2 text-lg'>
        <h3 className='truncate'>{title}</h3>
        <p>{`CAD $ ${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
