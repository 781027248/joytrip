import React from "react";
import "./personalCenter.css";
import Nav from "./nav/nav.js";
import Pfoot from  "../public/Pfoot.js";
import Pcontent from "./content/pcontent.js";
import Peuserctrl from "./content/peuserctrl.js";
export default class PersonalCenter extends React.Component {
	
	render() {
		return (
			<>
				<Nav history={this.props.history} />
				<Pcontent />
				<div className="container pe-box">
					<Peuserctrl />
				</div>
				<Pfoot />
			</>
		);
	}
}