import Head from "next/head"
import Image from "next/image"
import Layout from "../layout/Layout"
import useFoodProvider from "../hooks/useFoodProvider"
import ProductCard from "../components/ProductCard"

export default function Home() {

  const {currentCategory} = useFoodProvider()

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className="text-4xl text-gray-700 font-bold">{currentCategory?.name}</h1>
      <p className="text-2xl my-10 text-gray-700">{"Elija su pedido"}</p>

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