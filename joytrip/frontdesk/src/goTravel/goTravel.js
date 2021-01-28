import React from "react";
import Free from "./free/free.js"
import { Menu } from 'antd';
import "./goTravel.css";
import Phead from "../public/Phead.js";
import Pfoot from "../public/Pfoot.js";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
export default class GoTravel extends React.Component {
	constructor(props) {
	    super(props);
		this.state={
			current: 'mail',
			page:"Free"
		}
	}
	handleClick(e) {
	    this.setState({ current: e.key });
		if(e.key=="app"){
			
		}else if(e.key=="team"){
			alert(2)
		}else if(e.key=="alipay"){
			alert(3)
		}
	  }
	render() {
			const { current } = this.state;
		return (
			<>
				<Phead history={this.props.history} />
					<div className="container">
					<Menu onClick={this.handleClick.bind(this)} selectedKeys={[current]} mode="horizontal">
					        <Menu.Item key="mail">
					          自由行
					        </Menu.Item>
					        <Menu.Item key="app">
					          当地游
					        </Menu.Item>
					        <Menu.Item key="team">
					          跟团游
					        </Menu.Item>
					        <Menu.Item key="alipay">
					          旅游签证
					        </Menu.Item>
					     </Menu>
						 <Free />
					</div>
					<Pfoot />
			</>
		);
	}
}