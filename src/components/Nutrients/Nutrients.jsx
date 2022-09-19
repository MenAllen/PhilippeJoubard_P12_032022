import { USER_MAIN_DATA } from "../../data/mockedData";
import NutrientCard from "../NutrientCard/NutrientCard"
import "./Nutrients.css";

function Nutrients({ id }) {
	const usermaindata = USER_MAIN_DATA;

	const thisUserData = usermaindata.find((element) => element.id.toString() === id);
	console.log(id, thisUserData.keyData);

	return (
		<div className="nutrientsContainer">
      <NutrientCard item="Calories" data={thisUserData.keyData.calorieCount} />
      <NutrientCard item="Proteines" data={thisUserData.keyData.proteinCount} />
      <NutrientCard item="Glucides" data={thisUserData.keyData.carbohydrateCount} />
      <NutrientCard item="Lipides" data={thisUserData.keyData.lipidCount} />
		</div>
	);
}

export default Nutrients;