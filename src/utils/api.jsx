import { useState, useEffect } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedData";


export const MOCKED_DATA = false;

/**
 *
 * @param {Number} id The user Id to fetch. fetch is either from mocked data or from urls depending on 'mocked' value
 * @returns {Object} userMainData, userActivityData, userSessionsData, userPerformanceData: data retrieved
 * 					{Boolean} isLoading indicates data is being retrieved
 * 					{Boolean} error indicates an error occured during data retrieve
 */
export function useFetchData(id) {
	const server = "http://localhost:3000";

	const [userMainData, setUserMainData] = useState({});
	const [userActivityData, setUserActivityData] = useState({});
	const [userSessionsData, setUserSessionsData] = useState({});
	const [userPerformanceData, setUserPerformanceData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	function isValidData(userData) {
		if (!userData[0].data || !userData[1].data || !userData[2].data || !userData[3].data) {
			return false;
		}
		if (userData[0] === "can not get user" || userData[1] === "can not get user" || userData[2] === "can not get user" || userData[3] === "can not get user") {
			return false;
		}
		return true;
	}

	useEffect(() => {
		if (MOCKED_DATA === true) {
			const mainDataMocked = USER_MAIN_DATA;
			const activityDataMocked = USER_ACTIVITY;
			const sessionsDataMocked = USER_AVERAGE_SESSIONS;
			const performanceDataMocked = USER_PERFORMANCE;

			const userMainDataMocked = mainDataMocked.find((element) => element.id.toString() === id);
			const userActivityDataMocked = activityDataMocked.find((element) => element.userId.toString() === id);
			const userSessionsDataMocked = sessionsDataMocked.find((element) => element.userId.toString() === id);
			const userPerformanceDataMocked = performanceDataMocked.find((element) => element.userId.toString() === id);

			if (!userMainDataMocked || !userMainDataMocked || !userMainDataMocked || !userMainDataMocked) {
				setError(true);
			} else {
				setUserMainData(userMainDataMocked);
				setUserActivityData(userActivityDataMocked);
				setUserSessionsData(userSessionsDataMocked);
				setUserPerformanceData(userPerformanceDataMocked);

				setLoading(false);
			}
		} else {
			const urlMainData = server + "/user/" + id;
			const urlActivityData = server + "/user/" + id + "/activity";
			const urlSessionsData = server + "/user/" + id + "/average-sessions";
			const urlPerformanceData = server + "/user/" + id + "/performance";

			Promise.all([fetch(urlMainData), fetch(urlActivityData), fetch(urlSessionsData), fetch(urlPerformanceData)])
				.then((res) => Promise.all(res.map((r) => r.json())))
				.then((mainData) => {
					if (isValidData(mainData)) {
						setUserMainData(mainData[0].data);
						setUserActivityData(mainData[1].data);
						setUserSessionsData(mainData[2].data);
						setUserPerformanceData(mainData[3].data);
					} else {
						setError(true);
					}
				})
				.catch((err) => {
					console.log(err);
					setError(true);
				})
				.finally(() => setLoading(false));
		}
	}, [id]);

	return { userMainData, userActivityData, userSessionsData, userPerformanceData, isLoading, error };
}

export default useFetchData;
