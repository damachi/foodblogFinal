"use client"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Button, Heading, HStack, Divider } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GiLevelEndFlag } from 'react-icons/gi'
import { BiSolidTimer } from 'react-icons/bi'
import Link from 'next/link'



export default function RecipeCard() {
  return (

    <div className='flex flex-col w-[255px] h-full bg-white flex-shrink-0 border border-solid rounded-sm'>

    <Link href={`/recipe/`}>

      <div className='w-full h-full flex flex-col justify-center cursor-pointer'>
        <div className='text-base font-bold'>
          Jollof Rices
        </div>

        <div className='flex-grow overflow-auto'>
          <Image
            objectFit='cover'
            boxSize='100%'
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

        </div>

        {/* <div className='hidden lg:block text-xs'>
          is a spicy West African dish with a distinctive reddish-orange hue.
        </div> */}
        <Divider />
        <div className='text-xs flex justify-between h-11 items-center ps-1 pe-1'>
          <div><Icon as={GiLevelEndFlag} />Beginner</div>
          <Divider orientation='vertical' />
          <div><Icon as={BiSolidTimer} />Prep:20min</div>
          <Divider orientation='vertical' />
          <div><Icon as={BiSolidTimer} />Cook:30min</div>

        </div>
      </div>
      </Link>
    </div>
  )
}
