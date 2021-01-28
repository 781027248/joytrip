import React from "react";
import "./hotsell.css"
import img17 from ".././ljimg/img17.jpeg"
import img18 from ".././ljimg/img18.gif"
import img19 from ".././ljimg/img19.gif"
import img20 from ".././ljimg/img20.jpeg"
import img21 from ".././ljimg/img21.jpeg"
import img22 from ".././ljimg/img22.jpeg"
import img23 from ".././ljimg/img23.gif"
import img24 from ".././ljimg/img24.jpeg"

import {
UndoOutlined 
} from '@ant-design/icons';
export default class Free extends React.Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
			{id:1,img:img17,dec:"春节亲子惠~即买即省·成都出发马尔代夫K岛/库拉玛提岛7天自由行（浮潜圣地+按摩浴缸+可升级一价全包+漂浮早餐）",price:13260},
			{id:1,img:img18,dec:"6大免费福利任选·出海潜水/96h自驾车/自助晚餐·杭州直飞三亚5天自由行（亲子/蜜月/网红多酒店可选+含早餐+接送机+旅拍照）",price:980},
			{id:1,img:img19,dec:"错峰游·西安直飞普吉岛6天4晚自由行(无敌海景酒店/网红无边泳池/婚拍旅拍套餐/赠泰国电话卡/Simon人妖秀门票/泰式spa/江西冷购物)",price:260},
			{id:1,img:img20,dec:"【刷爆朋友圈·随心打卡亚特兰蒂斯】亲子蜜月·成都直飞三亚5天4晚自由行（无边泳池/自驾/网红景点一日游/旅拍/出海游艇任选+含早专车接送机+航班可选）",price:13580}
			]

		}
	}
	show(){
		const result=this.state.list.map((item)=>{
		return <div className="lhot01"><img src={item.img}/><div className="lhot11">{item.dec}</div><div className="lhot12">
		<span>￥{item.price}</span>
		<span>起</span>
		<span>店铺:乐飞假期</span>
		</div></div>
		});
		return result;
	}
     changePic(){
			this.setState({
				list:[
				{id:1,img:img21,dec:"和你去看唯美星空·重庆直飞巴厘岛7天6晚自由行（星空泡泡屋+网红悬崖/海景/田园酒店混搭+专车接送机+赠旅游人身意外伤害险+可订网红秋千/漂浮餐+可全国出发）",price:2199},
				{id:1,img:img22,dec:"【赠送玩海项目】南京飞三亚5天自由行（直升飞机体验/帆船出海/亚龙湾潜水/亚特兰蒂斯水世界+水族馆+无边泳池+专车接机+三亚攻略）",price:3451},
				{id:1,img:img23,dec:"杭州直飞塞班岛5天4晚自由行（纯玩不进店+赠接送机+北部观光+畅游军舰岛+2个正餐+导游服务+赠保险）",price:4567},
				{id:1,img:img24,dec:"西安直飞三亚5天4晚自由行（独享亚特兰蒂斯海景房+无限次畅玩水世界/水族馆+网红亲子/蜜月/家庭酒店任意组合+专车接送机+旅拍）",price:6666},
				]
			})
	}
	render(){
		return (
		<>
		<div className="lhot">
		<span>和你去看海</span><span>大家都在看</span>
		<span onClick={this.changePic.bind(this)}><UndoOutlined />换一换</span>
		</div>
		{/* 图片 */}
	    <div className="lhot1"> 
		{this.show()}	
	    </div>
		</>
		);
	}
}