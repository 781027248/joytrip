import React from "react";
import "./user.css";
import axios from "axios";
export default class User extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			tips1: "",
			tips2: "",
			tips3: "",
			nickname: "",
			avatar: "",
			wnickname: "",
			woldpwd: "",
			wnewpwd: "",
			wreconfim: ""
		};
	}
	
	chooseavatar() {
		/* 选择头像 */
		let btn = document.getElementById("pecupdavatar");
		btn.click();
		let fileipt = document.getElementById("pecupdavatar");
		fileipt.addEventListener("change",() => {
			let file = document.getElementById("pecupdavatar").files[0];
			let avatar = window.URL.createObjectURL(file);
			this.setState({
				avatar
			});
		})
	}
	
	watchnickname(e) {
		this.setState({
			wnickname: e.target.value
		});
	}
	watcholdpwd(e) {
		this.setState({
			woldpwd: e.target.value
		});
	}
	watchnewpwd(e) {
		this.setState({
			wnewpwd: e.target.value
		});
	}
	watchreconfim(e) {
		this.setState({
			wreconfim: e.target.value
		});
	}
	
	changepwd() {
		/* 更改密码 */
		let woldpwd = this.state.woldpwd;
		let wnewpwd = this.state.wnewpwd;
		let wreconfim = this.state.wreconfim;
		this.setState({
			tips2: ""
		});
		
		if (woldpwd === "" && wnewpwd === "" && wreconfim === "") {
			this.setState({
				tips2: "请先输入旧密码！"
			});
			setTimeout(() => {
				this.setState({
					tips2: ""
				});
			},1000);
		} else {
			if (woldpwd === "") {
				this.setState({
					tips2: "请先输入旧密码！"
				});
				setTimeout(() => {
					this.setState({
						tips2: ""
					});
				},1000);
			} else if (wnewpwd === "") {
				this.setState({
					tips2: "请先输入新密码！"
				});
				setTimeout(() => {
					this.setState({
						tips2: ""
					});
				},1000);
			} else if (wreconfim === "") {
				this.setState({
					tips2: "请再次验证新密码！"
				});
				setTimeout(() => {
					this.setState({
						tips2: ""
					});
				},1000);
			} else {
				if (wnewpwd !== wreconfim) {
					this.setState({
						tips2: "两次密码输入不一致！"
					});
					setTimeout(() => {
						this.setState({
							tips2: ""
						});
					},1000);
				} else {
					let id = sessionStorage.getItem("id");
					axios.post("http://localhost:9999/changepwd", {
						id,
						newpassword: wnewpwd,
						oldpassword: woldpwd
					}).then((res) => {
						this.setState({
							tips2: res.data.msg
						});
						if (res.data.status === 1) {
							this.setState({
								wnewpwd: "",
								woldpwd: "",
								wreconfim: ""
							});
							setTimeout(() => {
								this.setState({
									tips2: ""
								});
							},1000);
							window.location.reload();
						} else {
							setTimeout(() => {
								this.setState({
									tips2: ""
								});
							},2000);
						}
					}).catch((err) => {
						console.log("ajax请求失败！");
						console.log(err);
					});
				}
			}
		}
	}
	
	changenickname() {
		/* 更改昵称 */
		let nickname = this.state.wnickname;
		let id = sessionStorage.getItem("id");
		this.setState({
			tips3: ""
		});
		if (nickname.trim() === "") {
			this.setState({
				tips3: "请先输入新的昵称"
			});
			setTimeout(() => {
				this.setState({
					tips3: ""
				});
			},1500);
		} else {
			axios.post("http://localhost:9999/changenickname", {
				id,
				nickname
			}).then((res) => {
				sessionStorage.setItem("nickname", nickname);
				setTimeout(() => {
					this.setState({
						tips3: "",
						wnickname: ""
					});
				},1500);
				this.setState({
					tips3: res.data.msg
				});
				window.location.reload();
			}).catch((err) => {
				console.log("ajax请求失败！");
				console.log(err);
			});
		}
	}
	
	updateavatar() {
		/* 更改头像 */
		let file = document.getElementById("pecupdavatar").files[0];
		if (file !== undefined) {
			let formData = new FormData();
			let id = sessionStorage.getItem("id");
			formData.append("userDefaultAvatar", file, file.name);
			formData.append("id", id);
			const config = {
				headers: {
					"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
				}
			};
			axios.post("http://localhost:9999/updateavatar",formData,config).then((res) => {
				if (res.data.status === 1) {
					sessionStorage.setItem("nickname", res.data.nickname);
					sessionStorage.setItem("avatar", res.data.avatar);
					let nickname = sessionStorage.getItem("nickname");
					let avatar = sessionStorage.getItem("avatar");
					this.setState({
						nickname: res.data.nickname,
						avatar: res.data.avatar,
						tips1: res.data.msg
					});
				}
				setTimeout(() => {
					this.setState({
						tips1: ""
					});
				},1500);
				window.location.reload();
			}).catch((err) => {
				console.log("ajax请求失败！");
				console.log(err);
			});
		}
	}
	
	componentDidMount() {
		let nickname = sessionStorage.getItem("nickname");
		let avatar = sessionStorage.getItem("avatar");
		this.setState({
			nickname,
			avatar
		});
	}
	
	render() {
		return (
			<div className="pecuserbox">
				<div className="pe-cubaseinfobox">
					<img onClick={this.chooseavatar.bind(this)} src={this.state.avatar} />
					<div onClick={this.chooseavatar.bind(this)} className="pecu-cava">选择头像</div>
					<div onClick={this.updateavatar.bind(this)} className="pecu-updbtn">修改</div>
					<div className="peconu-tips">{this.state.tips1}</div>
					<input id="pecupdavatar" type="file" />
				</div>
				
				<div className="penumbox">
					<div className="penumtitle">账号管理</div>
					<div className="penumform">
						<div><span>旧密码:</span><input onChange={this.watcholdpwd.bind(this)} type="password" /></div>
						<div><span>新密码:</span><input onChange={this.watchnewpwd.bind(this)} type="password" /></div>
						<div><span>再次确认:</span><input onChange={this.watchreconfim.bind(this)} type="password" /></div>
					</div>
					<div onClick={this.changepwd.bind(this)} className="pecu-updbtn">修改</div>
					<div className="peconu-tips">{this.state.tips2}</div>
				</div>
				
				<div className="penickbox">
					<div><span>昵称:</span><input onChange={this.watchnickname.bind(this)} type="text" /></div>
					<div className="peconu-tips">{this.state.tips3}</div>
					<div onClick={this.changenickname.bind(this)} className="pecu-updbtn">修改</div>
				</div>
				
			</div>
		);
	}
}