import React from "react";
import useFetchData from "../../utils/api";
import { LoaderWrapper, Loader } from "../../utils/Atoms";
import propTypes from "prop-types";
import { RadialBarChart, RadialBar, Legend, style, ResponsiveContainer, PolarAngleAxis } from "recharts";
import "./ScoreChart.css";

function ScoreChart({ id }) {

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

	const { userData, isLoading, error } = useFetchData(id, "user_main_data");

  console.log("ScoreChart: ", userData);

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	return isLoading ? (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	) : (
		<div className="scoreChartContainer">
      <h2 className="scoreChartTitle">Score</h2>
			<ResponsiveContainer width="98%" height="100%">
				<RadialBarChart cx="50%" cy="50%" innerRadius="60%" barSize={8} data={[FormatDataScore()]} startAngle={225} endAngle={-135} >
					<RadialBar minAngle={15}  dataKey="score" fill="#FF0000" />
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false}/>
				</RadialBarChart>
			</ResponsiveContainer>
      <div className="objectivContainer">
        <p><strong>{ObjectivPerCent()}%</strong><br/>de votre<br/>objectif</p>
      </div>
		</div>
	);
}

ScoreChart.propTypes = {
	id: propTypes.number.isRequired,
};

export default ScoreChart;
