import React from "react";
import NutrientCard from "../NutrientCard/NutrientCard";
import propTypes from 'prop-types';
import "./Nutrients.css";

function Nutrients({ userData }) {

	return (
		<div className="nutrientsContainer">
      <NutrientCard item="Calories" data={userData.keyData.calorieCount} />
      <NutrientCard item="Proteines" data={userData.keyData.proteinCount} />
      <NutrientCard item="Glucides" data={userData.keyData.carbohydrateCount} />
      <NutrientCard item="Lipides" data={userData.keyData.lipidCount} />
		</div>
	)
}

Nutrients.propTypes={
	userData: propTypes.object.isRequired
}

export default Nutrients;