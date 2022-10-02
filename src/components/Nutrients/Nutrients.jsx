import React from "react";
import NutrientCard from "../NutrientCard/NutrientCard";
import propTypes from "prop-types";
import "./Nutrients.css";

/**
 *  NutrientCard is a React component in charge of displaying the 4 nutrients measurements of each user:
 *  calories, proteins, carbohydrate & lipids
 *  
 *  @prop {Object} userData containing keyData object :
 *		{ calorieCount: 1930,
 *		proteinCount: 155,
 *		carbohydrateCount: 290,
 *		lipidCount: 50 }
 *  @returns a div with 4 NutritienCard components
 */
function Nutrients({ userData }) {
	return (
		<div className="nutrientsContainer">
			<NutrientCard item="Calories" data={userData.keyData.calorieCount} />
			<NutrientCard item="Proteines" data={userData.keyData.proteinCount} />
			<NutrientCard item="Glucides" data={userData.keyData.carbohydrateCount} />
			<NutrientCard item="Lipides" data={userData.keyData.lipidCount} />
		</div>
	);
}

Nutrients.propTypes = {
	userData: propTypes.object.isRequired,
};

export default Nutrients;
