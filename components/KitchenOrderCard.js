import Image from "next/image"
import { formatMoney } from "../helpers"
import axios from "axios"
import {toast} from "react-toastify"

const KitchenOrderCard = ({order}) => {

    const {id, clientName, order: clientOrder, status, total} = order

    async function handleOrderCompleted (e) {
        const url = `/api/orders/${id}`
        try {
            const data = await axios.post(url)
            toast.success("Orden completada")
        } catch (error) {
            console.log(error)
            toast.error("No se pudo enviar su solicitud")
        }
    }

  return (
    <div className="border pt-5 px-5 pb-2">
        <h3 className="text-2xl font-bold text-gray-700">{`Orden Nº: ${id}`}</h3>
        <p className="text-lg font-bold text-gray-700">{`Cliente: ${clientName}`}</p>
        
        <div>
            {clientOrder.map( dish => (
                <div 
                    key={dish.id}
                    className="flex flex-row items-center border-b-2 last-of-type:border-0 mt-2"
                >
                    <div className="w-32 my-2">
                        <Image 
                            width={100}
                            height={100}
                            src={`/assets/img/${dish.image}.jpg`}
                            alt={dish.name}/>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-2xl font-bold text-gray-700">{dish.name}</h4>
                        <p className="text-lg font-bold text-gray-700">{`Cantidad: ${dish.quantity}`}</p>
                        <p className="text-lg font-bold text-gray-700">{`Precio Unitario: ${formatMoney(dish.price)}`}</p>
                        <p className="text-2xl font-bold text-amber-400">{`Sub total: ${formatMoney(dish.subTotal)}`}</p>
                    </div>
                </div>
            ))}


            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 text-3xl font-black text-amber-400">{`Total a pagar: ${formatMoney(order.total)}`}</p>
                <button 
                    className="py-3 px-10 uppercase font-bold text-white rounded-md bg-indigo-600 hover:bg-indigo-800"
                    type="button"
                    onClick={handleOrderCompleted}
                >{`Completar orden`}</button>
            </div>
        </div>

    </div>
  )
}

export default KitchenOrderCard
