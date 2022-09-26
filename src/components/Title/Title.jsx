import React from "react";
import { navigate } from "react-router-dom";
import iconclap from "../../assets/iconclap.png";
import useFetchData from "../../utils/api";
import { LoaderWrapper, Loader } from "../../utils/Atoms";
import propTypes from 'prop-types';
import "./Title.css";


function Title({ userData }) {

	return (
		<div className="titleContainer">
			<h1>
				Bonjour <span>{userData.userInfos.firstName}</span>
			</h1>
			<p>Félicitation ! vous avez explosé vos objectifs hier <img src={iconclap} className="iconClap" alt='bravo' /></p>
		</div>
	);
}

Title.propTypes={
	userData: propTypes.object.isRequired
}

export default Title;
