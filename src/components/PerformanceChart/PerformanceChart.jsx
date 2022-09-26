import React from "react";
import propTypes from "prop-types";
import { RadarChart, PolarAngleAxis, Radar, PolarRadiusAxis, PolarGrid, ResponsiveContainer } from "recharts";
import "./PerformanceChart.css";

function PerformanceChart({ userData }) {

  const formatXAxis = (tickItem) => {
    switch (tickItem) {
      case 1: return 'Cardio';
      case 2: return 'Energie';
      case 3: return 'Endurance';
      case 4: return 'Force';
      case 5: return 'Vitesse';
      case 6: return 'Intensité';
      default: return '';
    }
  }

  function reverseArray(Array) {
    const reversedArray = [];
    for (let i = 0; i < Array.length; i++) {
      reversedArray[5-i] = Array[i];
    }
    return reversedArray;
  }

	return (
		<div className="PerformanceChartContainer">

			<ResponsiveContainer width="98%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={reverseArray(userData.data)}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind"
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="#ffffff"
            tickFormatter={formatXAxis} />
          <Radar name="User" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>

		</div>
	);
}

PerformanceChart.propTypes = {
	userData: propTypes.object.isRequired,
};

export default PerformanceChart;
