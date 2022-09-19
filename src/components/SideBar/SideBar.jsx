import yoga from "../../assets/yoga.svg"
import swim from "../../assets/swim.svg"
import bike from "../../assets/bike.svg"
import fitness from "../../assets/fitness.svg"
import "./SideBar.css";

/**
 *
 * @returns Affichage de la barre de côté
 */
function SideBar() {
	return (
    <aside className="sidebarContainer">
      <div className="sidebarIcons">
        <img src={yoga} alt="Yoga"/>
        <img src={swim} alt="Swim"/>
        <img src={bike} alt="Bike"/>
        <img src={fitness} alt="Fitness"/>
      </div>
      <div className="sidebarRights">Copyright, SportSee 2020</div>
    </aside>    
	)
}

export default SideBar;
