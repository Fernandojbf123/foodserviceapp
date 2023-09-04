import Image from 'next/image';
import React from 'react'
import { formatMoney } from '../helpers';
import ButtonDelete from './ButtonDelete';
import useFoodProvider from '../hooks/useFoodProvider';

const ResumeProductCard = ({ product }) => {

  const { id, name, price, image, quantity } = product;
  const {handleClickAddProduct, handleProductModal } = useFoodProvider();

  return (
    <div className={`border p-3 hover:bg-amber-100 flex flex-row items-center gap-4`}>

      <div className='w-1/3'>
        <Image
          width={300}
          height={200}
          src={`/assets/img/${image}.jpg`}
          alt={name}
        />
      </div>

      <div className='w-1/3 [&>p]:text-2xl [&>p]:font-bold flex flex-col gap-2'>
        <h3 className="text-4xl font-bold text-gray-700">{name}</h3>
        <p>Cantidad: <span>{quantity}</span></p>
        <p className='text-gray-700'>Precio Unitario: <span>{formatMoney(price)}</span></p>

        <p className='text-amber-500 !text-3xl'>subtotal: <span>{formatMoney(price * quantity)}</span></p>
      </div>

      <div className="w-1/3 flex flex-col gap-4  items-center">

        <button
          type="button"
          className='w-full xl:w-1/2 uppercase text-white font-bold text-2xl p-3 bg-sky-600 hover:bg-sky-800  rounded-md shadow-md flex flex-row gap-2 justify-center items-center'
          onClick={() => {
            handleProductModal()
            handleClickAddProduct(product)
          }}

        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>

          Editar
        </button>

        <ButtonDelete
          product={product} />

      </div>
    </div>
  )
}

export default ResumeProductCard
