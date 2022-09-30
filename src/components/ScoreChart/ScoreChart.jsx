import React from "react";
import propTypes from "prop-types";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "./ScoreChart.css";

function ScoreChart({ userData }) {
	const style = { background: "fff", fill: "red" };

	function ObjectivPerCent() {
		return Math.round(userData.score * 100);
	}

	function FormatDataScore() {
		if (!userData.score) {
			userData.score = userData.todayScore;
			delete userData.todayScore;
		}
		return userData;
	}

	return (
		<div className="scoreChartContainer">
			<h2 className="scoreChartTitle">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={8} data={[FormatDataScore()]} startAngle={225} endAngle={-135} style={{ background: "transparent" }}>
					<RadialBar dataKey="score" cornerRadius={5} style={style} fill="#fbfbfb" />
					<PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
				</RadialBarChart>
			</ResponsiveContainer>
			<div className="objectivContainer">
				<p>
					<strong>{ObjectivPerCent()}%</strong>
					<br />
					de votre
					<br />
					objectif
				</p>
			</div>
		</div>
	);
}

ScoreChart.propTypes = {
	userData: propTypes.object.isRequired,
};

export default ScoreChart;
