import React from "react";
import "../css/hotel.css";
import { DatePicker, Space } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class Hotel extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	onChangeStartTime = (date, dateString) => {
		console.log(date, dateString);
	}
	onChangeEndTime = (date, dateString) => {
		console.log(date, dateString);
	}
	//聚焦
	endCityFocus(){
		let endCityf = document.getElementsByClassName('ht-select-city2')[0];
		endCityf.style.display = 'block';
	}
	//失去焦点
	endCityBlur(){
		let endCityb = document.getElementsByClassName('ht-select-city2')[0];
		endCityb.style.display = 'none';
	}
    getDestination(e){
		let arr = ['香港','北京','成都','长沙','重庆','西安','承德','上海','台中','三亚','林芝','罗平'];
		if(arr.indexOf(e.target.innerHTML) !== -1){
			document.getElementById('ht-end-city').value = e.target.innerHTML;
		}
    }
    searchTo(){
        if(document.getElementById('ht-end-city').value !== ''){
            this.props.history.push({
                pathname:'/orderHotel',
                query:{
                    city:document.getElementById('ht-end-city').value
                }
            })
        }else {
            alert('请填写要查看的地址信息');
        }
    }
	render() {
		return (
			<div className="ht-box-search-index">
				<div onFocus={this.endCityFocus} onBlur={this.endCityBlur}>
					<label for="ht-end-city" className="ht-label">到达城市</label>
					<input id="ht-end-city" />
					<div className="ht-select-city2">
						<ul onMouseOver={this.getDestination}>
							<li>香港</li>
							<li>北京</li>
							<li>成都</li>
							<li>长沙</li>
							<li>重庆</li>
							<li>西安</li>
							<li>承德</li>
							<li>上海</li>
							<li>台中</li>
							<li>三亚</li>
							<li>林芝</li>
							<li>罗平</li>
						</ul>
					</div>
				</div>
				<div>
					<label for="ht-start-time" className="ht-label">入住日期</label>
					<Space direction="vertical">
						<DatePicker onChange={this.onChangeStartTime} id="ht-start-time" locale={locale}/>
					</Space>
				</div>
				<div>
			        <label for="ht-end-time" className="ht-label">离店日期</label>
					<Space direction="vertical">
						<DatePicker onChange={this.onChangeEndTime} id="ht-end-time" locale={locale}/>
					</Space>
				</div>
				<div className="ht-box-search">
					{/* onClick={this.search.bind(this)} */}
					<Button type="primary" icon={<SearchOutlined />}  onClick={this.searchTo.bind(this)}></Button>
				</div>
	        </div>
		);
	}
}