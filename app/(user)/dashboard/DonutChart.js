'use client'
import '../../styles/donutChart.css'

const DonutChart = ({ sections }) => {
  return (
    <div className="donut-chart">
      {sections.map((section, index) => (
        <div
          className="donut-chart-section"
          key={index}
          style={{
            '--donut-percent': section.percent,
            '--donut-border-size': section.borderSize,
            '--donut-color': section.color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DonutChart;

