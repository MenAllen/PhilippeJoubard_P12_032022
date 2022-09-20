import React from "react";
import { navigate } from "react-router-dom";
import iconclap from "../../assets/iconclap.png";
import useFetchData from "../../utils/api";
import { LoaderWrapper, Loader } from "../../utils/Atoms";
import propTypes from 'prop-types';
import "./Title.css";


function Title({ id }) {
	
	const { userData, isLoading, error } = useFetchData(id, "user_main_data");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	return isLoading ? (
			<LoaderWrapper>
				<Loader />
			</LoaderWrapper>
	) : (
		<div className="titleContainer">
			<h1>
				Bonjour <span>{userData.userInfos.firstName}</span>
			</h1>
			<p>Félicitation ! vous avez explosé vos objectifs hier <img src={iconclap} className="iconClap" alt='bravo' /></p>
		</div>
	);
}

Title.propTypes={
	id: propTypes.number.isRequired
}

export default Title;
