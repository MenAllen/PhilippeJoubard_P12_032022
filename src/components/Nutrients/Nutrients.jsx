import React from "react";
import useFetchData from "../../utils/api";
import { LoaderWrapper, Loader } from "../../utils/Atoms";
import NutrientCard from "../NutrientCard/NutrientCard";
import propTypes from 'prop-types';
import "./Nutrients.css";

function Nutrients({ id }) {

	const { userData, isLoading, error } = useFetchData(id, "user_main_data");

	if (error) {
		return <span>Oups il y a eu un problème</span>;
	}

	return isLoading ? (
		<LoaderWrapper>
		<Loader />
	</LoaderWrapper>
		) : (
		<div className="nutrientsContainer">
      <NutrientCard item="Calories" data={userData.keyData.calorieCount} />
      <NutrientCard item="Proteines" data={userData.keyData.proteinCount} />
      <NutrientCard item="Glucides" data={userData.keyData.carbohydrateCount} />
      <NutrientCard item="Lipides" data={userData.keyData.lipidCount} />
		</div>
	);
}

Nutrients.propTypes={
	id: propTypes.number.isRequired
}

export default Nutrients;