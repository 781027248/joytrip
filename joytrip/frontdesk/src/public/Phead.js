import React from "react";
import axios from "axios";
import "./Phead.css";
import { Badge, Card,Avatar  } from 'antd';
import {CaretDownOutlined,UserOutlined } from '@ant-design/icons';

export default class Phead extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			nickname: "",
			avatar: ""
		};
	}

	PhChangeheadnavclassname() {
		let Homepage = document.getElementById("ph-Homepage");
		let Destination = document.getElementById("ph-Destination");
		let Guideline = document.getElementById("ph-Guideline");
		let GoTravel = document.getElementById("ph-GoTravel");
		let Ticket = document.getElementById("ph-Ticket");
		let Hotel = document.getElementById("ph-Hotel");
		let path = this.props.history.location.pathname;
		Homepage.className = "";
		Destination.className = "";
		Guideline.className = "";
		GoTravel.className = "";
		Ticket.className = "";
		Hotel.className = "";
		if (path === "/") {
			Homepage.className = "ph-active";
		} else if (path === "/Destination") {
			Destination.className = "ph-active";
		} else if (path === "/Guideline") {
			Guideline.className = "ph-active";
		} else if (path === "/GoTravel") {
			GoTravel.className = "ph-active";
		} else if (path === "/Ticket") {
			Ticket.className = "ph-ticketactive";
		} else if (path === "/Hotel") {
			Hotel.className = "ph-active";
		}
	}
	
	phhomepage() {
		this.props.history.push("/");
	}
	phdestination() {
		this.props.history.push("/Destination");
	}
	phguideline() {
		this.props.history.push("/Guideline");
	}
	phgoTravel() {
		this.props.history.push("/GoTravel");
	}
	phticket() {
		this.props.history.push("/Ticket");
	}
	phhotel() {
		this.props.history.push("/Hotel");
	}
	
	phlogin() {
		/* 登录 */
		let id = sessionStorage.getItem("id");
		if (id === null) {
			this.props.history.push("/Login");
		} else {
			this.props.history.push("/PersonalCenter");
		}
	}
	componentDidMount() {
		let nickname = sessionStorage.getItem("nickname");
		let avatar = sessionStorage.getItem("avatar");
		this.setState({
			nickname,
			avatar
		});
		this.PhChangeheadnavclassname();
	}
	render() {
		return (
			<div className="Pheadbox">
				<div className="Phead container">
					<ul className="ph-titel">
						<li id="ph-logo">logo</li>
						<li id="ph-Homepage" onClick={this.phhomepage.bind(this)} className="ph-active">首页</li>
						<li id="ph-Destination" onClick={this.phdestination.bind(this)}>目的地</li>
						<li id="ph-Guideline" onClick={this.phguideline.bind(this)}>旅游攻略</li>
						<li id="ph-GoTravel" onClick={this.phgoTravel.bind(this)}><span>去旅行</span><CaretDownOutlined /></li>
						<li id="ph-Ticket" onClick={this.phticket.bind(this)}>
							<Badge.Ribbon text="特价" >
								<Card className="ph-tj">机票火车票</Card>
							</Badge.Ribbon>
						</li>
						<li id="ph-Hotel" onClick={this.phhotel.bind(this)}>定酒店</li>
					</ul>
					<div onClick={this.phlogin.bind(this)} id="ph-headuser">
						<Avatar size="large" src={this.state.avatar} icon={<UserOutlined />} className="ph-headPhoto"/>
						<span>{this.state.nickname}</span>
					</div>
				</div>
			</div>
		);
	}
}
