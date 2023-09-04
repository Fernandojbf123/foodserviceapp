import {createContext, useEffect, useState} from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const FoodContext = createContext()

const FoodProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({}) //this is the current active sidebar btn
    const [selectedProduct, setSelectedProduct] = useState({}) //when add to cart button is pressed
    const [isSelectedProductModalActive, setIsSelectedProductModalActive] = useState(false);
    const [productsIntoCart, setProductsIntoCart] = useState([]);
    const router = useRouter();

    
    async function fetchCategories () {
        const url = "/api/categories"
        try {
            const {data} = await axios(url)
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect (( ) => {
        fetchCategories()
    },[])

    useEffect ( ()=> {
        setCurrentCategory(categories[0])
    },[categories])

    function handleClickSidebarCategoryBtn (id) {
        const tmpCategory = categories.filter( category => category.id === id)
        setCurrentCategory(tmpCategory[0])
        router.push("/")
    }

    function handleClickAddProduct (product) {
        //When click button AGREGAR of Product Card
        setSelectedProduct(product)
    }

    function handleProductModal () {
        setIsSelectedProductModalActive(!isSelectedProductModalActive)
    }

    function handleAddToCart ( product ) {

        try {

            if( productsIntoCart.some( iProductIntoCart => iProductIntoCart.id === product.id) && product.quantity>0) {
                //Update if the product exist and the new product quantity is > 0
                updatedProductOfTheCart (product)
            }
            else if ( product.quantity === 0){
                //Delete if the product exist and the new product quantity is === 0
                deleteProductOfTheCart(product)
            }
            else{
                //new product, i will add product
                setProductsIntoCart([...productsIntoCart, product])
                toast.success("Agregado al pedido")
            }

        } catch (error) {
            console.log(error)
            toast.error("No se pudo hacer su petición")
        }
    }

    function updatedProductOfTheCart ( product) {
        let updatedProductsIntoCart = productsIntoCart.map ( iProductIntoCart => 
            {if (iProductIntoCart.id === product.id) {
                return product
            }
            else {
                return iProductIntoCart
            }  
        })
        toast.success("Cantidad del producto modificada correctamente")
        return setProductsIntoCart(updatedProductsIntoCart) 
    }

    function deleteProductOfTheCart ( product ) {
        
        let updatedProductsIntoCart = productsIntoCart.filter ( iProductIntoCart => {
            if (iProductIntoCart.id != product.id ) {
                return iProductIntoCart
            }
        })
        toast.success("Producto eliminado del pedido")
        return setProductsIntoCart(updatedProductsIntoCart)
    }

    return (
    <FoodContext.Provider
        value={{
            categories,
            handleClickSidebarCategoryBtn,
            currentCategory,
            handleClickAddProduct,
            handleProductModal,
            isSelectedProductModalActive,
            selectedProduct,
            handleAddToCart,
            productsIntoCart,
            deleteProductOfTheCart,
        }}
    >
        {children}
    </FoodContext.Provider> 
  )
}

export {
    FoodProvider
}

export default FoodContext
