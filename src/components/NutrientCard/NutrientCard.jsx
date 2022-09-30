import caloIcon from "../../assets/calories-icon.svg";
import proteinIcon from "../../assets/protein-icon.svg";
import glucidIcon from "../../assets/carbs-icon.svg";
import lipidIcon from "../../assets/fat-icon.svg";
import propTypes from "prop-types";
import "./NutrientCard.css";

const ICON_ARRAY = {
	Calories: caloIcon,
	Proteines: proteinIcon,
	Glucides: glucidIcon,
	Lipides: lipidIcon,
};

const UNIT_NUTRIENT = {
	Calories: "kCal",
	Proteines: "g",
	Glucides: "g",
	Lipides: "g",
};

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function NutrientCard({ item, data }) {
	return (
		<div className="nutrientCard">
			<img src={ICON_ARRAY[item]} width="60" height="60" alt="icone nutriment" />
			<div>
				<p>
					{formatNumber(data)}
					{UNIT_NUTRIENT[item]}
				</p>
				<p>
					<span>{item}</span>
				</p>
			</div>
		</div>
	);
}

NutrientCard.propTypes = {
	item: propTypes.string.isRequired,
	data: propTypes.number.isRequired,
};

export default NutrientCard;
