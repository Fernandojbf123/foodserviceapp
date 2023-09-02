import {createContext, useEffect, useState} from "react"
import axios from "axios"

const FoodContext = createContext()

const FoodProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    
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


    return (
    <FoodContext.Provider
        value={{
            categories,
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
