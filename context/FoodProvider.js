import {createContext, useEffect, useState} from "react"
import axios from "axios"

const FoodContext = createContext()

const FoodProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState({}) //this is the current active sidebar btn

    
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


    return (
    <FoodContext.Provider
        value={{
            categories,
            handleClickSidebarCategoryBtn,
            currentCategory,
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
