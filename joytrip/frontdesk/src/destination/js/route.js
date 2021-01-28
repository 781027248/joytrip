import React from "react";
import "../css/route.css";
export default class popularDes extends React.Component {
	constructor() {
		super();
		this.state = { pname: "北京" };
	}
	render() {
		return (
			<div className="des-route">
				<div>{this.state.pname}</div>
				<ul className="des-routeUl">
					<li className="des-routeli">
						<div className="des-routeli-div">
						<span className="des-num">1</span>
						<span className="des-numR">大理3日线路</span>
						</div>						
					</li>
					<li></li>
				</ul>
			</div>
		)
	}
}