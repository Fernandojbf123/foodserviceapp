import Image from "next/image"

const CategorySidebarCard = ({category}) => {

    const {id, name, icon} = category;

  return (
    <div className="">
      <Image 
            width={70}
            height={70}
            src={`/assets/img/icono_${icon}.svg`}
            alt={name}
        />


    </div>
  )
}

export default CategorySidebarCard
