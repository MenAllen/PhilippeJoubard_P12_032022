import React from "react";
import propTypes from "prop-types";
import "./ActivityChart.css";

function ActivityChart({ userData }) {

	return (
		<div className="ActivityChartContainer">
      ActivityChart
		</div>
	);
}

ActivityChart.propTypes = {
	userData: propTypes.object.isRequired,
};

export default ActivityChart;
