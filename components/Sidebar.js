import Image from "next/image"
import useFoodProvider from "../hooks/useFoodProvider"
import SidebarCategoryBtn from "./SidebarCategoryBtn";


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

        <nav className="mt-10">
            {categories.map (category => (
                <SidebarCategoryBtn 
                    key={category.id}
                    category={category}
                />
            ))}

        </nav>


      
    </>
  )
}

export default Sidebar
