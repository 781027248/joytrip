import React from "react";
import "./hotsell.css"
import img33 from ".././ljimg/img33.png"
import img34 from ".././ljimg/img34.gif"
import img35 from ".././ljimg/img35.jpeg"
import img36 from ".././ljimg/img36.jpeg"
import img37 from ".././ljimg/img37.png"
import img38 from ".././ljimg/img38.jpeg"
import img39 from ".././ljimg/img39.jpeg"
import img40 from ".././ljimg/img40.gif"

import {
UndoOutlined 
} from '@ant-design/icons';
export default class Free extends React.Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
			{id:1,img:img33,dec:"武汉直飞成都+都青/峨乐/九寨5天4晚自由行（三大主题任选+川剧变脸/熊猫门票/伴手礼3选1+景区直通车）",price:2240},
			{id:2,img:img34,dec:"西安直飞迪拜5晚7天自由行(帆船酒店/棕榈岛亚特兰蒂斯/VIP中文接送机/哈利法塔/冲沙/酒店混搭入住/阿布扎比畅玩）",price:1480},
			{id:3,img:img35,dec:"杭州直飞厦门4天3晚自由行（五星/海景/网红/等多款酒店任选+住一晚鼓浪屿磐诺假日·自助早餐+专车接送机+赠鼓浪屿船票+帆船出海体验/鹭江夜游）",price:2808},
			{id:4,img:img36,dec:"【春节火热预定中·直飞】成都直飞日本本州7天6晚半自助游（升级日式温泉酒店+银座+浅草寺+秋叶原+奈良公园+大阪城公园+富士山）",price:3580}
			]

		}
	}
	show(){
		const result=this.state.list.map((item)=>{
		return <div key={item.id} className="lhot01"><img src={item.img}/><div className="lhot11">{item.dec}</div><div className="lhot12">
		<span>￥{item.price}</span>
		<span>起</span>
		<span>店铺:丝路假期</span>
		</div></div>
		});
		return result;
	}
     changePic(){
			this.setState({
				list:[
				{id:5,img:img37,dec:"网红实力派·南京直飞丽江+大理/泸沽湖/香格里拉6天自由行（打卡天空之境+多项目赠送+可升级包车+赠景区直通车）",price:2699},
				{id:6,img:img38,dec:"全年切位·成都直飞布拉格11-12天往返含税机票（行李托运46KG+可安排全国联运+赠送Wi-Fi）",price:6491},
				{id:7,img:img39,dec:"双节钜惠♥长沙直飞丽江7天纯玩自由行（全程专车服务+赠大理Smart环海自驾/吉普旅拍+大理/丽江/泸沽湖/香格里拉 随心游玩自由搭配+高端住宿+24小时管家服务+vip量身设计旅游攻略）",price:777},
				{id:8,img:img40,dec:"错峰游·西安直飞苏梅岛6天5晚自由行(网红海景酒店/私人泳池独栋别墅/W酒店下午茶/南园岛涛岛浮潜/可搭配旅拍套餐/VIP接送机/全程微管家服务)",price:524},
				]
			})
	}
	render(){
		return (
		<>
		<div className="lhot">
		<span>扫货圣地</span><span>大家都在看</span>
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