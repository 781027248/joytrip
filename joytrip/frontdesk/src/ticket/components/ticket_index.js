import React from "react";
import axios from "axios";
import "../css/ticket.css";
import wxApp from "../img/wxapp.jpeg";
import { Radio } from 'antd';
import { DatePicker, Space } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { RangePicker } = DatePicker;

export default class Ticketindex extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: 1,
			current: '上海',
			addressArr:[]
		};
	}

	onChangeRadio = e => {
		this.setState({
			value: e.target.value,
		});
	}
	onChangeStartTime = (date, dateString) => {
		console.log(date, dateString);
	}
	onChangeEndTime = (date, dateString) => {
		console.log(date, dateString);
	}
	//聚焦
	startCityFocus(){
		let startCityf = document.getElementsByClassName('ticket-select-city1')[0];
		startCityf.style.display = 'block';
	}
	endCityFocus(){
		let endCityf = document.getElementsByClassName('ticket-select-city2')[0];
		endCityf.style.display = 'block';
	}
	//失去焦点
	startCityBlur(){
		let startCityb = document.getElementsByClassName('ticket-select-city1')[0];
		startCityb.style.display = 'none';
	}
	endCityBlur(){
		let endCityb = document.getElementsByClassName('ticket-select-city2')[0];
		endCityb.style.display = 'none';
	}
	changeAddress(){
        let depature = document.getElementById('ticket-start-city').value;
        let destination = document.getElementById('ticket-end-city').value;
        document.getElementById('ticket-start-city').value = destination;
        document.getElementById('ticket-end-city').value = depature
	}
	getDepature(e){
		let arr = ['上海','北京','成都','广州','重庆','西安','昆明','杭州','深圳','三亚','厦门','南京'];
		if(arr.indexOf(e.target.innerHTML) !== -1 && document.getElementById('ticket-end-city').value !== e.target.innerHTML){
			document.getElementById('ticket-start-city').value = e.target.innerHTML;
		}
    }
    getDestination(e){
		let arr = ['上海','北京','成都','广州','重庆','西安','昆明','杭州','深圳','三亚','厦门','南京'];
		if(arr.indexOf(e.target.innerHTML) !== -1 && document.getElementById('ticket-start-city').value !== e.target.innerHTML){
			document.getElementById('ticket-end-city').value = e.target.innerHTML;
		}
	}
	search(){
        if(document.getElementById('ticket-start-city').value !== '' && document.getElementById('ticket-end-city').value !== ''){
            this.props.history.push({
                pathname:'/orderTicket'
			})
			sessionStorage.setItem('cur',document.getElementById('ticket-start-city').value.trim());
			sessionStorage.setItem('destination',document.getElementById('ticket-end-city').value.trim());
        }else {
            alert('请填写要搜索的地址信息');
        }
	}
	render() {
		
		return (
			<div>
				{/* 订票部分 */}
				<div className="ticket-box-index">
					{/* 搜索国内机票 */}
					<div className="ticket-box-index-form">
						<div className="ticket-box-index-form-top">
							<Radio.Group onChange={this.onChangeRadio} value={this.state.value}>
								<Radio value={1}>单程</Radio>
								<Radio value={2}>往返</Radio>
							</Radio.Group>
						</div>
						<div className="ticket-box-change">
							<div className="ticket-change">
								<div className="ticket-change-address" onClick={this.changeAddress}>换</div>
							</div>
						</div>
						<div className="ticket-box-index-form-input">
							
							<div onFocus={this.startCityFocus} onBlur={this.startCityBlur}>
								<label htmlFor="ticket-start-city" className="ticket-label">出发城市</label>
								<input id="ticket-start-city"  />
								<div className="ticket-select-city1">
									<ul onMouseOver={this.getDepature}>
										<li>上海</li>
										<li>北京</li>
										<li>成都</li>
										<li>广州</li>
										<li>重庆</li>
										<li>西安</li>
										<li>昆明</li>
										<li>杭州</li>
										<li>深圳</li>
										<li>三亚</li>
										<li>厦门</li>
										<li>南京</li>
									</ul>
								</div>
							</div>
							<div onFocus={this.endCityFocus} onBlur={this.endCityBlur}>
								<label htmlFor="ticket-end-city" className="ticket-label">到达城市</label>
								<input id="ticket-end-city" />
								<div className="ticket-select-city2">
									<ul onMouseOver={this.getDestination}>
										<li>上海</li>
										<li>北京</li>
										<li>成都</li>
										<li>广州</li>
										<li>重庆</li>
										<li>西安</li>
										<li>昆明</li>
										<li>杭州</li>
										<li>深圳</li>
										<li>三亚</li>
										<li>厦门</li>
										<li>南京</li>
									</ul>
								</div>
							</div>
							<div>
								<label htmlFor="ticket-start-time" className="ticket-label">开始时间</label>
								<Space direction="vertical">
									<DatePicker onChange={this.onChangeStartTime} id="ticket-start-time" locale={locale}/>
								</Space>
							</div>
							<div>
								<label htmlFor="ticket-end-time" className="ticket-label">结束时间</label>
								<Space direction="vertical">
									<DatePicker onChange={this.onChangeEndTime} id="ticket-end-time" locale={locale}/>
								</Space>
							</div>
						</div>
						<div className="ticket-box-child">
							<Radio>携带小孩(12岁以下)</Radio>
						</div>
						<div className="ticket-box-search">
							<Button type="primary" icon={<SearchOutlined />} className="ticket-box-search-button" onClick={this.search.bind(this)}>搜索</Button>
						</div>
					</div>
					{/* 订票小程序 */}
					<img src={wxApp} width="820" height="350" style={{margin:'0'}}/>
				</div>
			</div>
		);
	}
}