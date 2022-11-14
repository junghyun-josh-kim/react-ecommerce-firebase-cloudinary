import React from 'react';

export default function ProductCard({
  product: { id, image, title, price, category },
}) {
  return (
    <li>
      <img
        src={image}
        alt={title}
      />
      <div>
        <h3>{title}</h3>
        <p>{`CAD $ ${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
}
