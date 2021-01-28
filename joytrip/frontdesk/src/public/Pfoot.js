import React from "react";
import "./Pfoot.css";
import { Modal } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import axios from "axios";

export default class Pfoot extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: "",
			userPhone: "",
			ModalText: '',
			visible: false,
			confirmLoading: false,
		}
	}
	infoSubmit() {
		let name = document.getElementsByClassName("pf-name")[0].value;
		let phone = document.getElementsByClassName("pf-phone")[0].value;
		if (name != "") {
			if (phone === "") {
				this.setState({
					visible: true,
					ModalText: "电话号码不能为空！",
				});
			} else if (!(/^1[3456789]\d{9}$/.test(phone))) {
				this.setState({
					visible: true,
					ModalText: "请输入11位手机号码！",
				});
			} else {
				this.setState({
					userName: name,
					userPhone: phone,
					visible: true,
					ModalText: "提交成功,我们会尽快与您取得联系!",
				})
			}

		} else {
			this.setState({
				visible: true,
				ModalText: "姓名不能为空！",
			});
		}
	}
	handleOk = () => {
		
		if (this.state.ModalText != "提交成功,我们会尽快与您取得联系!") {
			this.setState({
				visible: false,
				confirmLoading: false,
			});
		} else {
			this.setState({
				confirmLoading: true,
			});
			setTimeout(() => {
				this.setState({
					visible: false,
					confirmLoading: false,
					ModalText: "提交成功,我们会尽快与您取得联系!",
				});
			this.customTour();	
			
			}, 2000);
			alert("提交成功！")

		}
		document.getElementsByClassName("pf-name")[0].value="";
		document.getElementsByClassName("pf-phone")[0].value="";
		
	};
	async customTour() {
		let res = await axios.post('http://localhost:9999/customTour', {
				name: this.state.userName,
				phone: this.state.userPhone
		})
		console.log(res.data)
	}

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};


	render() {
		const { visible, confirmLoading, ModalText } = this.state;
		return (
			<div className="Pfootbox" >
				<div className="Pfoot container">
					<span>地址：四川省成都市金牛区</span>
					<span>客服热线：000-0000-000</span>
					<span>座机：028-00000000</span>
					<span>邮箱：yuezhixing@yzx.com</span>
					<div className="pfoot-lianxi">
						<p>留下联系方式，我们会尽快和您取得联系！</p>
						<input placeholder="您的姓名" className="pfoot-name pf-name"></input>
						<input placeholder="您的电话" className="pfoot-name pf-phone" maxLength="11"></input>
						<button className="pfoot-submit" onClick={(e) => this.infoSubmit(e)}>提交</button>
						<p>版权所有 2015 成都悦之行国际旅行社有限公司  蜀ICP备16018295号-1 网站设计：赛门仕博</p>
						<p>声明：本网站部分图片来自网络，若作者看到，请尽快与行之悦旅行联系。</p>
					</div>
				</div>
				<Modal
					title="提示"
					visible={visible}
					onOk={this.handleOk}
					confirmLoading={confirmLoading}
					onCancel={this.handleCancel}
					locale={locale}
					destroyOnClose={false}
					cancelText="取消"
					okText="确认"
				>
					<p>{ModalText}</p>
				</Modal>
			</div>
		);
	}
}
