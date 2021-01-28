import React from "react";
import "../css/tabControl.css";

export default class Lunbo extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="ph-tab">
				<ul className="ph-tabul">
					<li id="ph-li1">
						<span className="ph-hoverB"></span>
						<i className="ph-ico1 ph-i"></i>
						<span>自由行</span>
					</li>
					<li id="ph-li2">
						<span className="ph-hoverB"></span>
						<i className="ph-ico2 ph-i"></i>
						<span>跟团游</span>
					</li>
					<li id="ph-li3">
						<span className="ph-hoverB"></span>
						<i className="ph-ico3 ph-i"></i>
						<span>当地游</span>
					</li>
					<li id="ph-li4">
						<span className="ph-hoverB"></span>
						<i className="ph-ico4 ph-i"></i>
						<span>机票</span>
					</li>
					<li id="ph-li5">
						<span className="ph-hoverB"></span>
						<i className="ph-ico5 ph-i"></i>
						<span>订酒店</span>
					</li>
					<li id="ph-li6">
						<span className="ph-hoverB"></span>
						<i className="ph-ico6 ph-i"></i>
						<span>定制游</span>
					</li>
				</ul>
			</div>
		)
	}
}