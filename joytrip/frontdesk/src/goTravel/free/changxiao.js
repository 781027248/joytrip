import React from "react";
import "./zhuti.css"
import img67 from ".././ljimg/img67.gif"
import img68 from ".././ljimg/img68.jpeg"
import img69 from ".././ljimg/img69.jpeg"
import img70 from ".././ljimg/img70.png"
import img71 from ".././ljimg/img71.jpeg"
import img72 from ".././ljimg/img72.gif"
import img66 from ".././ljimg/img66.jpeg"
export default class Free extends React.Component{
	  constructor(props) {
	      super(props)
		  this.state={
		  	list:[
		  	{id:1,img:img67,dec:"重庆送签-日本单次旅游签证(预售优惠+拒签全退+领馆指定+简化+可升级30天+可顺丰包邮+免押金机酒自由行+东京迪士尼大阪北海道)",price:10},
		  	{id:2,img:img68,dec:"全国办理-马来西亚eNTRI(暑假大促、加急1天、包签、免邮寄、全国办理、一对一服务、拒签退款、简化机酒行程单、马来西亚签证)",price:168},
		  	{id:3,img:img69,dec:"成都送签-新加坡旅游签证(重庆地区+无套路+仅护照首页拍照+新加坡签证)",price:288}
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
					<span>店铺:懒猫旅行</span>
					</div></div>
	  	});
	  	return result;
	  }
	  changeImg(e){
		  console.log(e.target.innerHTML)
		  if(e.target.innerHTML=="欧美澳"){
			 this.setState({
				list:[
					{id:4,img:img70,dec:"沈阳送签-美国旅游签证(EVUS登记套餐+代填DS160表格+电话培训+专员陪签+无需快递原件+代取护照+顺丰包邮)",price:99},
					{id:5,img:img71,dec:"全国办理-澳大利亚一年多次旅游签证(澳洲移民局直签+免邮寄+加急当日送签+办理便捷)",price:899},
					{id:6,img:img72,dec:"广州送签-英国旅游签证(一手送签/广州录取指纹/陪签包回邮/签证专家)",price:1360}
				]
			 })
		  }else{
			this.setState({
				list:[
					{id:1,img:img67,dec:"重庆送签-日本单次旅游签证(预售优惠+拒签全退+领馆指定+简化+可升级30天+可顺丰包邮+免押金机酒自由行+东京迪士尼大阪北海道)",price:10},
					{id:2,img:img68,dec:"全国办理-马来西亚eNTRI(暑假大促、加急1天、包签、免邮寄、全国办理、一对一服务、拒签退款、简化机酒行程单、马来西亚签证)",price:168},
					{id:3,img:img69,dec:"成都送签-新加坡旅游签证(重庆地区+无套路+仅护照首页拍照+新加坡签证)",price:288}
				]
			})
		  }
	  }
		render(){
				return (
				<>
				<div className="lzhutibig">
				<div className="lzhuti">
				<span style={{color:'#2A79FB'}}>畅销签证</span>
				{/* 分类文字 */}
				<div className="lzhuti1" onMouseOver={this.changeImg.bind(this)}>
				<div>东南亚</div>
				<div>欧美澳</div>
				<div>申根签</div>
				</div>
				</div>
				{/* 下面的文字和图片 */}
				<img src={img66} className="lzhutiimg" />
				<div className="lzhuti2">
					{this.show()}
				</div>
				</div>
				</>
				);
			}
	}