import React from "react";
import "./zhuti.css"
import img40 from ".././ljimg/img40.jpeg"
import img41 from ".././ljimg/img41.jpeg"
import img42 from ".././ljimg/img42.jpeg"
import img43 from ".././ljimg/img43.jpeg"
import img44 from ".././ljimg/img44.jpeg"
import img45 from ".././ljimg/img45.gif"
import img46 from ".././ljimg/img46.jpeg"
export default class Free extends React.Component{
	  constructor(props) {
	      super(props)
		  this.state={
		  	list:[
		  	{id:1,img:img41,dec:"成都直飞泰国甲米5-7天往返机票（春秋航空/四川航空+可选专车接机或送机/可选电话卡)",price:2240},
		  	{id:2,img:img42,dec:"优选品质酒店大集合·成都直飞芽庄6天5晚自由行（海量品质酒店任意选择+包机往返直飞+赠送签证办理+赠送当地接送机+赠送旅游意外险）",price:1480},
		  	{id:3,img:img43,dec:"西安直飞三亚5天4晚自由行（独享亚特兰蒂斯海景房+无限次畅玩水世界/水族馆+网红亲子/蜜月/家庭酒店任意组合+专车接送机+旅拍）",price:2808}
		  	]
	  }
	  }
	  show(){
	  	const result=this.state.list.map((item)=>{
	  	return <div key={item.id} className="lzhuti01" >
					<img src={item.img}/>
					<div className="lzhuti11">{item.dec}</div>
					<div className="lzhuti12">
					<span>{item.price}</span>
					<span>起</span>
					<span>店铺:江湖人</span>
					</div></div>
	  	});
	  	return result;
	  }
	  changeImg(e){
		  console.log(e.target.innerHTML)
		  if(e.target.innerHTML=="亲子同行"){
			 this.setState({
				list:[
					{id:4,img:img44,dec:"无边泳池海景酒店 武汉直飞普吉6天5晚自由行（芭东海滩+私家沙滩+泰式SPA+VIP专车接送+出境意外险+泰国电话卡+蜜月布置）",price:2540},
					{id:5,img:img45,dec:"亲子度假·成都往返新加坡6天5晚自由行（个签/团签快速出签+赠送接机+金沙酒店+圣淘沙酒店+多套餐搭配+可安排景点玩乐）",price:1540},
					{id:6,img:img46,dec:"武汉直飞长春/长白山5天4晚自由行（净月潭喜来登/万达度假区/酒店门对门直通车+温泉水乐园/不限次索道+度假助理/每日双早+免费接送机）",price:6240}
				]
			 })
		  }else{
			this.setState({
				list:[
					{id:7,img:img41,dec:"成都直飞泰国甲米5-7天往返机票（春秋航空/四川航空+可选专车接机或送机/可选电话卡)",price:2240},
					{id:8,img:img42,dec:"优选品质酒店大集合·成都直飞芽庄6天5晚自由行（海量品质酒店任意选择+包机往返直飞+赠送签证办理+赠送当地接送机+赠送旅游意外险）",price:1480},
					{id:9,img:img43,dec:"西安直飞三亚5天4晚自由行（独享亚特兰蒂斯海景房+无限次畅玩水世界/水族馆+网红亲子/蜜月/家庭酒店任意组合+专车接送机+旅拍）",price:2808}
				]
			})
		  }
	  }
		render(){
				return (
				<>
				<div className="lzhutibig">
				<div className="lzhuti">
				<span>主题推荐</span>
				{/* 分类文字 */}
				<div className="lzhuti1" onMouseOver={this.changeImg.bind(this)}>
				<div>海岛特惠</div>
				<div>亲子同行</div>
				<div>吃货聚集地</div>
				</div>
				</div>
				{/* 下面的文字和图片 */}
				<img src={img40} className="lzhutiimg" />
				<div className="lzhuti2">
					{this.show()}
				</div>
				</div>
				</>
				);
			}
	}