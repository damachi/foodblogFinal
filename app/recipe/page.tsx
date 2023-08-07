"use client"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
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
        <div className="w-full h-screen
    ps-5 pe-5 pt-5">

            <div>
                <div>
                    <span className='text-xl'>Okro soup</span> <span>also known as Okra soup, is a delicious soup that's widely enjoyed in many West African countries, especially Nigeria. It's made with okra vegetables cooked with a unique blend of palm oil, meat (like goat meat, beef, or fish), and various spices.</span>
                </div>
                <div className='block md:hidden'>

                    <Tabs>
                        <TabList>
                            <Tab>Info and Ingredients</Tab>
                            <Tab>Instructions</Tab>
                        </TabList>
                        <TabPanels>

                            <TabPanel>
                                <div className='w-full h-96'>
                                    <RecipeStatsInstructions></RecipeStatsInstructions>
                                </div>

                            </TabPanel>
                            <TabPanel>
                                <div className='w-full h-96 p-1'>

                                    <div className="w-full h-full overflow-auto p-1 border border-black rounded">
                                        <Instructions></Instructions>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>



                </div>
                <div className="hidden md:flex">
                    <div className='md:w-1/2 h-96'>
                        <RecipeStatsInstructions></RecipeStatsInstructions>
                    </div>




                    <div className='md:w-1/2 h-96 p-1'>
                        <div className="w-full h-full overflow-auto p-1 border border-black rounded">
                            <Instructions></Instructions>
                        </div>


                    </div>

                </div>

                <div>
                    {/* <Stepper index={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepIndicator>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper> */}

                </div>


            </div>

        </div>
    )
}
