import React from "react";
import "./order.css";
import axios from "axios";
export default class Order extends React.Component {
	constructor() {
	    super();
		this.state = {
			hotellist: [],
			ticketlist: []
		};
	}
	
	componentDidMount() {
		let id = sessionStorage.getItem("id");
		axios.get("http://localhost:9999/pcogetorderinfo", {
			params: {
				id
			}
		}).then((res) => {
			this.setState({
				hotellist: res.data.hotellist,
				ticketlist: res.data.ticketlist
			});
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		});
	}
	
	showhotellist() {
		let res = this.state.hotellist.map((item) => {
			return (
				<div className="peorders" key={item.id}>
					<div>酒店</div>
					<div>酒店名称:{item.hname}</div>
					<div>地点:{item.destination}</div>
					<div>入住日期:{item.intime}</div>
					<div>离店日期:{item.dtime}</div>
					<div>人数:{item.num}</div>
					<div>房间数量:{item.hcount}</div>
					<div>总价:￥{item.hsum}</div>
					<div onClick={this.delhotelorder.bind(this, item.id)}>删除</div>
				</div>
			);
		});
		return res;
	}
	
	delhotelorder(id) {
		/* 删除酒店订单 */
		let user_id = sessionStorage.getItem("id");
		axios.get("http://localhost:9999/delhotelorder", {
			params: {
				id,
				user_id
			}
		}).then((res) => {
			if (res.data.status === 1) {
				this.setState({
					hotellist: res.data.hotellist
				});
			} else {
				alert(res.data.msg);
			}
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		})
	}
	
	showticketlist() {
		let res = this.state.ticketlist.map((item) => {
			return (
				<div className="peorders" key={item.id}>
					<div>机票火车票</div>
					
					<div>出发地:{item.departure}</div>
					<div>目的地:{item.destination}</div>
					<div>出发日期:{item.ddate}</div>
					<div>到达日期:{item.adate}</div>
					<div>{item.child==1?"不携带儿童":"携带儿童"}</div>
					<div>单价:￥{item.aprice}</div>
					<div>数量:{item.acount}</div>
					<div>总价:￥{item.asum}</div>
					<div onClick={this.delticketorder.bind(this, item.id, item.tikcet_id)}>删除</div>
				</div>
			);
		});
		return res;
	}
	
	delticketorder(id, tikcet_id) {
		/* 删除机票火车票订单 */
		let user_id = sessionStorage.getItem("id");
		axios.get("http://localhost:9999/delticketorder", {
			params: {
				id,
				tikcet_id,
				user_id
			}
		}).then((res) => {
			if (res.data.status === 1) {
				this.setState({
					ticketlist: res.data.ticketlist
				});
			} else {
				alert(res.data.msg);
			}
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		});
	}
	
	render() {
		return (
			<div className="peorderbox">
				{this.showhotellist()}
				{this.showticketlist()}
			</div>
		);
	}
}
