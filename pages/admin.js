import useSWR from "swr"
import AdminLayout from "../layout/AdminLayout" 
import Spinner from "../components/Spinner"
import axios from "axios"
import KitchenOrderCard from "../components/KitchenOrderCard"

const Admin = () => {
  
    const url = "/api/kitchenorders"
    async function fetcher () {
        try {
            const {data} = await axios.get(url)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const {data: orders, error, isLoading} = useSWR(url, fetcher, {refreshInterval: 100})
    console.log(orders)


    return (

    <AdminLayout page={"Kitchen"}>
        
        <h1 className="text-4xl font-bold text-gray-700">{`Panel de control de cocina`}</h1>
        <p className="text-2xl mt-10 text-gray-700">{`Marca las órdenes como completadas`}</p>
        
        {isLoading ? (
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-4xl text-gray-700 font-bold">LOADING</h1>
                <Spinner /> 
            </div>
        ):(
            
            orders.length>0 ? (
                orders.map( order => 
                    <KitchenOrderCard 
                        key={order.id}
                        order={order}
                    />
                )
            ):(
            <p>{`No hay ordenes pendientes`}</p>
            )
        )}

    </AdminLayout>
  )
}

export default Admin
