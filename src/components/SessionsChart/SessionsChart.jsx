import React from "react";
import useFetchData from "../../utils/api";
import { LoaderWrapper, Loader } from "../../utils/Atoms";
import propTypes from "prop-types";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";
import "./SessionsChart.css";

function SessionsChart({ id }) {
	/**
	 *
	 * @param {number} day
	 * @returns
	 */
	const xAxisFormatter = (day) => {
		switch (day) {
			case 1:
				return "L";
			case 2:
				return "M";
			case 3:
				return "M";
			case 4:
				return "J";
			case 5:
				return "V";
			case 6:
				return "S";
			case 7:
				return "D";
			default:
				return "";
		}
	};

	function CustomizedTooltip({ active, payload }) {
		if (active && payload) {
			return (
				<div className="custom-tooltip">
					<p>{`${payload[0].value}`} min</p>
				</div>
			);
		}
		return null;
	}

	const { userData, isLoading, error } = useFetchData(id, "user_average_sessions");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	return isLoading ? (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	) : (
		<div className="sessionsChartContainer">
			<h2 className="sessionChartTitle">Durée moyenne des sessions</h2>

			<ResponsiveContainer width="98%" height="100%">
				<LineChart data={userData.sessions} margin={{ top: 40, right: 10, left: 10, bottom: 40 }}>
					<CartesianGrid horizontal={false} vertical={false} />
					<XAxis
						dataKey="day"
						type="category"
						tickFormatter={xAxisFormatter}
						axisLine={false}
						tickLine={false}
						tick={{ fontSize: 12, fontWeight: 500 }}
						stroke="rgba(255, 255, 255, 0.8)"
						tickMargin={40}
					/>
					<Line type="natural" dataKey="sessionLength" stroke="#ffffff" dot={false} strokeWidth={2} />
					<Tooltip content={<CustomizedTooltip />} cursor={false}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

SessionsChart.propTypes = {
	id: propTypes.number.isRequired,
};

export default SessionsChart;
