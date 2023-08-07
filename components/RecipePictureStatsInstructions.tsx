import Ingredients from "./Ingredients"
import SecondaryOptions from "./SecondaryOptionsWithMenu"
import { Image, Box } from '@chakra-ui/react'

export default function RecipeStatsInstructions() {
    return (
        <div className='flex-col w-full h-full'>
            <div className='flex w-full h-1/3'>
                <div className='p-1 flex-col w-2/3 h-full'>
                    <div className="w-full h-full border border-black rounded bg-white">


                            <Image boxSize='100%'src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

                    </div>
                </div>

                <div className="p-1 flex flex-col justify-center w-1/3 h-full">
                    <div className="flex flex-col ps-2 w-full h-full justify-center border border-black rounded text-sm md:text-base">
                        <span> Difficulty: Beginner</span>
                        <span> Prep Time: 20min</span>
                        <span>Cook Time: 1h30</span>
                        <span>Duration: 1h50</span>
                    </div>
                </div>
            </div>

            <div className='w-full h-2/3 p-1'>
                <div className="w-full h-full overflow-auto border border-black rounded ps-2 pe-1 pt-1">
                    <div className="flex justify-between"><span className="text-lg">Ingredients:</span> <SecondaryOptions></SecondaryOptions></div>
                    <Ingredients></Ingredients>
                </div>
            </div>
        </div>
    )
}
