



// import * as d3 from 'd3';
// import { useEffect, useRef } from 'react';

// const ForceGraph = () => {
//   const ref = useRef();

//   useEffect(() => {
//     const width = 150;
//     const height = 150;
//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     // Generate a random number of nodes between 3 and 20
//     const numNodes = Math.floor(Math.random() *21) + 3;

//     // Generate a random number of links between 1.5 and 2 times the number of nodes
//     const numLinks = Math.floor(Math.random() * numNodes * 0.5 + numNodes * 1.1);

//     const data = {
//     nodes: Array.from({ length: numNodes }, (_, id) => ({ id })),
//     links: Array.from({ length: numLinks }, () => ({
//         source: Math.floor(Math.random() * numNodes),
//         target: Math.floor(Math.random() * numNodes),
//     })),
//     };


//     const links = data.links.map(d => Object.create(d));
//     const nodes = data.nodes.map(d => Object.create(d));

//     const simulation = d3.forceSimulation(nodes)
//       .force("link", d3.forceLink(links).id(d => d.id))
//       .force("charge", d3.forceManyBody().strength(-1))
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Clear any previous elements before creating new ones
//      d3.select(ref.current).selectAll("*").remove();
    
//     const svg = d3.select(ref.current)
//       .attr("viewBox", [0, 0, width, height]);

//     // Define the pattern and append it to defs
//     const defs = svg.append("defs");

//     defs.append("pattern")
//     .attr("id", "bg")
//     .attr("patternUnits", "userSpaceOnUse")
//     .attr("width", width)
//     .attr("height", height)
//     .append("image")
//     .attr("xlink:href", "/fig_insight.svg") // replace with your image url
//     .attr("width", width*1)
//     .attr("height", height*1)
//     .attr("x", 0) // Move the image to the left by half of the width
//     .attr("y", 0 );

//       // Now create a rectangle that will be filled with the pattern
//     svg.append("rect")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("fill", "url(#bg)");


//       const link = svg.append("g")
//       .selectAll("line")
//       .data(links)
//       .join("line")
//       .attr("stroke", (_, i) => {
//         // Assign colors based on a proportion of 2/10
//         return i < numLinks * 0.08 ? "#FF6969" : "#445983"; // Red for first 2/10, Green for the rest
//       })
//       .attr("stroke-width", 0.2); // Adjust the thickness of the links here

      


//       const node = svg.append("g")
//       .selectAll("circle")
//       .data(nodes)
//       .join("circle")
//       .attr("r", 1.5)
//       .attr("fill", (_, i) => {
//         // Assign colors based on the corresponding link color
//         return i < numLinks * 0.08 ? "#FF6969" : "#445983"; // Red for first 2/10, Green for the rest
//       })
//       .style("filter", "url(#drop-shadow)")
//       .call(drag(simulation));




    


//     node.append("title")
//       .text(d => d.id);

//     simulation.on("tick", () => {
//       link
//         .attr("x1", d => d.source.x)
//         .attr("y1", d => d.source.y)
//         .attr("x2", d => d.target.x)
//         .attr("y2", d => d.target.y);

//       node
//         .attr("cx", d => d.x)
//         .attr("cy", d => d.y);
//     });
    

//     function drag(simulation) {
//       function dragstarted(event) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//       }

//       function dragged(event) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//       }

//       function dragended(event) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//       }

//       return d3.drag()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended);
//     }

//   }, []);

//   return <svg ref={ref} />;
// };

// export default ForceGraph;

// //######################################################
// //######################################################

import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

const ForceGraph = () => {
  const ref = useRef();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick(tick => tick + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const width = 150;
    const height = 150;

    // Generate a random number of nodes between 3 and 20
    const numNodes = Math.floor(Math.random() *21) + 3;

    // Generate a random number of links between 1.5 and 2 times the number of nodes
    const numLinks = Math.floor(Math.random() * numNodes * 0.5 + numNodes * 1.1);

    const data = {
      nodes: Array.from({ length: numNodes }, (_, id) => ({ id })),
      links: Array.from({ length: numLinks }, () => ({
          source: Math.floor(Math.random() * numNodes),
          target: Math.floor(Math.random() * numNodes),
      })),
    };

    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody().strength(-1))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Clear any previous elements before creating new ones
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3.select(ref.current)
      .attr("viewBox", [0, 0, width, height]);

    const defs = svg.append("defs");

    defs.append("pattern")
      .attr("id", "bg")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", width)
      .attr("height", height)
      .append("image")
      .attr("xlink:href", "/fig_insight.svg") // replace with your image url
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0);

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#bg)");

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", (_, i) => {
        // Assign colors based on a proportion of 2/10
        return i < numLinks * 0.08 ? "#FF6969" : "#445983"; // Red for first 2/10, Green for the rest
      })
      .attr("stroke-width", 0.2); // Adjust the thickness of the links here

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 1.5)
      .attr("fill", (_, i) => {
        // Assign colors based on the corresponding link color
        return i < numLinks * 0.08 ? "#FF6969" : "#445983"; // Red for first 2/10, Green for the rest
      })
      .style("filter", "url(#drop-shadow)")
      .call(drag(simulation));

    node.append("title")
      .text(d => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

  }, [tick]);

  return <svg ref={ref} />;
};

export default ForceGraph;



