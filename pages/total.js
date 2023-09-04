import Layout from "../layout/Layout"
import { formatMoney } from "../helpers"
import useFoodProvider from "../hooks/useFoodProvider";
import { useEffect, useState } from "react";

const Total = () => {


  const {productsIntoCart} = useFoodProvider();


  function placeOrder(e) {
    e.preventDefault();
    if (checkIfProductExist()){
      console.log("El pedido existe")
      return
    }
    console.log(doesProductExist)
  }

   function checkIfProductExist () {
    if (productsIntoCart.length>0){
      return true
    }
    return false
  }



  return (
    <Layout page={`Total y confirmación de tu pedido`}>
        <h1 className="text-4xl font-bold text-gray-700">Total y confirmación de tu pedido</h1>
        <p className="text-2xl mt-10 text-gray-700">Llena los siguientes datos</p>

        <form 
          className="mt-10"
          onSubmit={placeOrder}
          >
          <div className="flex flex-col gap-2 mt-10">
            <label
              htmlFor="userName"
              className="text-xl font-bold text-gray-700 uppercase"
              >{`Nombre`}
            </label>

            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="María, José, Carlitos :D"
              className="bg-gray-200 w-full lg:w-1/3 rounded-md text-xl font-bold"
            />
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <p className="text-4xl font-bold text-amber-500">{`Total a pagar: `}<span>{formatMoney(200)}</span></p>
          </div>

          <div className="mt-10">
            <input 
              type="submit"
              className={`bg-indigo-700 w-full lg:w-auto py-3 px-5 rounded uppercase text-slate-200 text-center font-bold text-2xl hover:bg-indigo-900 cursor-pointer ${!checkIfProductExist() && "bg-gray-400 hover:bg-gray-400 text-gray-500 cursor-not-allowed"}`}              value={`Confirmar Pedido`}
              disabled={ checkIfProductExist() ? false : true}
            />


              
          </div>

        </form>


    </Layout>
  )
}

export default Total
