import { Link, NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar/SideBar";
import Title from "../components/Title/Title";
import Nutrients from "../components/Nutrients/Nutrients";
import GetUserData from "../utils/api";
import { Loader } from "../utils/Atoms";
import { useParams } from "react-router-dom";

const UserBoardContainer = styled.div`
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

function UserBoard() {
	const { userId } = useParams();
	//  const usermaindata = GetUserData( userId, "user_main_data");

	return (
		<UserBoardContainer>
			<SideBar />
			<UserPerfContainer>
				<Title id={userId} />
				<Nutrients id={userId} />
			</UserPerfContainer>
		</UserBoardContainer>
	);
}

export default UserBoard;
