import React from "react";
import axios from "axios";
import "./css/ticket.css";
import { Radio } from 'antd';
import { DatePicker, Space } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Ticketbottom from "./components/ticket_bottom";
import Ticketindex from "./components/ticket_index";
import Phead from "../public/Phead.js";
import Pfoot from "../public/Pfoot.js";
const { RangePicker } = DatePicker;

export default class Ticket extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		};
	}
	render() {
		
		return (
			<>
				<Phead history={this.props.history} />
				<div className="ticket-box">
					{/* 顶部 */}
					<div className="ticket-box-top">
						<span className="ticket-box-icon-airplan"></span>
						<span>国内机票</span>
					</div>
					{/* 订票部分 */}
					<Ticketindex history={this.props.history}/>
					<div className="ticket-box-center">
						<div className="ticket-box-center-iconbox1">
							<i></i>100%航协认证
						</div>
						<div className="ticket-box-center-iconbox2">
							<i></i>出行保证
						</div>
						<div className="ticket-box-center-iconbox3">
							<i></i>
							<div className="ticket-box-center-iconbox3-right">
								<div className="ticket-box-center-iconbox3-right-p">
									<p>7x24小时服务</p>
									<p>4006345678转2</p>
								</div>
							</div>
						</div>
					</div>
					<div className="ticket-box-minprice">
						<span className="ticket-box-minprice-icon"></span>
						<span>特价机票</span>
					</div>
					<div className="ticket-box-bottom">
						<Ticketbottom  history={this.props.history}/>
					</div>
				</div>
				<Pfoot />
			</>
		);
	}
}