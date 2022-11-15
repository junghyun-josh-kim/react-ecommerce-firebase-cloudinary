import React from 'react';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));
  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  const HST = totalPrice * 1.13 - totalPrice;

  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        My Cart
      </p>
      {!hasProducts && <p>Your cart is empty...</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 px-8'>
            {products &&
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  uid={uid}
                />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-6 px-2 md:p-8 lg:px-16'>
            <PriceCard
              text='Summary'
              price={totalPrice}
            />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard
              text='HST'
              price={HST}
            />
            <FaEquals className='shrink-0' />
            <PriceCard
              text='Total'
              price={totalPrice + HST}
            />
          </div>
          <Button text='Checkout' />
        </>
      )}
    </section>
  );
}
