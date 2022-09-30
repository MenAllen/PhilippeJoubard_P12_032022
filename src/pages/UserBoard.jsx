import React from "react";
import styled from "styled-components";
import useFetchData from "../utils/api";
import Error from "./Error";
import { LoaderWrapper, Loader } from "../utils/Atoms";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import SessionsChart from "../components/SessionsChart/SessionsChart";
import PerformanceChart from "../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import ActivityChart from "../components/ActivityChart/ActivityChart";
import { useParams } from "react-router-dom";

const Main = styled.main`
	display: flex;
	width: 100%;
	height: auto;
`;

const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 1rem;
`;

const AllChartsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	height: auto;
`;

const GraphicalsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 58vw;
`;

const SquaresContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: auto;
	margin-top: 40px;
`;

/**
 * 
 * @returns
 * 				<Nutrients id={userId} />
 
 */
function UserBoard() {
	const { userId } = useParams();

	const { userMainData, userActivityData, userSessionsData, userPerformanceData, isLoading, error } = useFetchData(userId);

	if (error) {
		return <Error />;
	}

	return isLoading ? (
		<LoaderWrapper>
			<Loader />
		</LoaderWrapper>
	) : (
		<Main>
			<SideBar />
			<UserContainer>
				<Title userData={userMainData} />
				<AllChartsContainer>
					<GraphicalsContainer>
						<ActivityChart userData={userActivityData} />
						<SquaresContainer>
							<SessionsChart userData={userSessionsData} />
							<PerformanceChart userData={userPerformanceData} />
							<ScoreChart userData={userMainData} />
						</SquaresContainer>
					</GraphicalsContainer>
					<Nutrients userData={userMainData} />
				</AllChartsContainer>
			</UserContainer>
		</Main>
	);
}

export default UserBoard;
