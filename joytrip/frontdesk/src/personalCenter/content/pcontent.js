import React from "react";
import "./pcontent.css";
export default class Pcontent extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			nickname: "",
			avatar: ""
		};
	}
	componentDidMount() {
		let nickname = sessionStorage.getItem("nickname");
		let avatar = sessionStorage.getItem("avatar");
		this.setState({
			nickname,
			avatar
		});
	}
	render() {
		return (
			<div className="pcontentbox">
				<div className="container pecon-userinfobox">
					<div>
						<img className="pe-con-avatar" src={this.state.avatar} />
						<div className="pe-con-nickname">
							欢迎回来,{this.state.nickname}!
						</div>
					</div>
				</div>
			</div>
		);
	}
}
