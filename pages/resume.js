import { useEffect } from "react";
import ResumeProductCard from "../components/ResumeProductCard";
import useFoodProvider from "../hooks/useFoodProvider"
import Layout from "../layout/Layout"


const Resume = () => {

    const {productsIntoCart} = useFoodProvider();

    return (
        <Layout page={`Resumen`}>
            <h1 className="text-4xl font-bold text-gray-700">{`Resumen`}</h1>
            <p className="text-2xl mt-10 text-gray-700">{`Revisa tu pedido`}</p>

            <div>

                {productsIntoCart.map(productIntoCart => (
                    <ResumeProductCard
                        key={productIntoCart.id}
                        product = {productIntoCart}
                    />
                ))}
            </div>

        </Layout>

    )
}

export default Resume
