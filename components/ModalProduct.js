import Image from "next/image"
import useFoodProvider from "../hooks/useFoodProvider"
import {formatMoney} from "../helpers"
import {useEffect, useState} from "react"
import ButtonMinus from "./ButtonMinus"
import ButtonPlus from "./ButtonPlus"


const ModalProduct = () => {

    const { selectedProduct, handleProductModal, handleAddToCart, productsIntoCart } = useFoodProvider()
    const { id, name, price, image } = selectedProduct;
    const [quantity, setQuantity] = useState(0);
    const [doesProductExist, setDoesProductExist] = useState(false)
    const [buttonText, setButtonText] = useState("Agregar al carrito")

    function handleChangeQuantity(value) {
        setQuantity(() => Math.max(0, quantity + value))
    }

    useEffect (()=> {
        //check if this product is in the cart, if true set quantity to the current number of this product in the cart
        if (productsIntoCart.some (iProductIntoCart => iProductIntoCart.id === id)){
            let filteredProduct = productsIntoCart.filter(iProductIntoCart => iProductIntoCart.id === id)
            setQuantity(filteredProduct[0].quantity)
            setDoesProductExist(true)
        }
    },[id,productsIntoCart])

    useEffect ( () => {
        if(doesProductExist && quantity===0) {
            setButtonText("Quitar del carrito")
            return
        }
        else if (doesProductExist && quantity!=0) {
            setButtonText("Actualizar cantidad")
        }
    },[quantity, doesProductExist])

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={500}
                    height={400}
                    src={`/assets/img/${image}.jpg`}
                    alt={name}
                />
            </div>

            <div className="md:w-2/3">
                <div className="absolute top-0 right-0">
                    <button
                        type="button"
                        className=" hover:bg-amber-500 rounded-full p-2 cursor-pointer"
                        onClick={() => handleProductModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-5">{name}</h1>
                <p className="text-5xl font-bold mt-5 text-amber-500">{formatMoney(price)}</p>


                <div className="flex mt-5 gap-4">
                    <ButtonMinus
                        handleChangeQuantity={handleChangeQuantity}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <p>Cant. ordenada:</p>
                        <p className="text-3xl font-bold">{quantity}</p>
                    </div>
                    

                    <ButtonPlus
                        handleChangeQuantity={handleChangeQuantity}
                    />
                </div>


                <div className="flex mt-5 gap-4">
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-gray-100 font-bold uppercase p-3 mt-3 rounded"
                        onClick={() => {
                            handleAddToCart({...selectedProduct, quantity})
                            handleProductModal()
                        }}
                    >{buttonText}
                    </button>

                </div>


            </div>

        </div>
    )
}

export default ModalProduct
