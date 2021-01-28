import React from "react";
import "./nav.css";
export default class Nav extends React.Component {
	constructor(props) {
	    super(props);
		this.guard(); // 守卫函数
	}
	
	gohomepage() {
		/* 回到首页 */
		this.props.history.push("/");
	}
	
	logout() {
		/* 注销 */
		this.props.history.push("/");
		sessionStorage.removeItem("id");
		sessionStorage.removeItem("avatar");
		sessionStorage.removeItem("nickname");
	}
	
	guard() {
		/* 守卫 */
		let id = sessionStorage.getItem("id");
		if (id === null) {
			/* 如果处于未登录状态 */
			this.props.history.push("/Login");
		}
	}
	
	render() {
		return (
			<div className="pe-navbox">
				<div className="pe-nav container">
					<div>logo</div>
					<div onClick={this.gohomepage.bind(this)}>首页</div>
					<div>周边</div>
					<div>结伴</div>
					<div>小组</div>
					<div>俱乐部</div>
					<div>更多</div>
					<div onClick={this.logout.bind(this)}>注销</div>
				</div>
			</div>
		);
	}
}