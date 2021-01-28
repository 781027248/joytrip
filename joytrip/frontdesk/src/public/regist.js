import React from "react";
import "./regist.css";
import axios from "axios";
export default class Regist extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			nickname: "",
			username: "",
			password: "",
			reconfirm: "",
			tips: ""
		};
	}
	
	setnickname(e) {
		this.setState({
			nickname: e.target.value
		});
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
	setreconfirm(e) {
		this.setState({
			reconfirm: e.target.value
		});
	}
	
	recancel() {
		/* 取消 */
		this.props.history.push("/");
	}
	
	gologin() {
		/* 去登录 */
		this.props.history.push("Login");
	}
	
	regist() {
		/* 注册 */
		this.setState({
			tips: ""
		});
		let username = this.state.username;
		let nickname = this.state.nickname;
		let password = this.state.password;
		let reconfirm = this.state.reconfirm;
		if (nickname.trim() === "") {
			this.setState({
				tips: "昵称不能为空"
			});
		} else if (username.trim() === "") {
			this.setState({
				tips: "账号不能为空"
			});
		} else if (password === "") {
			this.setState({
				tips: "密码不能为空"
			});
		} else if (reconfirm === "") {
			this.setState({
				tips: "请先再次确认密码"
			});
		} else {
			if (password !== reconfirm) {
				this.setState({
					tips: "两次输入的密码不一致"
				});
			} else {
				axios.post("http://localhost:9999/regist",{
					username,
					nickname,
					password,
				}).then((res) => {
					if (res.data.status === 1) {
						/* 注册成功 */
						this.setState({
							tips: "",
							username: "",
							password: "",
							nickname: "",
							reconfirm: ""
						});
						sessionStorage.setItem("id", res.data.id);
						sessionStorage.setItem("avatar", res.data.avatar);
						sessionStorage.setItem("nickname", res.data.nickname);
						this.props.history.push("/");
					} else {
						this.setState({
							tips: res.data.msg
						});
					}
				}).catch((err) => {
					console.log("ajax请求失败！");
					console.log(err);
				})
			}
		}
	}
	
	render() {
		return (
			<div className="re-box">
				<div className="re-content">
					<div className="re-iptbox"><span>昵称:</span><input onChange={this.setnickname.bind(this)} type="text" value={this.state.nickname} /></div>
					<div className="re-iptbox"><span>账号:</span><input onChange={this.setusername.bind(this)} type="text" value={this.state.username} /></div>
					<div className="re-iptbox"><span>密码:</span><input onChange={this.setpassword.bind(this)} type="password" value={this.state.password} /></div>
					<div className="re-iptbox"><span>再次确认:</span><input onChange={this.setreconfirm.bind(this)} type="password" value={this.state.reconfirm} /></div>
					<div className="re-tips">{this.state.tips}</div>
					<div className="re-gologin"><div onClick={this.gologin.bind(this)}>已有账号,去登录</div></div>
					<div className="re-btnbox">
						<div onClick={this.recancel.bind(this)} className="re-cancel">取消</div>
						<div onClick={this.regist.bind(this)} className="re-regist">注册</div>
					</div>
				</div>
			</div>
		);
	}
}