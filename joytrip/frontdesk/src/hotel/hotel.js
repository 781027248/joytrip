import React from "react";
import "./css/hotel.css";
import gl from "./img/gl.png";
import jg from "./img/jg.png";
import uicon from "./img/user.png";
import Hoteltitle from "./components/hotel_title";
import Phead from "../public/Phead.js";
import Pfoot from "../public/Pfoot.js";
import Hoteltop from "./components/hotel_searchbox.js";

export default class Hotel extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<Phead history={this.props.history} />
				<div className="ht-box">
					<div>订酒店</div>
					<Hoteltop history={this.props.history}/>
					<div className="ht-box-icon">
						<ul>
							<li>
								<img className="ht-box-icon-span1" src={gl} width="45" height="45"/>
								<div className="ht-box-icon-div">
									<h3>住宿攻略</h3>
									<p>区域攻略到特色主题，应有尽有</p>
								</div>
							</li>
							<li>
								<img className="ht-box-icon-span2" src={jg} width="45" height="45"/>
								<div className="ht-box-icon-div">
									<h3>专享价格</h3>
									<p>多平台价格对比，天天专享特惠</p>
								</div>
							</li>
							<li>
								<img className="ht-box-icon-span3" src={uicon} width="45" height="45"/>
								<div className="ht-box-icon-div">
									<h3>真实点评</h3>
									<p>超过100万真实用户点评和游记</p>
								</div>
							</li>
						</ul>
					</div>
					<div className="ht-box-title">主题住宿</div>
					<Hoteltitle  history={this.props.history}/>
					<div></div>
					<div></div>
				</div>
				<Pfoot />
			</>
		);
	}
}