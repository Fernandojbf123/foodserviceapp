import Image from "next/image"
import {formatMoney} from "../helpers"
import useFoodProvider from "../hooks/useFoodProvider";
import { useState, useEffect } from "react";

const ProductCard = ({product}) => {

    const {id, name, image, price } = product;
    const {handleClickAddProduct, handleProductModal, productsIntoCart, selectedProduct} = useFoodProvider();
    const [doesProductExist, setDoesProductExist] = useState(false)
    const [quantity, setQuantity] = useState(0)
    


    useEffect (()=> {
        //check if this product is in the cart, if true set quantity to the current number of this product in the cart
        if (productsIntoCart?.some (iProductIntoCart => iProductIntoCart.id === id)){
            let filteredProduct = productsIntoCart.filter(iProductIntoCart => iProductIntoCart.id === id)
            setDoesProductExist(true)
            setQuantity(filteredProduct[0].quantity)
        }
    },[id,productsIntoCart])

    return (
        <div className={`border p-3 hover:bg-amber-100 ${doesProductExist ? "bg-amber-100" : ""}`}>
            <Image
                width={500}
                height={400}
                src={`/assets/img/${image}.jpg`}
                alt={name}
            />

            <div>
                <h3 className="text-xl font-bold text-gray-700">{name}</h3>
                <div className="flex justify-between items-center">
                    <p className="mt-5 font-bold text-4xl text-amber-500">{formatMoney(price)}</p>
                    <span>Cantidad: {quantity}</span>
                </div>
                
                <button 
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-gray-100 font-bold uppercase p-3 w-full mt-3"
                    onClick={ () => {
                                    handleProductModal()
                                    handleClickAddProduct(product)
                    }}
                >Agregar
                </button>
            </div>
        </div>
    )
}

export default ProductCard
