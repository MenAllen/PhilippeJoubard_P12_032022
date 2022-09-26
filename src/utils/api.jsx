import { useState, useEffect } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedData";

/**
 * 
 * @param {number} id : The user Id to fetch. fetch is either from mocked data or from urls depending on 'mocked' value
 * @returns {objects} userMainData, userActivityData, userSessionsData, userPerformanceData: data retrieved
 * 					{boolean} isLoading: indicates data is being retrieved
 * 					{boolean} error: indicates an error occured during retrieve
 */
export function useFetchData(id) {

	const mocked = false;
	const server = "http://localhost:3000";

	const [userMainData, setUserMainData] = useState({});
	const [userActivityData, setUserActivityData] = useState({});
	const [userSessionsData, setUserSessionsData] = useState({});
	const [userPerformanceData, setUserPerformanceData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log("useEffect called");
		if (mocked === true) {
			const mainDataMocked = USER_MAIN_DATA;
			const activityDataMocked = USER_ACTIVITY;
			const sessionsDataMocked = USER_AVERAGE_SESSIONS;
			const performanceDataMocked = USER_PERFORMANCE;

			const userMainDataMocked = mainDataMocked.find((element) => element.id.toString() === id);
			const userActivityDataMocked = activityDataMocked.find((element) => element.userId.toString() === id);
			const userSessionsDataMocked = sessionsDataMocked.find((element) => element.userId.toString() === id);
			const userPerformanceDataMocked = performanceDataMocked.find((element) => element.userId.toString() === id);

			if ((!userMainDataMocked) || (!userMainDataMocked) || (!userMainDataMocked) || (!userMainDataMocked)) {
				setError(true)
			}
		
			setUserMainData(userMainDataMocked);
			setUserActivityData(userActivityDataMocked);
			setUserSessionsData(userSessionsDataMocked);
			setUserPerformanceData(userPerformanceDataMocked);

			setLoading(false);
		} else {

			const urlMainData = server + "/user/" + id;
			const urlActivityData = server + "/user/" + id + "/activity";
			const urlSessionsData = server + "/user/" + id + "/average-sessions";
			const urlPerformanceData = server + "/user/" + id + "/performance";
			console.log("urlPerformanceData: ", urlPerformanceData);

			if ((!urlMainData) || (!urlActivityData) || (!urlSessionsData) || (!urlPerformanceData)) {
			  setError(true)
			}
				
			Promise.all([
					fetch(urlMainData),
					fetch(urlActivityData),
					fetch(urlSessionsData),
					fetch(urlPerformanceData)])			
					.then(res =>Promise.all(res.map(r=> r.json())))
					.then((mainData) => {
						setUserMainData(mainData[0].data);
						setUserActivityData(mainData[1].data);
						setUserSessionsData(mainData[2].data);
						setUserPerformanceData(mainData[3].data);
						console.log("Promise.all: ", mainData)
					})
					.catch(error => { console.log(error); setError(true)})
					.finally(() => setLoading(false))
		}

	},[])

	return { userMainData, userActivityData, userSessionsData, userPerformanceData, isLoading, error };
}

export default useFetchData;
