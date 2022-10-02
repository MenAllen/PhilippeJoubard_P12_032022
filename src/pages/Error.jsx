import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Error React component is called whenever :
 * 			The url is not expected or
 * 			The user id requested is not known
 * 
 * @returns {React.ReactElement} div with error message and link to go back to Accueil 
 */

function Error() {

	const ErrorPageContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 3rem;
		font-weight: 500;
	`;

	return (
		<ErrorPageContainer>
			<h2>Erreur !</h2>
			<p>La page demandée n'existe pas<br/>ou<br/>n'est pas accessible</p>
			<Link to="/">
				<h3>Retourner sur la page d'accueil</h3>
			</Link>
		</ErrorPageContainer>
	);
}

export default Error;
