import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { USER_MAIN_DATA } from "../data/mockedData";

const Paragraph = styled.p`
	font-size: 1.5rem;
	font-weight: 300;
`;

function Home() {

  const userMainData = USER_MAIN_DATA;

	return (
		<React.Fragment>
			<Paragraph>
				<strong>Bienvenue !</strong>
			</Paragraph>
			<Link to={`/user/${userMainData[0].id}`}>
				<Paragraph>{userMainData[0].userInfos.firstName}</Paragraph>
			</Link>
			<Link to={`/user/${userMainData[1].id}`}>
				<Paragraph>{userMainData[1].userInfos.firstName}</Paragraph>
			</Link>
		</React.Fragment>
	);
}

export default Home;
