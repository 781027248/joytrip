import React from "react";
import gt from ".././ljimg/gt.png"
import fj from ".././ljimg/fengjing.jpg"
import riben from ".././ljimg/riben.png"
import ben from ".././ljimg/tiantan.png"
import aodaliya from ".././ljimg/aodaliya.png"
import dongnanya from ".././ljimg/dongnanya.png"
import ouzhou from ".././ljimg/ouzhou.png"
import xianggang from ".././ljimg/xianggang.png"
import yezi from ".././ljimg/yezi.png"
import riben1 from ".././ljimg/riben.jpg"
import taiguo1 from ".././ljimg/taiguo.jpg"
import xianggang1 from ".././ljimg/xianggang.jpg"
import ouzhou1 from ".././ljimg/ouzhou.jpg"
import yezi1 from ".././ljimg/yezi.jpg"
import aozhou from ".././ljimg/aozhou.jpg"
import jl from ".././ljimg/jl.png"
import { Menu } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Hotsell from "./hotsell.js"
import Xiujia from "./xiujia.js"
import Sea from "./sea.js"
import Ship from "./ship.js"
import Buy from "./buy.js"
import Zhuti from "./zhuti.js"
import FreeX from "./freeX.js"
import Chuxing from "./chuxing.js"
import LocalW from "./localW.js"
import Changxiao from "./changxiao.js"
import "./free.css"
const { Search } = Input;
const { SubMenu } = Menu;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#FF9D00',
    }}
  />
);
export default class Free extends React.Component{
	constructor(props) {
	    super();
	}
	handleClick(e){
		console.log(e.key)
	}
	render(){
		return(
		<>
		<div className="ftop">
		<img src={gt} />
		<span>自由行</span>
		<div>
		 <Search 
		  onSearch={value => 
		  console.log(value)}
		   enterButton />
		</div>
		</div>
		<div className="lsb">
		<div className="lsb1">
		<ul>
			<li className="lsb1li1">
			<div className="lsb1li11">
			     <img src={ben} />
				 <div>
				<h3>国内旅游</h3>
				<a href="#">三亚</a>
				<a href="#">丽江</a>
				<a href="#">厦门</a>
				<a href="#">成都</a>
				<a href="#">西安</a>
				</div>
			</div>
			<div className="lsb3">
			<div className="lsb31">
			<ul>
				<li>
					<span>海南</span>|
					<span>三亚</span>|
					<span>海南</span>
					
				</li>
				<li>
				<span>云南</span>|
				<span>丽江</span>|
				<span>昆明</span>
				</li>
				<li>
				<span>四川</span>|
				<span>成都</span>|
				<span>乐山</span>
				</li>
				<li>
				<span>西南</span>|
				<span>西藏</span>|
				<span>拉萨</span>
				</li>
				<li>
				<span>西北</span>|
				<span>西安</span>|
				<span>西宁</span>
				</li>
			</ul>
			<ul>
				<li>
					<span>福建</span>|
					<span>厦门</span>|
					<span>鼓浪屿</span>
					
				</li>
				<li>
				<span>广东</span>|
				<span>深圳</span>|
				<span>广州</span>
				</li>
				<li>
				<span>内蒙古</span>|
				<span>呼伦贝尔</span>|
				<span>包头</span>
				</li>
				<li>
				<span>河北</span>|
				<span>北戴河</span>|
				<span>白洋淀</span>
				</li>
				<li>
				<span>山西</span>|
				<span>太原</span>|
				<span>五台山</span>
				</li>
			</ul>
			</div>
			</div>
			</li> 
			<li className="lsb1li2">
			<div className="lsb1li11">
			     <img src={riben} />
				 <div>
				<h3>日本</h3>
				<a href="#">东京</a>
				<a href="#">大阪</a>
				<a href="#">冲绳</a>
				<a href="#">北海道</a>
				</div>
			</div>
			<div className="lsb111">
			<ul>
				<li>
					<span>日本</span>|
					<span>东京</span>|
					<span>大阪</span>|
					<span>冲绳</span>|
					<span>京都</span>|
					<span>北海道</span>|
					<span>名古屋</span>|
					<span>奈良</span>
					<img src={riben1} />
				</li>
			</ul>
			</div>
			</li>
			<li className="lsb1li3">
			<div className="lsb1li11">
			     <img src={dongnanya} />
				 <div>
				<h3>东南亚 泰国</h3>
				<a href="#">普吉岛</a>
				<a href="#">清迈</a>
				<a href="#">巴厘岛</a>
				</div>
			</div>
			<div className="lsb222">
			<ul>
				<li>
					<span>东南亚</span>|
					<span>普吉岛</span>|
					<span>曼谷</span>|
					<span>马尔代夫</span>|
					<span>马来西亚</span>|
					<span>文莱</span>|
					<span>巴厘岛</span>|
					<span>新加坡</span>
					<img src={taiguo1} />
				</li>
				
			</ul>
			</div>
			</li>
			<li className="lsb1li4">
			<div className="lsb1li11">
			     <img src={xianggang} />
				 <div>
				<h3>香港 澳门</h3>
				<a href="#">台北</a>
				<a href="#">高雄</a>
				<a href="#">香港</a>
				<a href="#">迪斯尼</a>
				</div>
			</div>
			<div className="lsb333">
			<ul>
				<li>
					<span>香港</span>|
					<span>澳门</span>|
					<span>台北</span>|
					<span>高雄</span>|
					<span>花莲</span>|
					<span>南投</span>
					<img src={xianggang1} />
				</li>
			</ul>
			</div>
			</li>
			<li className="lsb1li5">
			<div className="lsb1li11">
			     <img src={ouzhou} />
				 <div>
				<h3>欧洲 美洲</h3>
				<a href="#">英国</a>
				<a href="#">法国</a>
				<a href="#">意大利</a>
				<a href="#">德国</a>
				</div>
			</div>
			<div className="lsb444">
			<ul>
				<li>
					<span>欧洲</span>|
					<span>英国</span>|
					<span>法国</span>|
					<span>意大利</span>|
					<span>芬兰</span>|
					<span>德国</span>|
					<span>俄罗斯</span>|
					<span>荷兰</span>
					<img src={ouzhou1} />
				</li>
			</ul>
			</div>
			</li>
			<li className="lsb1li6">
			<div className="lsb1li11">
			     <img src={aodaliya} />
				 <div>
				<h3>澳洲 中东</h3>
				<a href="#">澳大利亚</a>
				<a href="#">毛里求斯</a>
				</div>
			</div>
			<div className="lsb555">
			<ul>
				<li>
					<span>澳洲</span>|
					<span>澳大利亚</span>|
					<span>新西兰</span>|
					<span>墨尔本</span>|
					<span>悉尼</span>|
					<span>奥克兰</span>|
					<span>凯恩斯</span>|
					<span>迪拜</span>
					<img src={aozhou} />
				</li>
			</ul>
			</div>
			</li>
			<li className="lsb1li7">
			<div className="lsb1li11">
			     <img src={yezi} />
				 <div>
				<h3>热门海岛</h3>
				<a href="#">巴厘岛</a>
				<a href="#">普吉岛</a>
				<a href="#">塞班</a>
				<a href="#">斐济</a>
				</div>
			</div>
			<div className="lsb666">
			<ul>
				<li>
					<span>海岛</span>|
					<span>普吉岛</span>|
					<span>巴厘岛</span>|
					<span>马尔代夫</span>|
					<span>马来西亚</span>|
					<span>文莱</span>|
					<span>关岛</span>|
					<span>阿玛瑞岛</span>
					<img src={yezi1} />
				</li>
			</ul>
			</div>
			</li>
		</ul>
		</div>
	<div className="lsb2">
		<img src={fj} />
		<ul className="lsb21">
		<li>
		<div className="lsb211"></div>
		<div className="lsb2111">
		<p>透明低价</p>
		<p>超值低价,每日更新</p>
		</div>
		</li>
		<li>
		<div className="lsb212"></div>
		<div className="lsb2111">
		<p>海量路线</p>
		<p>全球线路,自由选择</p>
		</div>
		</li>
		<li>
		<div className="lsb213"></div>
		<div className="lsb2111">
		<p>专业保障</p>
		<p>专业客服,实时在线</p>
		</div>
		</li>
		</ul>
	</div>
		</div>
		<Hotsell />
		<Xiujia / >
		<Sea />
		<Ship />
		<Buy />
		<Zhuti />
		<FreeX />
		<Chuxing />
		<LocalW />
		<Changxiao />
		</>
		);
	}
}