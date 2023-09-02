import Image from "next/image";
import useFoodProvider from "../hooks/useFoodProvider";

const SidebarCategoryBtn = ({category}) => {

  const {name, icon, id} = category;
  const {handleClickSidebarCategoryBtn, currentCategory} = useFoodProvider();


  return (
    <button 
        type="button"
        className={`p-5 flex flex-row items-center gap-4 border w-full hover:bg-amber-400 ${id===currentCategory?.id ? "bg-amber-400" : ""}`}
        onClick={() => handleClickSidebarCategoryBtn(id)}    
    >
      <Image 
            width={70}
            height={70}
            src={`/assets/img/icono_${icon}.svg`}
            alt={name}
        />
       
        <span className="text-2xl font-bold">{name}</span>

    </button>
  )
}

export default SidebarCategoryBtn
