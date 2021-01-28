import React from "react";
import axios from "axios";
import "../css/order_hotel.css";
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

export default class Hoteltitle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            hotelArr:[],
            destinaton:'',
			city:sessionStorage.getItem("city"),
			ht_id: ""
        };
    }
    
	componentDidMount(){
        this.getHotelArr();
    }
    
	async getHotelArr(){
	    let city = this.state.city;
	    let res = await axios.get('http://localhost:9999/getHotelArr',{
	        params:{
	            destination:city
	        }
	    });
	    this.setState({
	        hotelArr: res.data
	    })
	}
	
	async getType(){
	    let arr = ['市中心','郊区','看海'];
	    let city = this.state.city;
		console.log(city)
	    if(arr.indexOf(document.getElementById('oht-end-city').value.trim()) !== -1){
	        let res = await axios.get('http://localhost:9999/gethotelArrByType',{
	            params:{
	                type:document.getElementById('oht-end-city').value.trim(),
	                destination:city
	            }
	        });
	        this.setState({
	            hotelArr: res.data
	        });
	    }else {
	        alert('请输入正确的类型')
	    }
	}
    
	ordainhotel(id) {
		let user_id = sessionStorage.getItem("id");
		if (user_id === null) {
			this.props.history.push("/Login");
		} else {
			let mod = document.getElementById("oder-mod");
			mod.style.display = "block";
			this.setState({
				ht_id: id
			});
		}
	}
	
	odercancel() {
		let mod = document.getElementById("oder-mod");
		mod.style.display = "none";
		this.defaultoder();
	}
	
	defaultoder() {
		let intime = document.getElementById("oder-intime");
		let dtime = document.getElementById("oder-dtime");
		let num = document.getElementById("oder-num");
		let hcount = document.getElementById("oder-hcount");
		intime.value = "";
		dtime.value = "";
		num.value = 1;
		hcount.value = 1;
	}
	
	oderconfirm() {
		let intime = document.getElementById("oder-intime");
		let dtime = document.getElementById("oder-dtime");
		let num = document.getElementById("oder-num");
		let hcount = document.getElementById("oder-hcount");
		
		if (intime.value.trim() !== "" && dtime.value.trim() !== "" && num.value.trim() !== "" && hcount.value.trim() !== "") {
			let user_id = sessionStorage.getItem("id");
			axios.post("http://localhost:9999/bookhotel", {
				user_id: user_id,
				intime: intime.value,
				dtime: dtime.value,
				num: num.value,
				hcount: hcount.value,
				id: this.state.ht_id
			}).then((res) => {
				if (res.data.status === 1) {
					alert(res.data.msg);
					this.setState({
						hotelArr: res.data.list
					});
					this.odercancel();
				}
			}).catch((err) => {
				console.log("ajax请求失败");
				console.log(err);
			});
		}
		
	}
	
	render(){
        return (
		<>
			<div id="oder-mod">
				<div className="odermod-cofirm">
					<h3 style={{color:'#ff9d00'}}>请填写信息</h3>
					<div><label htmlFor="oder-intime">入住时间:</label><input id="oder-intime" placeholder="年-月-日" type="text" /></div>
					<div><label htmlFor="oder-dtime">离开时间:</label><input id="oder-dtime" placeholder="年-月-日" type="text" /></div>
					<div><label htmlFor="oder-num">到店人数:</label><input id="oder-num" type="text" defaultValue="1" /></div>
					<div><label htmlFor="oder-hcount">房间数量:</label><input id="oder-hcount" type="text" defaultValue="1" /></div>
					<div className="odermod-cofirm-btn">
						<button onClick={this.odercancel.bind(this)}>取消</button>
						<button onClick={this.oderconfirm.bind(this)}>确认</button>
					</div>
				</div>
			</div>
			
            <div className="order-hotel">
				
                <div className="order-hotel-top">
                    <span>您在这里：</span>
                    <div className="order-hotel-top-brc">
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item href="http://localhost:3000/Hotel">订酒店</Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.city}酒店预订</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="order-hotel-searchbox">
                    <div onFocus={this.endCityFocus} onBlur={this.endCityBlur}>
						<label htmlFor="oht-end-city" className="oht-label">酒店位置</label>
                        <input id="oht-end-city" placeholder="市中心/郊区/看海"/>
					</div>
					<div>
						<label htmlFor="oht-start-time" className="oht-label">入住日期</label>
						<Space direction="vertical">
							<DatePicker onChange={this.onChangeStartTime} id="oht-start-time" locale={locale}/>
						</Space>
					</div>
					<div>
						<label htmlFor="oht-end-time" className="oht-label">离店日期</label>
						<Space direction="vertical">
							<DatePicker onChange={this.onChangeEndTime} id="oht-end-time" locale={locale}/>
						</Space>
					</div>
                    <div className="order-hotel-searchbtn">
                        <Button type="primary" onClick={this.getType.bind(this)}>查看价格</Button>
                    </div>
                </div>
                <div className="order-hotel-show">
                    {
                        this.state.hotelArr.map(item => {
                            return (
                                <div key={item.id}>
                                    <img src={item.image} width="300" height="150" style={{margin:0}}/>
                                    <div className="order-hotel-show-name">
                                        <span>{item.hname}</span>
                                        <span>酒店类型: {item.addtype}</span>
                                        <span>性价比: {item.cost}</span>
                                    </div>
                                    <div className="order-hotel-show-price">
                                        <span>￥{item.hprice}/间</span>
                                        <span>空房间: {item.emptyroom}个</span>
                                    </div>
                                    <button onClick={this.ordainhotel.bind(this,item.id)} className="order-hotel-show-btn">预订房间</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
			</>
        )
    }
}