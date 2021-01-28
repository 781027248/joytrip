import React from "react";
import "../css/hotRecommend.css";
import img1 from "../img/1.png";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import { Carousel } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

export default class Lunbo extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="ph-hot">
				<div>
					<h1>热门路线</h1>
					<p>好路线那么多，我们为您精选，悦之行会越来越懂您</p>
				</div>
				<ul className="ph-hotul">
					<li className="ph-hotli1">
						<Carousel autoplay style={{ width: "794px" }} ref={dom => { this.img = dom; }} >
							<div>
								<img src={img1} style={{ width: "795px", height: " 446px" }}></img>
							</div>
							<div>
								<img src={img2} style={{ width: "795px", height: " 446px" }}></img>
							</div>
						</Carousel>
						<div className="ph-minjiantou">
							<div className="ph-minleft" onClick={() => { this.img.prev() }}><CaretLeftOutlined /></div>
							<div className="ph-minright" onClick={() => { this.img.next() }}><CaretRightOutlined /></div>
						</div>
						<div className="ph-minlun">
							<span className="ph-minlun1">￥23111起</span>
							<span>远征南极点 • 同眠帝企鹅之旅</span>
						</div>
					</li>
					<li className="ph-hotli2">
						<div className="ph-li2Info">
							<div className="ph-li2InfoBac">
								<span className="ph-li2Infosp1 ph-li2InfospZR">自然</span>
								<span className="ph-li2Infosp1 ph-li2Infosp2">人文</span>
								<p id="ph-li2InfoP1" className="ph-li2InfoXC">行程天数：8天/11天</p>
							</div>
						</div>
						<span className="ph-li2Infosp1 ph-li2Infosp3 ph-hoverbac">￥14699起</span>
						<img src={img3} className="miniImg"></img>
						<div className="ph-ztlxBac">
							<span className="ph-ztlxSp0 ph-ztlxSp1">主题旅行</span>
							<span className="ph-ztlxSp0 ph-ztlxSp2">嘉绒藏乡 • 川西丹巴漫游之旅</span>
							<span className="ph-ztlxSp0 ph-ztlxSp3">出行日期：2020年09月26日-2020年10月03日</span>
						</div>
					</li>
					<li className="ph-hotli2">
						<div className="ph-li2Info">
							<div className="ph-li2InfoBac">
								<span className="ph-li2Infosp1 ph-li2InfospZR">自然</span>
								<span className="ph-li2Infosp1 ph-li2InfospS">摄影</span>
								<span className="ph-li2Infosp1 ph-li2Infosp2">人文</span>
								<p id="ph-li2InfoP1" className="ph-li2InfoXC">行程天数：10天</p>
							</div>
						</div>
						<span className="ph-li2Infosp1 ph-li2Infosp3 ph-hoverbac">￥17800起</span>
						<img src={img4} className="miniImg"></img>
						<div className="ph-ztlxBac">
							<span className="ph-ztlxSp0 ph-ztlxSp1">主题旅行</span>
							<span className="ph-ztlxSp0 ph-ztlxSp2">油画之境 • 金秋南疆胡杨林行摄之旅</span>
							<span className="ph-ztlxSp0 ph-ztlxSp3">出行日期：2020年10月15日-2020年10月24日</span>
						</div>
					</li>
					<li className="ph-hotli2">
						<div className="ph-li2Info">
							<div className="ph-li2InfoBac">
								<span className="ph-li2Infosp1 ph-li2InfospZR">自然</span>
								<span className="ph-li2Infosp1 ph-li2Infosp2">人文</span>
								<p id="ph-li2InfoP1" className="ph-li2InfoXC">8天/11天</p>
							</div>
						</div>
						<span className="ph-li2Infosp1 ph-li2Infosp3 ph-hoverbac">￥14600起</span>
						<img src={img5} className="miniImg"></img>
						<div className="ph-ztlxBac">
							<span className="ph-ztlxSp0 ph-ztlxSp1">主题旅行</span>
							<span className="ph-ztlxSp0 ph-ztlxSp2">大漠金秋 • 穿越巴丹吉林之旅</span>
							<span className="ph-ztlxSp0 ph-ztlxSp3">出行日期：2020年10月09日-2020年10月16日</span>
						</div>
					</li>
					<li className="ph-hotli2">
						<div className="ph-li2Info">
							<div className="ph-li2InfoBac">
								<span className="ph-li2Infosp1 ph-li2InfospZR">自然</span>
								<span className="ph-li2Infosp1 ph-li2Infosp2">人文</span>
								<p id="ph-li2InfoP1" className="ph-li2InfoXC">行程天数：8天</p>
							</div>
						</div>
						<span className="ph-li2Infosp1 ph-li2Infosp3 ph-hoverbac">￥9980起</span>
						<img src={img6} className="miniImg"></img>
						<div className="ph-ztlxBac">
							<span className="ph-ztlxSp0 ph-ztlxSp1">主题旅行</span>
							<span className="ph-ztlxSp0 ph-ztlxSp2">寻茶访声 • 西双版纳探秘之旅</span>
							<span className="ph-ztlxSp0 ph-ztlxSp3">出行日期：2020年09月28日-2020年10月05日</span>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}