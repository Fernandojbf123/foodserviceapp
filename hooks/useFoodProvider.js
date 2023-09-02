import { useContext } from "react"
import FoodContext from "../context/FoodProvider"

const useFoodProvider = () => {
  return useContext(FoodContext)
}

export default useFoodProvider
