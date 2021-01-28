import React from "react";
import "./zhuti.css"
import img54 from ".././ljimg/img54.jpeg"
import img55 from ".././ljimg/img55.gif"
import img56 from ".././ljimg/img56.jpeg"
import img57 from ".././ljimg/img57.jpeg"
import img58 from ".././ljimg/img58.jpeg"
import img59 from ".././ljimg/img59.jpeg"
export default class Free extends React.Component{
	  constructor(props) {
	      super(props)
		  this.state={
		  	list:[
		  	{id:1,img:img55,dec:"中国台湾 4GWi-Fi 不限流量（桃园/松山/高雄小港取还机/免押金/一天起租）",price:12.5},
		  	{id:2,img:img56,dec:"日本WIFI租赁 4G不限流量+15h超长续航+随身语音翻译+google地图导航（国内机场自取/邮寄）",price:25},
		  	{id:3,img:img55,dec:"中国台湾 4GWi-Fi 不限流量（桃园/松山/高雄小港取还机/免押金/一天起租）",price:12.5}
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
		  if(e.target.innerHTML=="接/送机"){
			 this.setState({
				list:[
					{id:4,img:img57,dec:"普吉岛接机送机 普吉全岛酒店接送机（24小时泰国专车接机+安全专业+准时准点）",price:25},
					{id:5,img:img58,dec:"清迈机场接送机 24小时专车接送（搭配行程低至19元接送+可升级中文司机+无夜间附加费）",price:39},
					{id:6,img:img59,dec:"香港机场至九龙/港岛/新界/尖沙咀/迪士尼等单程专车接送机服务（专车专享 五星司机 可选特斯拉）",price:235}
				]
			 })
		  }else{
			this.setState({
				list:[
					{id:1,img:img55,dec:"中国台湾 4GWi-Fi 不限流量（桃园/松山/高雄小港取还机/免押金/一天起租）",price:12.5},
					{id:2,img:img56,dec:"日本WIFI租赁 4G不限流量+15h超长续航+随身语音翻译+google地图导航（国内机场自取/邮寄）",price:25},
					{id:3,img:img55,dec:"中国台湾 4GWi-Fi 不限流量（桃园/松山/高雄小港取还机/免押金/一天起租）",price:12.5}
				]
			})
		  }
	  }
		render(){
				return (
				<>
				<div className="lzhutibig">
				<div className="lzhuti">
				<span style={{color:'#786ee6'}}>出行必备</span>
				{/* 分类文字 */}
				<div className="lzhuti1" onMouseOver={this.changeImg.bind(this)}>
				<div>热卖WiFi</div>
				<div>接/送机</div>
				<div>高铁票</div>
				</div>
				</div>
				{/* 下面的文字和图片 */}
				<img src={img54} className="lzhutiimg" />
				<div className="lzhuti2">
					{this.show()}
				</div>
				</div>
				</>
				);
			}
	}