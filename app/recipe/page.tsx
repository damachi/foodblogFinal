"use client"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image } from '@chakra-ui/react'
import RecipeStatsInstructions from '@/components/RecipePictureStatsInstructions';
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'

import Instructions from '@/components/Instructions';
import RecipeCard from '@/components/RecipeCard';
import Ingredients from '@/components/Ingredients';

const steps = [
    { title: 'Preparation', description: 'Season/cook meat.' },
    { title: 'Cooking', description: 'Boil okra.' },
    { title: 'Sautéing', description: 'Cook ingredients.' },
    { title: 'Incorporation', description: 'Add meat/seafood.' },
    { title: 'Addition', description: 'Mix okra/stock.' },
    { title: 'Seasoning', description: 'Add cubes/salt.' },
    // { title: 'Greens', description: 'Include leaves.' },
    // { title: 'Serving', description: 'Serve hot.' }
];



export default function Home() {

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    return (
        <div className="ps-5 pe-5 pt-5">

            <div>
                <div className='mb-2'>
                    <span className='text-xl'>Okro soup</span> <span>also known as Okra soup, is a delicious soup that&apos;s widely enjoyed in many West African countries, especially Nigeria. It&apos;s made with okra vegetables cooked with a unique blend of palm oil, meat (like goat meat, beef, or fish), and various spices.</span>
                </div>
                <div className='block md:hidden'>

                    <Tabs>
                        <TabList>
                            <Tab>Info and Ingredients</Tab>
                            <Tab>Instructions</Tab>
                        </TabList>
                        <TabPanels>

                            <TabPanel>
                                <div className='w-full h-full'>
                                    <RecipeStatsInstructions></RecipeStatsInstructions>
                                </div>

                            </TabPanel>
                            <TabPanel>
                                <div className='w-full h-full p-1'>

                                    <div className="w-full h-full overflow-auto p-1 border border-black rounded">
                                        <Instructions></Instructions>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>



                </div>
                <div className="hidden md:flex flex-col w-full h-screen">

                    {/* <div className="flex h-80 w-full justify-center items-center mb-1">
                        <div className='flex flex-col h-full w-80 border border-black rounded'>

                            <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

                            <div className='w-100 h-42'></div>



                        </div>
                    </div> */}
                    <div className="flex h-full w-full space-x-1">
                        <div className="h-full w-1/2 border border-black rounded overflow-auto p-1">

                            <Ingredients></Ingredients>

                        </div>

                        <div className="flex flex-col h-full w-1/2 border items-center border-black rounded overflow-auto">
                            <div className='flex w-full h-[200px} z-10 sticky top-1 bg-white justify-center mt-1' >
                                <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov'/>
                            </div>

                            <Instructions></Instructions>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
