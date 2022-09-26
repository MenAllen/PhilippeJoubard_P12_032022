import React from "react";
import styled from "styled-components";
import useFetchData from "../utils/api";
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
	height: auto;
	padding: 1rem;
`;

const MultiChartContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: auto;
`;

const Bloc1Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 62vw;
	margin: 1rem;
`;

const Bloc2Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: auto;
	margin: 1rem;
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
		return <span>Oups il y a eu un problème</span>;
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
				<MultiChartContainer>
					<Bloc1Container>
						<ActivityChart userData={userActivityData} />
						<Bloc2Container>
							<SessionsChart userData={userSessionsData} />
							<PerformanceChart userData={userPerformanceData} />
							<ScoreChart userData={userMainData} />
						</Bloc2Container>
					</Bloc1Container>
					<Nutrients userData={userMainData} />
				</MultiChartContainer>
			</UserContainer>
		</Main>
	);
}

export default UserBoard;
