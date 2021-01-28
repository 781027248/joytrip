import React from "react";
import "./zhuti.css"
import img61 from ".././ljimg/img61.png"
import img62 from ".././ljimg/img62.jpeg"
import img63 from ".././ljimg/img63.jpeg"
import img64 from ".././ljimg/img64.jpeg"
import img65 from ".././ljimg/img65.jpeg"
import img66 from ".././ljimg/img66.png"
import img60 from ".././ljimg/img60.jpeg"
export default class Free extends React.Component{
	  constructor(props) {
	      super(props)
		  this.state={
		  	list:[
		  	{id:1,img:img61,dec:"三亚天涯海角门票（爱情经典地不二之选 景点游玩攻略）",price:48},
		  	{id:2,img:img62,dec:"元旦春节旅游  香港迪士尼乐园1日/2日电子门票（即订即用/扫码入园/可选餐券/无需打印/保证入园）",price:632},
		  	{id:3,img:img63,dec:"香港太平山顶缆车+摩天台套票（山顶缆车 可选杜莎夫人蜡像馆/可订当天/即订即用/手机出示/鸟瞰维多利亚港夜景）",price:125}
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
		  if(e.target.innerHTML=="风情东南亚"){
			 this.setState({
				list:[
					{id:4,img:img64,dec:"错峰出行·上海出发沙巴6天自由行（可安排沙巴+邦邦岛+卡帕莱度假村等+酒店任选+多酒店升级+丰盛早餐）",price:2999},
					{id:5,img:img65,dec:"普吉岛 皇帝岛珊瑚岛巨型旅拍帆船一日游社会号（赠旅拍照片+水上玩具+全岛免费接送+两位专属中文导游）",price:399},
					{id:6,img:img66,dec:"【秒出单】泰国·曼谷克里普索人妖秀门票（景区直连/可接急单/湄南河夜市旁/摩天轮夜市旁）",price:60}
				]
			 })
		  }else{
			this.setState({
				list:[
					{id:1,img:img61,dec:"三亚天涯海角门票（爱情经典地不二之选 景点游玩攻略）",price:48},
					{id:2,img:img62,dec:"元旦春节旅游  香港迪士尼乐园1日/2日电子门票（即订即用/扫码入园/可选餐券/无需打印/保证入园）",price:632},
					{id:3,img:img63,dec:"香港太平山顶缆车+摩天台套票（山顶缆车 可选杜莎夫人蜡像馆/可订当天/即订即用/手机出示/鸟瞰维多利亚港夜景）",price:125}
				]
			})
		  }
	  }
		render(){
				return (
				<>
				<div className="lzhutibig">
				<div className="lzhuti">
				<span style={{color:'#985eb4'}}>当地玩乐</span>
				{/* 分类文字 */}
				<div className="lzhuti1" onMouseOver={this.changeImg.bind(this)}>
				<div>境内港台</div>
				<div>风情东南亚</div>
				<div>高端欧美澳</div>
				</div>
				</div>
				{/* 下面的文字和图片 */}
				<img src={img60} className="lzhutiimg" />
				<div className="lzhuti2">
					{this.show()}
				</div>
				</div>
				</>
				);
			}
	}