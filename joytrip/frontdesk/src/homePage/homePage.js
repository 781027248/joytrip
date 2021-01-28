import React from "react";
import Lunbo from "./js/lunboImg.js";
import TabControl from "./js/tabControl";
import HotRecommend from "./js/hotRecommend.js";
import MoreRoutes from "./js/moreRoutes.js";
import Phead from "../public/Phead.js";
import Pfoot from "../public/Pfoot.js";
export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Phead history={this.props.history} />
				<Lunbo/>
				<TabControl/>	
				<HotRecommend/>
				<MoreRoutes/>
				<Pfoot />
			</div>
		);
	}
}