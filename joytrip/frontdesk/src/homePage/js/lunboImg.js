import React from "react";
import { Carousel } from 'antd';
import { CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons';
import "../css/lunbo.css";
import img1 from "../lunboImg/lunbo02.jpg";
import img2 from "../lunboImg/lunbo03.jpg";
import img3 from "../lunboImg/lunbo04.jpg";
import img4 from "../lunboImg/lunbo05.jpg";
import img5 from "../lunboImg/lunbo06.png";

export default class Lunbo extends React.Component {
	constructor(){
		super();
	}
	render() {
		let srcArr = [img1, img2, img3, img4, img5];
		return (
			<div className="ph-lunboBac">
				<Carousel autoplay className="lunboImg" ref={dom => { this.img = dom; }} >
					<div>
						<div className="contentStyle"><img src={srcArr[0]} /></div>
					</div>
					<div>
						<div className="contentStyle"><img src={srcArr[1]} /></div>
					</div>
					<div>
						<div className="contentStyle"><img src={srcArr[3]} /></div>
					</div>
					<div>
						<div className="contentStyle"><img src={srcArr[4]} /></div>
					</div>				
				</Carousel>
				<div className="ph-jiantou">
					<div className="ph-left" onClick={() => {this.img.prev()}}><CaretLeftOutlined /></div>
					<div className="ph-right" onClick={()=>{this.img.next()}}><CaretRightOutlined /></div>
				</div>
			</div>
		);
	}
}