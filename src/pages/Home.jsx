import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { USER_MAIN_DATA } from "../data/mockedData";

const Paragraph = styled.p`
font-size: 3rem;
font-weight: 500;
margin: 50px;
text-decoration:none;
`;

/**
 * Home React component called on startup :
 * 			Access mocked Data to list and display the users
 * 
 * @returns {React.ReactElement} paragraph with welcome message and list of users 
 */
function Home() {

	const userMainData = USER_MAIN_DATA;

	return (
		<React.Fragment>
			<Paragraph>
				<strong>Bienvenue !</strong>
			</Paragraph>
			{userMainData.map((thisUser) => (
				<Link to={`/user/${thisUser.id}`}>
					<Paragraph>{thisUser.userInfos.firstName}</Paragraph>
				</Link>
			))}
		</React.Fragment>
	);
}

export default Home;
