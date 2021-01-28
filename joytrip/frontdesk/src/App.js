import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Login from "./public/login.js"; // 登录
import Regist from "./public/regist.js"; // 注册

import Destination from "./destination/js/destination.js"; // 目的地
import GoTravel from "./goTravel/goTravel.js"; // 去旅行
import Guideline from "./guideline/js/guideline.js"; // 旅游攻略
import ToHokkaido from "./guideline/js/guidelineToHokkaido.js";
import ToChengdu from "./guideline/js/guidelineToChengdu.js";
import ToDali from "./guideline/js/GuidelineToDali.js";
import ToXian from "./guideline/js/GuidelineToXian.js";
import ToChongqin from "./guideline/js/GuidelineToChongqin.js";

import HomePage from "./homePage/homePage.js"; // 首页
import PersonalCenter from "./personalCenter/personalCenter.js"; // 个人中心
import Ticket from "./ticket/ticket.js"; // 机票火车票
import TicketOrder from "./ticket/components/orderTicket.js";
import Oderhotelone from "./hotel/components/oder_hotel_one.js";
import Hotel from "./hotel/hotel.js"; // 定酒店


const myHistory = createHashHistory();
export default class App extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<div className="appcon">
				<Router history={myHistory}>
					<Route exact={true} path="/" component={HomePage} />
					<Route exact={true} path="/Destination" component={Destination} />
					<Route exact={true} path="/GoTravel" component={GoTravel} />
					<Route exact={true} path="/Guideline" component={Guideline} />
					<Route exact={true} path="/ToHokkaido" component={ToHokkaido} />
					<Route exact={true} path="/ToChengdu" component={ToChengdu} />
					<Route exact={true} path="/toDali" component={ToDali} />
					<Route exact={true} path="/ToXian" component={ToXian} />
					<Route exact={true} path="/ToChongqin" component={ToChongqin} />
					<Route exact={true} path="/PersonalCenter" component={PersonalCenter} />
					<Route exact={true} path="/Ticket" component={Ticket} />
					<Route exact={true} path="/orderTicket" component={TicketOrder} />
					<Route exact={true} path="/Hotel" component={Hotel} />
					<Route exact={true} path="/orderHotel" component={Oderhotelone}/>
					<Route exact={true} path="/Login" component={Login} />
					<Route exact={true} path="/Regist" component={Regist} />
				</Router>
			</div>
		);
	}
}

