import React from "react";
import "../css/moreRoutes.css";
import { Carousel } from 'antd';
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";

export default class MoreRoutes extends React.Component {
	constructor() {
		super();
		this.state = {
			imgArr: [img7, img8, img9]
		}
	}

	render() {
		return (
			<div>
				<div className="ph-routes">更多路线</div>
				<Carousel autoplay className="mr-mylunbo">
					<div>
						<div className="mr-lunbo">
							<img src={this.state.imgArr[0]}></img>
							<div className="mr-character">
								<p className="mr-characterP">旅行百科</p>
								<p>去非洲开开眼界想看角马大迁徙，是去肯尼亚看好，还是去坦桑尼亚看好？</p>
								<span className="mr-characterSP">|</span>
								<p>开始探索</p>
							</div>
						</div>
					</div>
					<div>
						<div className="mr-lunbo">
							<img src={this.state.imgArr[1]}></img>
							<div className="mr-character">
								<p className="mr-characterP">旅行百科</p>
								<p>不晕船的南极邮轮就在这里！</p>
								<span className="mr-characterSP">|</span>
								<p>开始探索</p>
							</div>
						</div> 
					</div>
					<div>
						<div className="mr-lunbo">
							<img src={this.state.imgArr[2]}></img>
							<div className="mr-character">
								<p className="mr-characterP">旅行百科</p>
								<p>悦之行为什么要做国际游学？</p>
								<span className="mr-characterSP">|</span>
								<p>开始探索</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>

		)
	}
}