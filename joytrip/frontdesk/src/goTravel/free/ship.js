import React from "react";
import "./hotsell.css"
import img25 from ".././ljimg/img25.png"
import img26 from ".././ljimg/img26.png"
import img27 from ".././ljimg/img27.jpeg"
import img28 from ".././ljimg/img28.jpeg"
import img29 from ".././ljimg/img29.jpeg"
import img30 from ".././ljimg/img30.jpeg"
import img31 from ".././ljimg/img31.jpeg"
import img32 from ".././ljimg/img32.jpeg"

import {
UndoOutlined 
} from '@ant-design/icons';
export default class Free extends React.Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
			{id:1,img:img25,dec:"【歌诗达邮轮赛琳娜号】天津往返日本6天5晚之旅（消年假的看这里+好礼相送+至高抵扣100元+跨年/春节航次+亲子爸妈游+日本免签+儿童梦幻乐园）",price:1860},
			{id:1,img:img26,dec:"【皇家加勒比邮轮海洋量子号】天津往返日本5-9天游（预定可给房间号+5-6月航次出发前7天无忧退改+定金3倍膨胀+德云社相声航次531 621 828）",price:2980},
			{id:1,img:img27,dec:"【星梦邮轮探索梦号】天津出发日本5-6天游轮之旅（五一/端午低价预售+免签游日本+赠岸上观光+亲子爸妈游）",price:2608},
			{id:1,img:img28,dec:"东北客人看这里【中华泰山号】大连往返日本5天4晚春节航次邮轮游（下单至高立减2000元/间+平价中得战斗机+只要护照+人人都可出国游+邮轮游+吃喝玩乐一条龙）",price:3580}
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
				{id:1,img:img29,dec:"【皇家加勒比游轮海洋光谱号】上海往返日本5-8天邮轮之旅（暑期提前购+暑期可免费赠送岸上自由行+赠送岸上wifi+同程包船）",price:1699},
				{id:1,img:img30,dec:"国产新船【星旅远洋邮轮鼓浪屿号】上海往返日本邮轮游5天4晚游",price:3491},
				{id:1,img:img31,dec:"【咨询下单立减300】星梦邮轮世界梦号广州-香港-广州3天2晚（豪华游亲子度假）",price:17777},
				{id:1,img:img32,dec:"【歌诗达邮轮威尼斯号-品牌直营】深圳往返日本5-6天邮轮旅行（邮轮免签+轻松出行+丰富美食+浪漫之旅）",price:6524},
				]
			})
	}
	render(){
		return (
		<>
		<div className="lhot">
		<span>邮轮度假</span><span>大家都在看</span>
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