import React from "react";
import propTypes from "prop-types";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import "./ScoreChart.css";

/**
 * ScoreChart is a React component in charge of displaying the user performance score, in %,
 *  in a radialBarChart.
 *
 *  @prop {Number} scoreData containing score or todayScore value
 *  @returns a div including the score in a radialBarChart
 */
function ScoreChart({ scoreData }) {
	const style = { background: "fff", fill: "red" };
	const dataFormatted = [{ name: "a", score: scoreData }];

	/* calculates the score in percentage */
	function ObjectivPerCent() {
		return Math.round(scoreData * 100);
	}

	return (
		<div className="scoreChartContainer">
			<h2 className="scoreChartTitle">Score</h2>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={8} data={dataFormatted} startAngle={225} endAngle={-135} style={{ background: "transparent" }}>
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
	scoreData: propTypes.number.isRequired,
};

export default ScoreChart;
