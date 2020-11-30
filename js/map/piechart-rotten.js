export default function PieChart(container) {
  const margin = { top: 20, right: 50, bottom: 20, left: 50 };
  const width = 400 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  const group = svg
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  const color = d3.scaleOrdinal(['steelblue', 'red', 'grey']);

  const arc = d3.arc().innerRadius(0).outerRadius(50);

  function update(data) {
    console.log('piechart', data);

    color.domain(data);

    const arcs = d3.pie()(data);

    console.log('arcs', arcs);

    group
      .selectAll('slices')
      .data(arcs)
      .join('path')
      .attr('fill', (d) => color(d.data))
      .attr('d', arc);

    group
      .selectAll('slices')
      .data(arcs)
      .enter()
      .append('text')
      .text((d, i) => {
        if (d.value !== 0) {
          return d.value + '%';
        }
        return;
      })
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .style('text-anchor', 'middle')
      .style('font-size', 10);

    ////////////
    // LEGEND //
    ////////////

    const rectSize = 15;
    const legendX = width + 30;
    const legendY = height - 3 * 40;

    const rects = group.selectAll('.legend').data(data);

    rects
      .enter()
      .append('rect')
      .attr('class', 'legend')
      .attr('x', legendX)
      .attr('y', height)
      .attr('width', rectSize)
      .attr('height', rectSize);
  }

  return {
    update,
  };
}
