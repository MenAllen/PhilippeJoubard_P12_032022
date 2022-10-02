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


/* ============================= USERBOARD ARCITECTURE ============================= */
/*   +----------------------------------------------------------------------------+  */
/*   |    MAIN                                                                    |  */
/*   | +---------+  +------------------------------------------------------------+|  */
/*   | | SideBar |  |  UserContainer                                             ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | | Title                                                  | ||  */
/*   | |         |  | |                                                        | ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | +--------------------------------------------------------+ ||  */
/*   | |         |  | | AllChartsContainer                                     | ||  */
/*   | |         |  | | +-----------------------------------------+ +-  -----+ | ||  */
/*   | |         |  | | | GraphicalsContainer                     | |Nutri   | | ||  */
/*   | |         |  | | |+---------------------------------------+| |ents    | | ||  */ 
/*   | |         |  | | ||  ActivityChart                        || |        | | ||  */
/*   | |         |  | | ||                                       || |        | | ||  */
/*   | |         |  | | ||                                       || |        | | ||  */
/*   | |         |  | | |+------------------------------- -------+| |        | | ||  */
/*   | |         |  | | |+---------------------------------------+| |        | | ||  */
/*   | |         |  | | ||  SquaresContainer                     || |        | | ||  */
/*   | |         |  | | ||+-----------++-----------++-----------+|| |        | | ||  */
/*   | |         |  | | ||| Session   ||Performan  || Score     ||| |        | | ||  */
/*   | |         |  | | ||| Chart     ||Chart      || Chart     ||| |        | | ||  */
/*   | |         |  | | |||           ||           ||           ||| |        | | ||  */
/*   | |         |  | | ||+-----------++-----------++-----------+|| |        | | ||  */ 
/*   | |         |  | | |+---------------------------------------+| |        | | ||  */
/*   | |         |  | +-------------------------------------------+ +--------+ | ||  */
/*   | |         |  +----------------------------------------------------------+ ||  */
/*   | +---------+  +------------------------------------------------------------+|  */
/*   +----------------------------------------------------------------------------+  */
/* ================================================================================= */

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
 * UserBoard React component called to display user data.
 * 
 * @returns {React.ReactElement} main HTML including all charts and data requested 
 */
function UserBoard() {

	/* userId is extracted from the url */
	const { userId } = useParams();

	/* customized hook is called to retrieve user data */
	const { userMainData, userActivityData, userSessionsData, userPerformanceData, isLoading, error } = useFetchData(userId);

	/* on error, display error panel */
	if (error) {
		return <Error />;
	}

	/* if data loading, display loader. If not, data is available to display full page */ 
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
