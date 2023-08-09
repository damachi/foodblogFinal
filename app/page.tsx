import WorldMap from '@/components/MapComponent';

// import MapComponent from '@/components/MapComponent';
export default async function Home() {

  const data = await getData()


  return (
    <div className="h-screen flex flex-col">
      <div className="h-2/3">
        <WorldMap data={data}></WorldMap>
      </div>
      <div className="h-1/3 bg-yellow-300">
        {/* Content */}
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

