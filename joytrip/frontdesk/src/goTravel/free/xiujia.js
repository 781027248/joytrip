import React from "react";
import "./hotsell.css"
import img9 from ".././ljimg/img9.gif"
import img10 from ".././ljimg/img10.jpeg"
import img11 from ".././ljimg/img11.jpeg"
import img12 from ".././ljimg/img12.jpeg"
import img13 from ".././ljimg/img13.jpeg"
import img14 from ".././ljimg/img14.jpeg"
import img15 from ".././ljimg/img15.jpeg"
import img16 from ".././ljimg/img16.jpeg"

import {
UndoOutlined 
} from '@ant-design/icons';
export default class Free extends React.Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
			{id:1,img:img9,dec:"杭州到哈尔滨冰雪大世界/亚布力滑雪+雪乡5天4晚自由行（赠送项目2选1+雪乡2日自由行含门票住独卫火炕+市中心酒店任选+送4次早餐+接送机）",price:3260},
			{id:1,img:img10,dec:"成都出发摩洛哥13天10晚自由行（住网红民宿Riad+可订全程独立包车+住沙漠豪华帐篷仰望浩瀚星空+品薄荷茶尝当地美食）",price:10980},
			{id:1,img:img11,dec:"成都往返北海5天4晚自由行+首尾北海+2晚涠洲岛+多酒店套餐海景房可选+专车接送机（含往返涠洲岛船票+上岛门票）",price:2760},
			{id:1,img:img12,dec:"春节立减千元+一价全包·马尔代夫鲁滨逊诺努岛7天5晚自由行（亲子精选岛+优质浮潜/沙滩A级+私人泳池+七星泻湖环礁+下单立减）",price:3580}
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
				{id:1,img:img13,dec:"双节钜惠♥西安直飞丽江7天纯玩自由行（全程专车服务+赠大理Smart环海自驾/吉普旅拍+大理/丽江/泸沽湖/香格里拉 随心游玩自由搭配+高端住宿+24小时管家服务+vip量身设计旅游攻略）",price:2199},
				{id:1,img:img14,dec:"【嗨玩迪士尼/环球影城】重庆直飞日本三古都双乐园6日游（赠送WiFi+含签证+日式温泉酒店+京都千鸟居+奈良喂鹿+江之岛电铁+亲子必选）",price:3451},
				{id:1,img:img15,dec:"春节去哪·云南自由行·武汉直飞丽江+大理/泸沽湖/香格里拉5天自由行（住丽江网红客栈+丽江自由用车+古城旅拍+丰富行程自由搭配+不止机加酒）",price:4567},
				{id:1,img:img16,dec:"错峰出行· 西安直飞苏梅岛6天自由行（独栋泳池别墅/网红酒店+赠环岛游/涛岛游+预约网红帐篷餐厅/下午茶/漂浮早餐+可订曼谷/普吉连线）",price:6666},
				]
			})
	}
	render(){
		return (
		<>
		<div className="lhot">
		<span>休假去哪儿</span><span>大家都在看</span>
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