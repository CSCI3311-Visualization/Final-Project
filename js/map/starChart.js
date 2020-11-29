import d3Star from './star.js';

export default function StarChart(container) {
  const margin = { top: 20, right: 50, bottom: 20, left: 50 };
  const width = 400 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;
  const l = 50;

  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  const group = svg
    .append('g')
    .attr('transform', 'translate(' + 0 + ',' + 0 + ')');

  const star1 = d3Star();
  const star2 = d3Star();
  const star3 = d3Star();
  const star4 = d3Star();
  const star5 = d3Star();

  function update(data) {
    star1
      .x(100)
      .y(100)
      .size(l)
      .value(data[0])
      .borderColor('#CAAA6F')
      .borderWidth(1);
    star2
      .x(150)
      .y(100)
      .size(l)
      .value(data[1])
      .borderColor('#CAAA6F')
      .borderWidth(1);
    star3
      .x(200)
      .y(100)
      .size(l)
      .value(data[2])
      .borderColor('#CAAA6F')
      .borderWidth(1);
    star4
      .x(250)
      .y(100)
      .size(l)
      .value(data[3])
      .borderColor('#CAAA6F')
      .borderWidth(1);
    star5
      .x(300)
      .y(100)
      .size(l)
      .value(data[4])
      .borderColor('#CAAA6F')
      .borderWidth(1);

    star1(group);
    star2(group);
    star3(group);
    star4(group);
    star5(group);
  }

  return {
    update,
  };
}
