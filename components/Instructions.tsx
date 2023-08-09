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
    Box
} from '@chakra-ui/react'

import { Wrap, WrapItem } from '@chakra-ui/react'




export default function Instructions() {

    const steps = [
        {
            title: 'Prepare',
            description: 'Season meat with salt, pepper, and Maggi cubes. Cook until tender. Soak, clean, and debone stockfish if using.'
        },
        {
            title: 'Cook Okra',
            description: 'Add chopped okra to a pot with water. Cook 3-5 minutes until slightly tender. Set aside.'
        },
        {
            title: 'Soup Base',
            description: 'Heat palm oil. Sauté onions. Add Scotch Bonnet peppers and crayfish. Cook few minutes.'
        },
        {
            title: 'Meat & Fish',
            description: 'Add cooked meat, stockfish, and shrimp. Cook 10 minutes for flavor blend.'
        },
        {
            title: 'Add Okra',
            description: 'Stir in cooked okra and stock. Adjust consistency. Cook 10 more minutes.'
        },
        {
            title: 'Season',
            description: 'Add Maggi cubes and salt. Cook 5 minutes. Adjust seasoning if needed.'
        },
        {
            title: 'Greens',
            description: 'Add Ugu or spinach. Cook until wilted but still bright green.'
        },
        {
            title: 'Serve',
            description: 'Serve hot with fufu, eba, or rice.'
        }
    ];


    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <Stepper index={activeStep} orientation='vertical' gap='0' ms={1}>
            {steps.map((step, index) => (
                <Step style={{width:"100%"}} key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box style={{width:"90%"}}>
                        <StepTitle>{step.title}</StepTitle>
                        <WrapItem style={{width:"100%"}}><StepDescription>{step.description}</StepDescription> </WrapItem>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )

}



