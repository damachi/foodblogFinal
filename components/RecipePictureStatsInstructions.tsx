import Ingredients from "./Ingredients"
import SecondaryOptions from "./SecondaryOptionsWithMenu"
import { Image, Box } from '@chakra-ui/react'

export default function RecipeStatsInstructions() {
    return (
        <div className='flex-col w-full h-full'>
            <div className='w-full h-full p-1'>
                <div className="w-full h-full overflow-auto border border-black rounded ps-2 pe-1 pt-1">
                    
                    <Ingredients></Ingredients>
                </div>
            </div>
        </div>
    )
}
