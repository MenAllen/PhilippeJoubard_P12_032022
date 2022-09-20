import { useState, useEffect } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedData";

/**
 *
 * @param {string} url du fichier json des tables de logements
 * @returns locationList Table des logements
 * 					isLoading boolean d'indication de chargement en cours ou terminé
 * 					error boolean d'indication d'erreur de lecture des données
 */
export function useFetchData(id, dataType) {

	console.log("useFetchData: ", dataType);

	const mocked = false;
	const server = "http://localhost:3000";

	const [userData, setUserData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log('useEffect called');
		if (mocked === true) {

			const MOCK_BY_DATATYPE = {
				user_main_data: USER_MAIN_DATA,
				user_activity: USER_ACTIVITY,
				user_sessions: USER_AVERAGE_SESSIONS,
				user_performance: USER_PERFORMANCE,
			};		
	
			const userDataMocked = MOCK_BY_DATATYPE[dataType];
			const thisUserDataMocked = userDataMocked.find((element) => element.id.toString() === id);

			console.log("userDataMocked: ", userDataMocked, thisUserDataMocked);

			setUserData(thisUserDataMocked);
			setLoading(false);
		} else {

			const URL_BY_DATATYPE = {
				user_main_data: server + "/user/" + id,
				user_activity: server + "/user/" + id + "/activity",
				user_sessions: server + "/user/" + id + "/average-sessions",
				user_performance: server + "/user/" + id + "/performance"
			};

			let url = URL_BY_DATATYPE[dataType];
			console.log(url);
		
			if (!url) return;

			async function fetchData(url) {
				try {
					const response = await fetch(url);
					const receivedData = await response.json();
					console.log("receivedData: ", receivedData);
					setUserData(receivedData.data);
					setLoading(false);
				} catch (err) {
					console.log(err);
					setError(true);
				} finally {
					setLoading(false);
				}
			}
			fetchData(url);
		}
	}, []);

	console.log("userData: ", userData);
	return { userData, isLoading, error };
}

export default useFetchData;

