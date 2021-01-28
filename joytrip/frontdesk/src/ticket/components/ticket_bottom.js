import React from "react";
import "../css/ticket.css";
import axios from "axios";
import { Menu } from 'antd';
import chen_Bei from "../img/chen-bei.jpeg";
import chen_Tian from "../img/chen-tian.png";
import chen_Da from "../img/chen-da.jpeg";
import chen_Tai from "../img/chen-tai.jpeg";

export default class Ticketbottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '上海',
            addressArr1:[],
            addressArr2:[],
            addressArr3:[]
        }
        this.getAddressArr(this.state.current)
    }
    async getAddressArr(cur){
		let res = await axios.get('http://localhost:9999/getAddressByStart',{
			params:{
				departure:cur
			}
        })
        
		this.setState({
            addressArr1:res.data.splice(0,4),
            addressArr2:res.data.splice(0,4),
            addressArr3:res.data.splice(0,4)
		})
    }
    //菜单切换
	handleClick = e => {
		this.setState({ current: e.key });
		this.getAddressArr(e.key);
    }
    toxiangqin(cur,destination){
        this.props.history.push({pathname:'/orderTicket'});
        sessionStorage.setItem('cur',cur);
        sessionStorage.setItem('destination',destination);
    }
    
    render() {
        const { current } = this.state;
        // console.log(current);
        // const current = this.props.current;
        // const addressArr = this.props.addressArr;
        return (
            <div>
                <div className="ticket-box-bottom-top">
						<div onClick={this.toxiangqin.bind(this,'成都','北京')}>
							<img src={chen_Bei} width="255" height="140"/>
							<div>北京</div>
						</div>
						<div onClick={this.toxiangqin.bind(this,'成都','天津')}>
							<img src={chen_Tian} width="255" height="140"/>
							<div>天津</div>
						</div>
						<div onClick={this.toxiangqin.bind(this,'成都','太原')}>
							<img src={chen_Tai} width="255" height="140"/>
							<div>太原</div>
						</div>
						<div onClick={this.toxiangqin.bind(this,'成都','大连')}>
							<img src={chen_Da} width="255" height="140"/>
							<div>大连</div>
						</div>
					</div>
                <div className="ticket-box-bottom-center">
						<p className="ticket-box-bottom-center-p">国内旅游热门城市</p>
						<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" className="ticket-box-bottom-center-menu">
							<Menu.Item key="上海">上海</Menu.Item>
							<Menu.Item key="北京">北京</Menu.Item>
							<Menu.Item key="成都">成都</Menu.Item>
							<Menu.Item key="广州">广州</Menu.Item>
							<Menu.Item key="重庆">重庆</Menu.Item>
							<Menu.Item key="西安">西安</Menu.Item>
							<Menu.Item key="昆明">昆明</Menu.Item>
							<Menu.Item key="杭州">杭州</Menu.Item>
							<Menu.Item key="深圳">深圳</Menu.Item>
							<Menu.Item key="三亚">三亚</Menu.Item>
							<Menu.Item key="厦门">厦门</Menu.Item>
							<Menu.Item key="南京">南京</Menu.Item>
						</Menu>
					</div>
                    <div className="ticket-box-bottom-foot">
                <div className="ticket-box-bottom-foot-left">
                        
                        {
                            this.state.addressArr1.map(item =>(
                                <div key={item.id} onClick={this.toxiangqin.bind(this,current,item.destination)}>
                                    <span>{current}</span>
                                    <span>————</span>
                                    <span>{item.destination}</span>
                                    <span>￥{item.price}</span>
                                </div>
                            ))
                        }	
                        
                </div>
                <div className="ticket-box-bottom-foot-center">
                        {
                            this.state.addressArr2.map(item =>(
                                <div key={item.id} onClick={this.toxiangqin.bind(this,current,item.destination)}>
                                    <span>{current}</span>
                                    <span>————</span>
                                    <span>{item.destination}</span>
                                    <span>￥{item.price}</span>
                                </div>
                            ))
                        }	
                    </div>
                    <div className="ticket-box-bottom-foot-right">
                        {
                            this.state.addressArr3.map(item =>(
                                <div key={item.id}  onClick={this.toxiangqin.bind(this,current,item.destination)}>
                                    <span>{current}</span>
                                    <span>————</span>
                                    <span>{item.destination}</span>
                                    <span>￥{item.price}</span>
                                </div>
                            ))
                        }	
                    </div> 
                </div>
            </div>
            
        )
    }
}