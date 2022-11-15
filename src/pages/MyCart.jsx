import React from 'react';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';

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
    <section>
      <p>My Cart</p>
      {!hasProducts && <p>Your cart is empty...</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  uid={uid}
                />
              ))}
          </ul>
          <div>
            <PriceCard
              text='Summary'
              price={totalPrice}
            />
            <BsFillPlusCircleFill />
            <PriceCard
              text='HST'
              price={HST}
            />
            <FaEquals />
            <PriceCard
              text='Total'
              price={totalPrice + HST}
            />
          </div>
        </>
      )}
    </section>
  );
}
