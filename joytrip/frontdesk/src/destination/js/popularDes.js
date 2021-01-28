import React from "react";
import "../css/popularDes.css";
import img1 from "../img/beijin.jpeg";
import img2 from "../img/dali.jpeg";
import img3 from "../img/chengdu.jpeg";
import img4 from "../img/seda.jpeg";
import img5 from "../img/yading.jpeg";
import img6 from "../img/hangzhou.jpeg";
import img7 from "../img/taibei.png";
import img8 from "../img/hualian.jpeg";
import img9 from "../img/taizhong.jpeg";
import img10 from "../img/jiufen.jpeg";
import img11 from "../img/pujidao.png";
import img12 from "../img/mamgu.jpeg";
import img13 from "../img/xinjiapo.jpeg";
import img14 from "../img/basha.jpeg";
import img15 from "../img/wenlai.jpeg";
import img16 from "../img/maerdaifu.jpeg";
import img17 from "../img/dibai.jpeg";
import img18 from "../img/mengmai.jpeg";
import img19 from "../img/luoshanji.jpeg";
import img20 from "../img/lundun.jpeg";
import img21 from "../img/bali.jpeg";
import img22 from "../img/basailuona.jpeg";
import img23 from "../img/bingdao.jpeg";
import img24 from "../img/moerben.jpeg";
import img25 from "../img/feiji.jpeg";
import img26 from "../img/kailuo.jpeg";
import img27 from "../img/maoliqiusi.jpeg";
import img28 from "../img/madajiasijia.jpeg";
import img29 from "../img/gaoxiong.jpeg";
import img30 from "../img/alishan.jpeg";
import img31 from "../img/huzhimingshi.jpeg";
import img32 from "../img/ayadadao.jpeg";
import img33 from "../img/ningjingdao.jpeg";
import img34 from "../img/agela.jpeg";
import img35 from "../img/aidingbao.jpeg";
import img36 from "../img/yalishanda.jpeg";
import Route from "./route.js"
export default class popularDes extends React.Component {
	constructor() {
		super();
		this.state = { isShowin: "国内" };
	}
	// 事件监听，修改状态
	handleMouseOver(e) {
		let tes = e.target.innerHTML;
		this.setState({
			isShowin: tes,
		})
	}
	// 对状态改变做出对应的渲染
	change() {
		if (this.state.isShowin === "国内") {
			return (
				<ul className="pop-bac">
					<li>
						<img src={img1}></img>
						<span>北京</span>
					</li>
					<li>
						<img src={img2}></img>
						<span>大理</span>
					</li>
					<li>
						<img src={img3}></img>
						<span>成都</span>
					</li>
					<li>
						<img src={img4}></img>
						<span>色达</span>
					</li>
					<li>
						<img src={img5}></img>
						<span>亚丁</span>
					</li>
					<li>
						<img src={img6}></img>
						<span>杭州</span>
					</li>
				</ul>
			)
		} else if (this.state.isShowin === "港澳台") {
			return (
				<ul className="pop-bac">
					<li>
						<img src={img7}></img>
						<span>台北</span>
					</li>
					<li>
						<img src={img8}></img>
						<span>花莲</span>
					</li>
					<li>
						<img src={img9}></img>
						<span>台中</span>
					</li>
					<li>
						<img src={img10}></img>
						<span>九份</span>
					</li>
					<li>
						<img src={img29}></img>
						<span>高雄</span>
					</li>
					<li>
						<img src={img30}></img>
						<span>阿里山</span>
					</li>
				</ul>
			)
		} else if (this.state.isShowin === "东南亚") {
			return (
				<ul className="pop-bac">
					<li>
						<img src={img11}></img>
						<span>普吉岛</span>
					</li>
					<li>
						<img src={img12}></img>
						<span>曼谷</span>
					</li>
					<li>
						<img src={img13}></img>
						<span>新加坡</span>
					</li>
					<li>
						<img src={img14}></img>
						<span>沙巴</span>
					</li>
					<li>
						<img src={img15}></img>
						<span>文莱</span>
					</li>
					<li>
						<img src={img31}></img>
						<span>胡志明市</span>
					</li>
				</ul>
			)
		} else if (this.state.isShowin === "南亚 西亚") {
			return (
				<ul className="pop-bac">
					<li>
						<img src={img16}></img>
						<span>马尔代夫</span>
					</li>
					<li>
						<img src={img17}></img>
						<span>迪拜</span>
					</li>
					<li>
						<img src={img18}></img>
						<span>孟买</span>
					</li>
					<li>
						<img src={img32}></img>
						<span>阿雅达岛</span>
					</li>
					<li>
						<img src={img33}></img>
						<span>宁静岛</span>
					</li>
					<li>
						<img src={img34}></img>
						<span>阿格拉</span>
					</li>
				</ul>
			)
		} else if (this.state.isShowin === "欧美 美洲") {
			return (
				<ul className="pop-bac">
					<li>
						<img src={img19}></img>
						<span>洛杉矶</span>
					</li>
					<li>
						<img src={img20}></img>
						<span>伦敦</span>
					</li>
					<li>
						<img src={img21}></img>
						<span>巴黎</span>
					</li>
					<li>
						<img src={img22}></img>
						<span>巴塞罗那</span>
					</li>
					<li>
						<img src={img23}></img>
						<span>冰岛</span>
					</li>
					<li>
						<img src={img35}></img>
						<span>冰岛</span>
					</li>
				</ul>
			)
		} else if (this.state.isShowin === "澳洲 非洲") {
			return (
				<>
					<ul className="pop-bac">
						<li>
							<img src={img24}></img>
							<span>墨尔本</span>
						</li>
						<li>
							<img src={img25}></img>
							<span>斐济</span>
						</li>
						<li>
							<img src={img26}></img>
							<span>开罗</span>
						</li>
						<li>
							<img src={img27}></img>
							<span>毛里求斯</span>
						</li>
						<li>
							<img src={img28}></img>
							<span>马达加斯加</span>
						</li>
						<li>
							<img src={img36}></img>
							<span>亚历山大</span>
						</li>
					</ul>
				</>
			)
		}
	}
	render() {
		return (
			<div className="po-des">
				<h1>热门目的地</h1>
				<ul className="po-ul">
					<li onMouseOver={(e) => this.handleMouseOver(e)}>国内</li>
					<span>|</span>
					<li onMouseOver={(e) => this.handleMouseOver(e)}>港澳台</li>
					<span>|</span>
					<li onMouseOver={(e) => this.handleMouseOver(e)}>东南亚</li>
					<span>|</span>
					<li onMouseOver={(e) => this.handleMouseOver(e)}>南亚 西亚</li>
					<span>|</span>
					<li onMouseOver={(e) => this.handleMouseOver(e)}>欧美 美洲</li>
					<span>|</span>
					<li onMouseOver={(e) => this.handleMouseOver(e)}>澳洲 非洲</li>
				</ul>
				{this.change()}
				<Route></Route>
			</div>
		)
	}
}