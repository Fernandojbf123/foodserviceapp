import {createContext, useEffect, useState} from "react"
import axios from "axios"
import { toast } from "react-toastify"

const FoodContext = createContext()

const FoodProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({}) //this is the current active sidebar btn
    const [selectedProduct, setSelectedProduct] = useState({}) //when add to cart button is pressed
    const [isSelectedProductModalActive, setIsSelectedProductModalActive] = useState(false);
    const [productsIntoCart, setProductsIntoCart] = useState([]);

    
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
    }

    function handleClickAddProduct (product) {
        //When click button AGREGAR of Product Card
        setSelectedProduct(product)
    }

    function handleProductModal () {
        setIsSelectedProductModalActive(!isSelectedProductModalActive)
    }

    function handleAddToCart ( product ) {

        if( productsIntoCart.some( iProductIntoCart => iProductIntoCart.id === product.id) ) {
            //The product exist, so I will update
            let updatedProductsIntoCart = productsIntoCart.map ( iProductIntoCart => 
                {if (iProductIntoCart.id === product.id) {
                    return product
                }
                else {
                    return iProductIntoCart
                }  
            })
            setProductsIntoCart(checkQuantitiesOfProductsIntoCartGreaterThanZero(updatedProductsIntoCart))
            toast.success("Modificado correctamente")
        }
        else{
            //new product, i will add product
            setProductsIntoCart([...productsIntoCart, product])
            toast.success("Agregado al pedido")
        }
    }

    function checkQuantitiesOfProductsIntoCartGreaterThanZero (productsIntoCart) {
        let updatedProductsIntoCart = productsIntoCart.filter ( iProductIntoCart => {
            if (iProductIntoCart.quantity > 0 ) {
                return iProductIntoCart
            }
        })
        return updatedProductsIntoCart
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
