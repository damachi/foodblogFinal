"use client"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Button, Heading, HStack, Divider } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GiLevelEndFlag } from 'react-icons/gi'
import { BiSolidTimer } from 'react-icons/bi'


export default function RecipeCard() {
  return (

    <div className='flex w-[200px] h-full bg-white flex-shrink-0 md:w-[240px] lg:w-[360px] border border-solid rounded-md'>
      <div>

        <Image
          objectFit='cover'
          boxSize='100%'
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

      </div>

      <div className='w-1/2 ps-1 flex flex-col justify-center'>
        <div className='text-sm font-bold'>
          Jollof Rice

        </div>

        <div className='hidden lg:block text-xs'>
          is a spicy West African dish with a distinctive reddish-orange hue.
        </div>
        <Divider />
        <div className='text-xs'>
          <div><Icon as={GiLevelEndFlag} />Beginner</div>
          <div><Icon as={BiSolidTimer} />Prep: 20min</div>
          <div><Icon as={BiSolidTimer} />Cook: 30min</div>

        </div>
      </div>
    </div>
  )
}
