import React from "react";
import "./login.css";
import axios from "axios";
export default class Login extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			tips: "",
			username: "",
			password: ""
		};
	}
	setusername(e) {
		this.setState({
			username: e.target.value
		});
	}
	setpassword(e) {
		this.setState({
			password: e.target.value
		});
	}
	
	cancellg() {
		/* 取消 */
		this.props.history.push("/");
	}
	
	plogin() {
		/* 登录 */
		this.setState({
			tips: ""
		});
		let username = this.state.username;
		let password = this.state.password;
		if (username.trim() === "") {
			this.setState({
				tips: "请先输入账号"
			});
		} else if (password === "") {
			this.setState({
				tips: "请先输入密码"
			});
		} else {
			axios.post("http://localhost:9999/login", {
				username,
				password
			}).then((res) => {
				if (res.data.status === 0) {
					this.setState({
						tips: res.data.msg
					});
				} else {
					/* 登录成功 */
					this.setState({
						tips: "",
						username: "",
						password: ""
					});
					sessionStorage.setItem("id", res.data.id);
					sessionStorage.setItem("avatar", res.data.avatar);
					sessionStorage.setItem("nickname", res.data.nickname);
					this.props.history.push("/");
				}
			}).catch((err) => {
				console.log("ajax请求失败！");
				console.log(err);
			});
		}
	}
	
	goregist() {
		/* 去注册 */
		this.props.history.push("/Regist");
	}
	
	render() {
		return (
			<div className="loginbox">
				<div className="logincontent">
					<div className="lo-iptbox"><span>账号：</span><input onChange={this.setusername.bind(this)} type="text" value={this.state.username} /></div>
					<div className="lo-iptbox"><span>密码：</span><input onChange={this.setpassword.bind(this)} type="password" value={this.state.password} /></div>
					<div className="lo-tips">{this.state.tips}</div>
					<div className="lo-goregist">还没有账号,<div onClick={this.goregist.bind(this)}>去注册</div></div>
					<div className="lo-btnbox">
						<div className="lo-cancel" onClick={this.cancellg.bind(this)}>取消</div>
						<div className="lo-login" onClick={this.plogin.bind(this)}>登录</div>
					</div>
				</div>
			</div>
		);
	}
}
