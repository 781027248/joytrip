import React from "react";
import "./feedback.css";
import axios from "axios";
export default class Feedback extends React.Component {
	constructor() {
	    super();
		this.state = {
			tips: ""
		};
	}
	
	submitfdb() {
		/* 提交反馈 */
		let user_id = sessionStorage.getItem("id");
		let content = document.getElementById("fdbtextcon");
		let date = new Date();
		let time = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		
		axios.post("http://localhost:9999/submitfdb",{
			time,
			user_id,
			content: content.innerHTML
		}).then((res) => {
			this.setState({
				tips: res.data.msg
			});
			if (res.data.status === 1) {
				content.innerHTML = "";
			}
			setTimeout(() => {
				this.setState({
					tips: ""
				});
			},2500);
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		})
	}
	
	render() {
		return (
			<div className="fdbbox">
				<div className="fdbtips">我们倾听你的声音,欢迎提出宝贵的意见和建议!</div>
				<div id="fdbtextcon" className="fdbtextcon" contentEditable="true"></div>
				<div onClick={this.submitfdb.bind(this)} className="fdbsubmit">提交</div>
				<div className="fdb-ftips">{this.state.tips}</div>
			</div>
		);
	}
}
