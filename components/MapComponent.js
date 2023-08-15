"use client"

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WorldMap = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    // const zoom = d3.zoom()
    //   .scaleExtent([1, 8])
    //   // .on('zoom', zoomed);

    // // svg.call(zoom);

    // function zoomed(event) {
    //   const { transform } = event;
    //   svg.select('g').attr('transform', transform);
    // }

    const handleResize = () => {
      const width = svg.node().getBoundingClientRect().width;
      const height = svg.node().getBoundingClientRect().height;
      renderMap(svg, width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  const renderMap = (svg, width, height) => {
    // const scaleFactor = 1;
    // const scale = (width / 2.5) * scaleFactor;

    const MIN_WIDTH = 320
    const MAX_WIDTH = 2560

    const projection = d3.geoConicConformal()
    .center([15, 30])  // Roughly centers between Europe and Africa
    .rotate([-15, 0])  // Rotates to emphasize the region
    .parallels([20, 40])  // Parallels that encompass Europe and Africa
    .scale(width / getScaleFactor(width, MIN_WIDTH, MAX_WIDTH))  // Adjust scale based on your preference
    .translate([width / 2, height / 2]);
    // // console.log(width)

    svg.selectAll("*").remove();

    const g = svg.append("g");
    g.selectAll("path")
      .data(data.features)
      .join("path")
      .attr("fill", "black")
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", "#fff");
  };

  return (
    <svg ref={ref} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
    // <svg ref={ref} style={{ width: "425px", height: "522px", overflow: "hidden" }} />
  );
};

function getScale(width) {
  return 1.5
}

const getScaleFactor = (width, minWidth, maxWidth) => {
  // const minScale = 3.0;
  // const maxScale = 8.0;
  // if (width <= minWidth) return minScale;
  // if (width >= maxWidth) return maxScale;
  // return minScale + (width - minWidth) / (maxWidth - minWidth) * (maxScale - minScale);

  if(width >= 1440){

    return 13.5
  }else if(width >= 1024){
    return 11.3
  }else if(width >= 768){
    return 8.2
  }else if(width >= 425){
    return 5.5
  }else if(width >= 375){
    return 4.8
  }else if(width >= 320){
    return 3.3
  }else{
    return 1.0
  }


};


export default WorldMap;
