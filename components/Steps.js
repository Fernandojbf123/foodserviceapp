import { useRouter } from "next/router"
import { useState } from "react"

const steps = [
    {step: 1, name: "Menú", url: "/"},
    {step: 2, name: "Resumen", url: "/resume"},
    {step: 3, name: "Total", url: "/total"},
]

const Steps = () => {

    const router = useRouter();

    const [progress, setProgress] = useState(computeProgress())

    function computeProgress ( ) {

        if(router.pathname ==="/") {
            return 5
        }
        else if(router.pathname ==="/resume") {
            return 50
        }
        else {
            return 100
        }
    }

  return (
    <>
        <div className="flex justify-between mb-10">
            {steps.map ( step => (
                <button 
                    key={step.step}
                    className="text-4xl font-bold text-gray-700"
                    onClick={ () => {
                                    router.push(step.url)
                                    }
                    }
                >
                    {step.name}
                </button>
            ))}
        </div>

        <div className="bg-gray-200 mb-10">
            <div 
                className={"rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    
    </>
  )
}

export default Steps
