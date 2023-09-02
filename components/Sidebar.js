import Image from "next/image"
import useFoodProvider from "../hooks/useFoodProvider"
import CategorySidebarCard from "./categorySidebarCard";


const Sidebar = () => {
  
    const {categories} = useFoodProvider();
  

    return (


    <>
        <Image 
            width={100}
            height={100}
            src="/assets/img/logo.svg"
            alt="logo"
        />

        <nav className="mt-5">
            {categories.map (category => (
                <CategorySidebarCard 
                    key={category.id}
                    category={category}
                />
            ))}

        </nav>


      
    </>
  )
}

export default Sidebar
