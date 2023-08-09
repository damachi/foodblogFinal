
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

import SecondaryOptions from './SecondaryOptionsWithMenu';


export default function Ingredients() {

    const ingredients = [
        { name: 'Okra', quantity: '250g' },
        { name: 'Palm oil', quantity: '200g' },
        { name: 'Stockfish', quantity: '1-2 cups' },
        { name: 'Goat meat', quantity: '200g' },
        { name: 'Shrimp', quantity: '100g' },
        { name: 'Scotch Bonnet peppers', quantity: '1-2 pieces' },
        { name: 'Onion', quantity: '1 medium-sized' },
        { name: 'Maggi cubes', quantity: '2-3 cubes' },
        { name: 'Ground crayfish', quantity: '2 tablespoons' },
        { name: 'Salt', quantity: 'to taste' },
        { name: 'Ugu or Spinach leaves', quantity: 'a handful' }
    ];

    return (
        <div>

            <div className="flex justify-start"><SecondaryOptions></SecondaryOptions></div>
            <CheckboxGroup colorScheme='blue'>
                <Stack direction={['column']}>

                    <span className='text-xl'>Ingredients</span>

                    {ingredients.map(ingredient => (
                        <Checkbox key={ingredient.name} value={ingredient.name + " " + ingredient.quantity}>
                            {ingredient.name + " " + ingredient.quantity}
                        </Checkbox>
                    ))}

                </Stack>
            </CheckboxGroup>
        </div>

    )
}
