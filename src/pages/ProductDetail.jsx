import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addOrUpdateToCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';

export default function ProductDetail() {
  const {
    user: { uid },
  } = useAuthContext();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };

  return (
    <section>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex justify-center flex-col md:flex-row p-4 '>
        <img
          className='w-85 px-4 basis-7/12'
          src={image}
          alt={title}
        />
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2 '>{title}</h2>
          <p className='text-md font-bold py-2 border-b border-gray-400'>
            CAD ${price}
          </p>
          <p className='py-4 text-sm'>{description}</p>
          <div className='flex items-center'>
            <label
              className='font-bold'
              htmlFor='select'
            >
              Size :{' '}
            </label>
            <select
              className='p-2 m-4 flex-1 border-2 border-dashed border-gray-500 outline-none'
              id='select'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button
            text='Add Cart'
            onClick={handleClick}
          />
        </div>
      </section>
    </section>
  );
}
