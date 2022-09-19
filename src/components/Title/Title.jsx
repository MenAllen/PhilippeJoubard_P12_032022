import { USER_MAIN_DATA } from "../../data/mockedData";
import iconclap from "../../assets/iconclap.png";
import "./Title.css";

function Title({ id }) {
	const usermaindata = USER_MAIN_DATA;

	const thisUserData = usermaindata.find((element) => element.id.toString() === id);
	console.log(id, thisUserData);

	return (
		<div className="titleContainer">
			<h1>
				Bonjour <span>{thisUserData.userInfos.firstName}</span>
			</h1>
			<p>Félicitation ! vous avez explosé vos objectifs hier <img src={iconclap} className="iconClap" alt='bravo' /></p>
		</div>
	);
}

export default Title;
