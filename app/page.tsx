import WorldMap from '@/components/MapComponent';
import RecipeCard from '@/components/RecipeCard';

import { ButtonChakra } from '@/components/Button';
// import { Button, ButtonGroup } from '@chakra-ui/react'


// import MapComponent from '@/components/MapComponent';
export default async function Home() {

  const data = await getData()


  return (
    <div className="h-full flex flex-col">
      <div className="h-2/3">
        <WorldMap data={data}></WorldMap>
      </div>
      <div className="flex flex-col h-1/3 ps-1 pt-2 w-full bg-orange-200 justify-between pb-1">
        <div className='text-base flex space-x-1 items-center'>
          <span>Top Trending Nigeran Recipes </span>
          
          <ButtonChakra></ButtonChakra>
        </div>
        <div className="flex mt-2 flex-1 space-x-4 w-full overflow-auto">
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>


        </div>
        {/* <div className='bg-yellow-800 flex justify-end'> <a href='#'>View all Recipes</a></div> */}

      </div>
    </div>
  )
}

async function getData() {

  const res = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

