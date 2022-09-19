import { useState, useEffect } from "react";
import { USER_MAIN_DATA } from "../data/mockedData"

/**
 *
 * @param {string} url du fichier json des tables de logements
 * @returns locationList Table des logements
 * 					isLoading boolean d'indication de chargement en cours ou terminé
 * 					error boolean d'indication d'erreur de lecture des données
 */
function GetUserData( id, datatype ) {

	let userData = "";

	console.log(id, datatype);

//	useEffect(() => {

			switch (datatype.toString()) {
				case "user_main_data":
					const userDatas = USER_MAIN_DATA;
					console.log("switch: ", userDatas);
					userData =  userDatas.find(element => (element.id).toString() === id);
					console.log("switch: ", userData);
					break;
				default:
					console.log("switch default");
					break;
			}

//	}, [id, datatype, datasMocked]);
	return JSON.stringify(userData);

}

export default GetUserData;