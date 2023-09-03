import Head from "next/head"
import Image from "next/image"
import Layout from "../layout/Layout"
import useFoodProvider from "../hooks/useFoodProvider"
import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"

export default function Home() {

  const {currentCategory} = useFoodProvider()
  
  const messages = ["Elija su pedido","Los productos que están en su carrito están resaltados en amarillo"]
  const [currentMessage, setCurrentMessage] = useState(messages[0])
  const [idx, setIdx] = useState(0);

  useEffect ( () => {
    let timerID = setInterval ( ()=> {
      if(idx === 0){
        setCurrentMessage(messages[1])
        setIdx(1)
        return
      }
      setCurrentMessage(messages[0])
      setIdx(0)
    },[5000])
    clearInterval(timerID)
  },[idx])

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className="text-4xl text-gray-700 font-bold">{currentCategory?.name}</h1>
      <p className="text-2xl my-10 text-gray-700">{currentMessage}</p>

      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4 2xl:xl-grid-cols-5">
        {currentCategory?.products?.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Layout>
  )
}