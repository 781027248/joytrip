import React from "react";
import "./zhuti.css"
import img48 from ".././ljimg/img48.jpeg"
import img49 from ".././ljimg/img49.jpeg"
import img50 from ".././ljimg/img50.jpeg"
import img51 from ".././ljimg/img51.jpeg"
import img52 from ".././ljimg/img52.jpeg"
import img53 from ".././ljimg/img53.png"
import img47 from ".././ljimg/img47.jpeg"
export default class Free extends React.Component{
	  constructor(props) {
	      super(props)
		  this.state={
		  	list:[
		  	{id:1,img:img48,dec:"错峰出行·上海出发沙巴6天自由行（可安排沙巴+邦邦岛+卡帕莱度假村等+酒店任选+多酒店升级+丰盛早餐）",price:4199},
		  	{id:2,img:img49,dec:"武汉往返苏梅岛+涛岛6天5晚自由行（独栋泳池别墅/网红酒店+赠环岛游/涛岛游+预约网红帐篷餐厅/下午茶/漂浮早餐+可订曼谷/普吉连线）",price:2299},
		  	{id:3,img:img50,dec:"【春夏特惠·千元立减】普吉岛2020嗨玩6日定制游（潜入海底世界+炫酷射击体验+奢享泰式SPA+打卡网红酒店+豪华游艇浪漫落日+清凉漂流+阳光沙滩悠闲假期+随心搭配畅游泰国）",price:2980}
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
		  if(e.target.innerHTML=="东南亚"){
			 this.setState({
				list:[
					{id:4,img:img51,dec:"即买即省·香港直飞塞班岛5天自由行（海陆空超全体验+中文领队+赠接送机+环岛游观光+已含税费+UO航空)",price:2999},
					{id:5,img:img52,dec:"深圳出发巴厘岛2-7天往返特价含税机票（香港航空+包含深圳蛇口/福永/东莞码头至香港机场单程船票+30kg免费行李额）",price:4480},
					{id:6,img:img53,dec:"年后错峰立减+ 西安直飞普吉岛/斯米兰6天自由行（高颜值网红酒店+透明无边泳池别墅/私人沙滩+辣妈潮娃/蜜月醉爱+人妖秀+定制曼谷/清迈联游+赠电话卡/接送机/保险）",price:5988}
				]
			 })
		  }else{
			this.setState({
				list:[
					{id:7,img:img48,dec:"错峰出行·上海出发沙巴6天自由行（可安排沙巴+邦邦岛+卡帕莱度假村等+酒店任选+多酒店升级+丰盛早餐）",price:2240},
					{id:8,img:img49,dec:"武汉往返苏梅岛+涛岛6天5晚自由行（独栋泳池别墅/网红酒店+赠环岛游/涛岛游+预约网红帐篷餐厅/下午茶/漂浮早餐+可订曼谷/普吉连线）",price:1480},
					{id:9,img:img50,dec:"【春夏特惠·千元立减】普吉岛2020嗨玩6日定制游（潜入海底世界+炫酷射击体验+奢享泰式SPA+打卡网红酒店+豪华游艇浪漫落日+清凉漂流+阳光沙滩悠闲假期+随心搭配畅游泰国）",price:2808}
				]
			})
		  }
	  }
		render(){
				return (
				<>
				<div className="lzhutibig">
				<div className="lzhuti">
				<span style={{color:'#ffb80e'}}>机酒自由行</span>
				{/* 分类文字 */}
				<div className="lzhuti1" onMouseOver={this.changeImg.bind(this)}>
				<div>免签出发</div>
				<div>东南亚</div>
				<div>港澳台</div>
				</div>
				</div>
				{/* 下面的文字和图片 */}
				<img src={img47} className="lzhutiimg" />
				<div className="lzhuti2">
					{this.show()}
				</div>
				</div>
				</>
				);
			}
	}