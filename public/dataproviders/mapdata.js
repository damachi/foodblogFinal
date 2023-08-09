import * as d3 from "d3"

async function getDataMap() {

    return Promise
      .all([
        d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      ])
}