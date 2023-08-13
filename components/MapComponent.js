"use client"
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import geoAzimuthalEqualArea from 'd3-geo-projection'

const WorldMap = ({ data }) => {
  const ref = useRef(); // Reference to the SVG element

  useEffect(() => {
    const svg = d3.select(ref.current);

    // Function to handle the actual redrawing
    const handleResize = () => {
      const width = svg.node().getBoundingClientRect().width;
      const height = svg.node().getBoundingClientRect().height;
      renderMap(svg, width, height);
    };

    // Set up ResizeObserver
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    // Set up resize event listener
    window.addEventListener('resize', handleResize);

    // Initial draw
    handleResize();

    return () => {
      // Cleanup
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [data]); // Assuming you want to re-run this effect if data changes.

  const renderMap = (svg, width, height) => {
    // Calculate dynamic scale based on SVG dimensions.
    const scaleFactor = 1;  // Adjust this for desired default scaling
    const scale = (width / 2.5) * scaleFactor;  // 2.5 is an arbitrary factor for adjusting initial scale

    // const projection = d3.geoCylindricalStereographic()
    
      // .scale(scale)
      const projection = d3.geoAzimuthalEqualArea()
      .translate([width / 2, height / 2]);

    svg.selectAll("*").remove();

    // Draw the map
    svg.append("g")
      .selectAll("path")
      .data(data.features)
      .join("path")
      .attr("fill", "black")
      .attr("d", d3.geoPath().projection(projection))
      .style("stroke", "#fff");
};

  

  return (
    <svg ref={ref} style={{ width: "100%", height: "100%" }} />
  );
};

export default WorldMap;
