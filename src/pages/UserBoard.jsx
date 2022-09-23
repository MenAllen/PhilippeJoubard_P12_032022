import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import SessionsChart from "../components/SessionsChart/SessionsChart";
import PerformanceChart from "../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import { useParams } from "react-router-dom";

const Main = styled.main`
	display: flex;
	width: 100%;
	height: 100%;
`;

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 900px;
	padding: 3rem;
`;

const MultiChartContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

/**
 * 
 * @returns
 * 				<Nutrients id={userId} />
 
 */
function UserBoard() {
	const { userId } = useParams();
	console.log(userId);

	return (
		<Main>
			<SideBar />
			<UserContainer>
				<Title id={userId} />
				<MultiChartContainer>
					<SessionsChart id={userId} />
					<PerformanceChart id={userId} />
					<ScoreChart id={userId} />
					<Nutrients id={userId} />
				</MultiChartContainer>
			</UserContainer>
		</Main>
	);
}

export default UserBoard;
