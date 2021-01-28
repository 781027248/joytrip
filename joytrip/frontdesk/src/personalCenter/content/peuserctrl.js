import React from "react";
import "./pcontent.css";
import "./peuserctrl.css";

import Feedback from "./feedback/feedback.js";
import Msgboard from "./msgboard/msgboard.js";
import Order from "./order/order.js";
import Tvlnote from "./tvlnote/tvlnote.js";
import User from "./user/user.js";


export default class Peuserctrl extends React.Component {
	
	constructor(props) {
	    super(props);
		this.state = {
			navtab: "个人中心"
		};
	}
	
	choosenavtab() {
		if (this.state.navtab === "个人中心") {
			return (
				<User />
			);
		} else if (this.state.navtab === "我的订单") {
			return (
				<Order />
			);
		} else if (this.state.navtab === "我的游记") {
			return (
				<Tvlnote />
			);
		} else if (this.state.navtab === "留言板") {
			return (
				<Msgboard />
			);
		} else if (this.state.navtab === "意见反馈") {
			return (
				<Feedback />
			);
		}
	}
	
	changenavtab(e) {
		if (e.target.innerHTML.length <= 4) {
			
			for (let i = 0; i < e.target.parentElement.children.length; i++) {
				e.target.parentElement.children[i].className = "";
			}
			e.target.className = "pe-tabactive";
			this.setState({
				navtab: e.target.innerHTML
			});
		}
	}
	
	render() {
		return (
			<div className="peuserbox">
				<div onClick={this.changenavtab.bind(this)} className="peuser-nav container">
					<div className="pe-tabactive">个人中心</div>
					<div>我的订单</div>
					<div>我的游记</div>
					<div>留言板</div>
					<div>意见反馈</div>
				</div>
				<div className="peuser-usercon">
					{this.choosenavtab()}
				</div>
			</div>
		);
	}
}
