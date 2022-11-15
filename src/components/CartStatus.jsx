import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className='relative'>
      <FiShoppingBag className='text-2xl' />
      {products && (
        <p className='w-5 h-5 text-sm text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
