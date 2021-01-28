import React from "react";
import "./hotsell.css"
import aozhou from ".././ljimg/aozhou.jpg"
import xianggang from ".././ljimg/xianggang.jpg"
import img1 from ".././ljimg/img1.jpeg"
import img2 from ".././ljimg/img2.jpeg"
import img3 from ".././ljimg/img3.jpeg"
import img4 from ".././ljimg/img4.jpeg"
import img5 from ".././ljimg/img5.jpeg"
import img6 from ".././ljimg/img6.jpeg"
import img7 from ".././ljimg/img7.jpeg"
import img8 from ".././ljimg/img8.jpeg"

import {
UndoOutlined 
} from '@ant-design/icons';
export default class Free extends React.Component{
	constructor(props) {
	    super(props)
		this.state={
			list:[
			{id:1,img:img1,dec:"美到窒息的海+海岛控的梦想之地·深圳往返大溪地8天6晚自由行（免费行程路书+咨询可领优惠券+24小时中文服务+全程管家服务+可开免签证明+可安排当地游",price:36999},
			{id:1,img:img2,dec:"杭州直飞长春/长白山5天4晚自由行（净月潭喜来登/万达度假区/酒店门对门直通车+温泉水乐园/不限次索道+度假助理/每日双早+免费接送机）",price:16999},
			{id:1,img:img3,dec:"赏雪樱花·重庆直飞日本本州经典纯玩樱花祭6日跟团游（入住特色温泉酒店+冰雪乐园滑雪体验+特色日式料理+东京充足自由时间血拼+全程纯玩零自费）",price:6999},
			{id:1,img:img4,dec:"武汉直飞厦门4天3晚自由行（五星/海景/网红/等多款酒店任选+住一晚鼓浪屿磐诺假日·自助早餐+专车接送机+赠鼓浪屿船票+帆船出海体验/鹭江夜游）",price:26999}
			]

		}
	}
	show(){
		const result=this.state.list.map((item)=>{
		return <div className="lhot01"><img src={item.img}/><div className="lhot11">{item.dec}</div><div className="lhot12">
		<span>￥{item.price}</span>
		<span>起</span>
		<span>店铺:奢游国际</span>
		</div></div>
		});
		return result;
	}
     changePic(){
			this.setState({
				list:[
				{id:1,img:img5,dec:"春节特惠·郑州直飞长滩岛6天往返自由行(泛太平洋航空直飞+可指定天堂花园/升级5星henann+赠接送机及旅游意外险+可代订当地游）",price:16999},
				{id:1,img:img6,dec:"城行记·郑州直飞丽江5天4晚纯玩自由行（网红客栈+景区专线车+丽江特色餐+丽江专车1天+东巴入园门票+打卡大理网红餐馆+线路随心搭配）",price:999},
				{id:1,img:img7,dec:"西安飞泰国·曼谷+普吉岛+斯米兰7天6晚自由行（专车接送机+可私人定制+网红/亲子/蜜月+皇帝岛/大小皮皮岛/泰式SPA/西蒙人妖秀+资深玩家教你吃喝玩乐）",price:7999},
				{id:1,img:img8,dec:"夏不为利☆成都直飞丽江6天5晚 纯玩自由行（赠大理旅拍/Smart环海自驾+全程专车服务+古城住宿+免费行程攻略设计+大理/丽江/泸沽湖/香格里拉 随心游玩自由搭配+全天24小时管家服务）",price:899},
				]
			})
	}
	render(){
		return (
		<>
		<div className="lhot">
		<span>本周热销榜</span><span>大家都在买</span>
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