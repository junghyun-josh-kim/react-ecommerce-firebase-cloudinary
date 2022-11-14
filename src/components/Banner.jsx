import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { AiOutlineRightCircle } from 'react-icons/ai';

export default function Banner() {
  return (
    <section className='mb-6'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='h-96 relative'>
            <img
              className='w-full'
              src={require('../images/banner1.jpeg')}
              alt='banner1'
            />
            <div className='absolute top-32 w-full text-center text-white'>
              <h2 className='text-6xl font-bold p-1 flex justify-center'>
                Shop with Us
                <AiOutlineRightCircle />
              </h2>

              <p className='text-2xl font-bold p-2'>Best Quailty</p>
              <p className='text-2xl font-bold p-2 yellow'>Product of Canada</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='h-96 relative'>
            <img
              className='w-full'
              src={require('../images/banner1.jpeg')}
              alt='banner1'
            />
            <div className='absolute top-32 w-full text-center text-white'>
              <h2 className='text-6xl font-bold p-1 flex justify-center'>
                Shop with Us
                <AiOutlineRightCircle />
              </h2>

              <p className='text-2xl font-bold p-2'>Best Quailty</p>
              <p className='text-2xl font-bold p-2 yellow'>Product of Canada</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='h-96 relative'>
            <img
              className='w-full'
              src={require('../images/banner1.jpeg')}
              alt='banner1'
            />
            <div className='absolute top-32 w-full text-center text-white'>
              <h2 className='text-6xl font-bold p-1 flex justify-center'>
                Shop with Us
                <AiOutlineRightCircle />
              </h2>

              <p className='text-2xl font-bold p-2'>Best Quailty</p>
              <p className='text-2xl font-bold p-2 yellow'>Product of Canada</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
