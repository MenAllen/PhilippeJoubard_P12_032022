import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import { useParams } from "react-router-dom";

const Main = styled.main`
	display: flex;
	width: 100%;
	height: 100%;
`;

const UserPerfContainer = styled.div`
	display: flex;
  flex-direction: column;
	width: 100%;
	height: 900px;
  padding: 3rem;
`;
/**
 * 
 * @returns
 * 				<Nutrients id={userId} />
 
 */
function UserBoard() {
	const { userId } = useParams();

	return (
		<Main>
			<SideBar />
			<UserPerfContainer>
				<Title id={userId} />
				<Nutrients id={userId} />
			</UserPerfContainer>
		</Main>
	);
}

export default UserBoard;
