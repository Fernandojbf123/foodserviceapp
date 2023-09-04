
const ButtonMinus = ({handleChangeQuantity}) => {
    return (
        <>  
        <button 
            type="button"
            className=" hover:bg-amber-500 rounded-full p-2 cursor-pointer"
            onClick={() => handleChangeQuantity(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        </>
    )
}

export default ButtonMinus
