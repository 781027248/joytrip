import React from "react";
import { Layout } from 'antd';
import Head from "./guHead"
import Slider from "./guSlider";
import GuContent from "./guContent";
import Phead from "../../public/Phead.js";
import Pfoot from "../../public/Pfoot.js";
const { Header, Sider, Content } = Layout;
export default class Guideline extends React.Component {
	render() {
		return (
			<>
				<Phead history={this.props.history} />
				<div className="container guidelinebox">
					<Layout>
						{/* {<Header>
							
						</Header>} */}
						<Head />
						<Layout>
							<Sider style={{backgraundColor: "#fff"}}><Slider /></Sider>
							<Content><GuContent /></Content>
						</Layout>
					</Layout>
				</div>
				<Pfoot />
			</>
		);
	}
}