import Layout from "../layout/Layout"
import { formatMoney } from "../helpers"
import useFoodProvider from "../hooks/useFoodProvider";
import { useCallback, useEffect, useState } from "react";

const Total = () => {


  const {productsIntoCart, clientName, setClientName, placeOrder, total} = useFoodProvider();
  const [canProceedPayment, setCanProceedPayment] = useState(false)
  const [message,setMessage] = useState("Debes tener al menos un producto y un nombre antes de confirmar el pedido")

  
  const checkCanProceedPayment = useCallback ( () => {
    return (productsIntoCart.length === 0 || clientName === "" || clientName.length<3)
  },[clientName, productsIntoCart])

  useEffect (() => {
    if (checkCanProceedPayment()){
      setCanProceedPayment(false)
      setMessage("Debes tener al menos un producto y un nombre antes de confirmar el pedido")
      return
    }
    setCanProceedPayment(true)
    setMessage("Puedes confirmar")

  },[checkCanProceedPayment])

  


  return (
    <Layout page={`Total y confirmación de tu pedido`}>
        <h1 className="text-4xl font-bold text-gray-700">Total y confirmación de tu pedido</h1>
        <p className="text-2xl mt-10 text-gray-700">{message}</p>

        <form 
          className="mt-10"
          onSubmit={placeOrder}
          >
          <div className="flex flex-col gap-2 mt-10">
            <label
              htmlFor="clientName"
              className="text-xl font-bold text-gray-700 uppercase"
              >{`Nombre`}
            </label>

            <input
              id="clientName"
              name="clientName"
              type="text"
              placeholder="María, José, Carlitos :D"
              className="bg-gray-200 w-full lg:w-1/3 rounded-md text-2xl font-bold"
              value={clientName}
              onChange={ (e) => {
                                setClientName(e.target.value)
                                
              }}
            />
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <p className="text-4xl font-bold text-amber-500">{`Total a pagar: `}<span>{formatMoney(total)}</span></p>
          </div>

          <div className="mt-10">
            <input 
              type="submit"
              className={`bg-indigo-700 w-full lg:w-auto py-3 px-5 rounded uppercase text-slate-200 text-center font-bold text-2xl hover:bg-indigo-900 cursor-pointer ${!canProceedPayment && "bg-gray-400 hover:bg-gray-400 text-gray-500 cursor-not-allowed"}`}              value={`Confirmar Pedido`}
              disabled={ canProceedPayment ? false : true}
            />


              
          </div>

        </form>


    </Layout>
  )
}

export default Total
