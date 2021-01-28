import React from "react";
import "./tvlnote.css";
import axios from "axios";
export default class Tvlnote extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			notelist: []
		};
	}
	
	petvlrelease() {
		/* 发布 */
		let content = document.getElementById("petvlcon");
		let date = new Date();
		let time = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "-" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		let user_id = sessionStorage.getItem("id");
		axios.post("http://localhost:9999/petvlrelease", {
			user_id,
			time,
			content: content.innerHTML
		}).then((res) => {
			content.innerHTML = "";
			this.setState({
				notelist: res.data.res
			});
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		});
	}
	
	petvldelnote(e) {
		/* 删除游记 */
		let id = e.target.getAttribute("data-id") * 1;
		let user_id = sessionStorage.getItem("id");
		axios.get("http://localhost:9999/petvldelnote", {
			params: {
				id,
				user_id
			}
		}).then((res) => {
			this.setState({
				notelist: res.data
			});
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		});
	}
	
	shownotelist() {
		/* 显示游记 */
		let res = this.state.notelist.map((item) => {
			return (
				<div key={item.id}>
					<div className="penotetime">时间: {item.time}</div>
					<div>{item.content}</div>
					<div data-id={item.id} onClick={this.petvldelnote.bind(this)} className="pedelnote petvl-btn">删除</div>
				</div>
			);
		});
		return res;
	}
	
	componentDidMount() {
		let user_id = sessionStorage.getItem("id");
		axios.get("http://localhost:9999/gettravelnotes",{
			params: {
				user_id
			}
		}).then((res) => {
			this.setState({
				notelist: res.data
			});
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		});
	}
	
	render() {
		return (
			<div className="petvl-box">
				<div className="petextbox">
					<div id="petvlcon" contentEditable="true" className="petvl-textarea"></div>
					<div onClick={this.petvlrelease.bind(this)} className="petvl-btn">发布</div>
				</div>
				<div className="petvl-notebox">
					{this.shownotelist()}
				</div>
			</div>
		);
	}
}
