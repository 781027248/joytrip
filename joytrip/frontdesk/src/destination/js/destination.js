import React from "react";
import Phead from  '../../public/Phead.js';
import Pfoot from  '../../public/Pfoot.js';
import img1 from "../img/1.jpeg";
import "../css/destination.css";
import PopularDes from "../js/popularDes.js";

export default class Destination extends React.Component {
	render() {
		return (
			<>
				<Phead history={this.props.history} />
				<div>
					<div className="des-top">
						<img src={img1} className="des-top-img"></img>
						<div className="des-top-cont">
							<span className="des-top-cont1">17</span>
							<span className="des-top-cont2">/Sep.2020</span>
							<h2>这一次，我不再是渝蓉城过客。（8日 | 魔幻重庆，巴适成都 | 拍照游玩攻略）</h2>
						</div>
					</div>
					<PopularDes></PopularDes>
				</div>
				<Pfoot />
			</>
		);
	}
}