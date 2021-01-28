import React from "react";
import axios from "axios";
import "../css/hotel.css";
import { Menu } from 'antd';
// import Oderhotelone from "./oder_hotel_one.js";

import xianbenna from "../img/xianbenna.jpeg";
import medf from "../img/maerdaifu.jpeg";
import taodao from "../img/taodao.jpeg";
import balidao from "../img/balidao.jpeg";
import xiaweiyi from "../img/xiaweiyi.jpeg";
import sanya from "../img/sanya.jpg";

import shouer from "../img/shouer.jpeg";
import dongjing from "../img/dongjing.jpeg";
import dali from "../img/dali.jpeg";
import beijing from "../img/beijing.jpeg";
import beihaidao from "../img/beihaidao.jpeg";
import dongcue from "../img/dongcue.jpeg";

import wugeku from "../img/wugeku.jpeg";
import yelusal from "../img/yelusal.jpeg";
import agela from "../img/agela.jpeg";
import kailuo from "../img/kailuo.jpeg";
import weichengshan from "../img/weichengshan.jpeg";
import luoma from "../img/luoma.jpeg";

import chengdu from "../img/chengdu.jpg";
import xian from "../img/xian.jpg";
import chongqin from "../img/chongqin.jpg";
import changsha from "../img/changsha.jpg";
import aomen from "../img/aomen.jpg";
import lanzhou from "../img/lanzhou.jpg";

import chongming from "../img/chongming.jpg";
import qiandao from "../img/qiandao.jpg";
import mogan from "../img/mogan.jpg";
import gubei from "../img/gubei.jpg";
import chengde from "../img/chengde.jpg";
import beidai from "../img/beidai.jpg";

import shang from '../img/shang.jpeg';
import sour from "../img/sour.jpeg";
import danmai from "../img/danmai.jpeg";
import niuyue from "../img/niuyue.jpeg";
import bolin from "../img/bolin.jpeg";
import taizhong from "../img/taizhong.jpeg";

import luotb from "../img/luotb.jpg";
import haidedb from "../img/haideb.jpg";
import haersitt from "../img/haersitt.jpg";
import wuyu from "../img/twuyuc.jpg";
import yangjiao from "../img/yangjiao.jpg";
import yintelaken from "../img/yintelaken.jpg";

import fushis from "../img/fushishan.jpg";
import nailiang from "../img/nailiang.jpg";
import amusted from "../img/amusited.jpg";
import bulusaier from "../img/bulusaier.jpg";
import linzhi from "../img/linzhi.jpg";
import luoping from "../img/luoping.jpg";

import xianggang from "../img/xianggang.jpeg";
import taibei from "../img/taibei.jpg";
import sourmingd from "../img/sourmingd.jpg";
import sanlitun from "../img/sanlitun.jpg";
import dongjingsg from "../img/dongjingsg.jpg";
import lundun from "../img/lundun.jpg";

import changtan from "../img/changtan.jpg";
import sumeid from "../img/sumeidao.jpg";
import yazhuang from "../img/yazhaung.jpg";
import lankawei from "../img/lankawei.jpg";
import xiangang from "../img/xiangang.jpg";


const water = [
    {imgSrc:xianbenna,city:'仙本那',contry:'马来西亚'},
    {imgSrc:medf,city:'马尔代夫',contry:'马尔代夫'},
    {imgSrc:taodao,city:'涛岛',contry:'搁拍岩'},
    {imgSrc:balidao,city:'巴厘岛',contry:'印度尼西亚'},
    {imgSrc:xiaweiyi,city:'夏威夷',contry:'美国'},
    {imgSrc:sanya,city:'三亚',contry:'中国'}
];
const dest = [
    {imgSrc:shouer,city:'首尔',contry:'韩国'},
    {imgSrc:dongjing,city:'东京',contry:'日本'},
    {imgSrc:dali,city:'大理',contry:'中国'},
    {imgSrc:beijing,city:'北京',contry:'中国'},
    {imgSrc:beihaidao,city:'北海道',contry:'日本'},
    {imgSrc:dongcue,city:'洞窟',contry:'格雷梅'}
]

const chaobai = [
    {imgSrc:wugeku,city:'吴哥窟',contry:'泰国'},
    {imgSrc:yelusal,city:'耶路撒冷',contry:'巴勒斯但'},
    {imgSrc:agela,city:'安哥拉',contry:'安哥拉'},
    {imgSrc:kailuo,city:'开罗',contry:'埃及'},
    {imgSrc:weichengshan,city:'卫城山',contry:'中国'},
    {imgSrc:luoma,city:'罗马',contry:'意大利'}
];

const eat = [
    {imgSrc:chengdu,city:'成都',contry:'四川'},
    {imgSrc:xian,city:'西安',contry:'陕西'},
    {imgSrc:chongqin,city:'重庆',contry:'重庆'},
    {imgSrc:changsha,city:'长沙',contry:'湖南'},
    {imgSrc:aomen,city:'澳门',contry:'澳门'},
    {imgSrc:lanzhou,city:'兰州',contry:'甘肃'}
]

const week = [
    {imgSrc:chongming,city:'崇明岛',contry:'中国'},
    {imgSrc:qiandao,city:'千岛湖',contry:'中国'},
    {imgSrc:mogan,city:'莫干山',contry:'中国'},
    {imgSrc:gubei,city:'古北镇',contry:'中国'},
    {imgSrc:chengde,city:'承德',contry:'中国'},
    {imgSrc:beidai,city:'北戴河',contry:'中国'}
]

const design = [
    {imgSrc:shang,city:'上海',contry:'中国'},
    {imgSrc:sour,city:'首尔',contry:'韩国'},
    {imgSrc:danmai,city:'丹麦',contry:'丹麦'},
    {imgSrc:niuyue,city:'纽约',contry:'美国'},
    {imgSrc:bolin,city:'柏林',contry:'德国'},
    {imgSrc:taizhong,city:'台中',contry:'中国'}
]

const tonghua = [
    {imgSrc:luotb,city:'罗腾堡',contry:'德国'},
    {imgSrc:haidedb,city:'海德堡',contry:'德国'},
    {imgSrc:haersitt,city:'哈尔斯塔特',contry:'奥地利'},
    {imgSrc:wuyu,city:'五渔村',contry:'意大利'},
    {imgSrc:yangjiao,city:'羊角村',contry:'荷兰'},
    {imgSrc:yintelaken,city:'因特拉肯',contry:'瑞士'}
]
const flower = [
    {imgSrc:fushis,city:'富士山',contry:'日本'},
    {imgSrc:nailiang,city:'奈良',contry:'日本'},
    {imgSrc:amusted,city:'阿姆斯特丹',contry:'荷兰'},
    {imgSrc:bulusaier,city:'布鲁塞尔',contry:'比利时'},
    {imgSrc:linzhi,city:'林芝',contry:'中国'},
    {imgSrc:luoping,city:'罗平',contry:'中国'}
]

const shopping = [
    {imgSrc:xianggang,city:'香港中环',contry:'中国'},
    {imgSrc:taibei,city:'台北西门町',contry:'中国'},
    {imgSrc:sourmingd,city:'首尔明洞',contry:'韩国'},
    {imgSrc:sanlitun,city:'北京三里屯',contry:'中国'},
    {imgSrc:dongjingsg,city:'东京涩谷',contry:'日本'},
    {imgSrc:lundun,city:'伦敦',contry:'英国'}
]
const personnal = [
    {imgSrc:changtan,city:'长滩岛',contry:'菲律宾'},
    {imgSrc:sumeid,city:'苏梅岛',contry:'泰国'},
    {imgSrc:yazhuang,city:'芽庄',contry:'越南'},
    {imgSrc:lankawei,city:'兰卡威',contry:'马来西亚'},
    {imgSrc:xiangang,city:'岘港',contry:'越南'},
    {imgSrc:sanya,city:'三亚',contry:'中国'}
]

export default class Hoteltitle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            addArr:water,
            current:'water'
        };
    }
    handleClick(e){
        this.setState({ current: e.key });
		switch(e.key){
            case 'water':this.setState({ addArr: water });break;
            case 'personnal':this.setState({ addArr: personnal });break;
            case 'tonghua':this.setState({ addArr: tonghua });break;
            case 'flower':this.setState({ addArr: flower });break;
            case 'dest':this.setState({ addArr: dest });break;
            case 'chaobai':this.setState({ addArr: chaobai });break;
            case 'eat':this.setState({ addArr: eat });break;
            case 'week':this.setState({ addArr: week });break;
            case 'design':this.setState({ addArr: design });break;
            case 'shopping':this.setState({ addArr: shopping });break;
        }
    }
    transpar(index){
        let ifcon = document.getElementsByClassName('ifcon');
        let transimg = document.getElementsByClassName('ht-titlecom-img-context');
        ifcon[index].nextElementSibling.style.backgroundImage = 'linear-gradient(60deg, rgba(10, 10, 10, 0.3), transparent 100%)';
        // transimg[index].style.tranform = "rotate(360deg)";
    }
    transout(index){
        let ifcon = document.getElementsByClassName('ifcon');
        ifcon[index].nextElementSibling.style.backgroundImage = 'linear-gradient(45deg, rgba(0, 0, 0, 0.4), transparent 40%)';
    }
    toOderHotel(city){
        this.props.history.push({
            pathname:'/orderHotel'
        });
		sessionStorage.setItem("city", city);
    }
    render(){
        const {current} = this.state;
        return (
            <div>
                <div  className="ht-titlecom-menu">
                    <Menu onClick={this.handleClick.bind(this)} selectedKeys={[current]} mode="horizontal">
							<Menu.Item key="water">潜水胜地</Menu.Item>
							<Menu.Item key="personnal">私人海滩</Menu.Item>
							<Menu.Item key="tonghua">童话小镇</Menu.Item>
							<Menu.Item key="flower">浪漫花海</Menu.Item>
							<Menu.Item key="dest">目的地特色</Menu.Item>
							<Menu.Item key="chaobai">朝拜历史</Menu.Item>
							<Menu.Item key="eat">吃货根据地</Menu.Item>
							<Menu.Item key="week">周末好去处</Menu.Item>
							<Menu.Item key="design">设计酒店</Menu.Item>
							<Menu.Item key="shopping">血拼购物</Menu.Item>
					</Menu>
                </div>
                <div className="ht-titlecom-img">
                    {
                        this.state.addArr.map((item,index) => {
                            return (
                                <div onMouseEnter={this.transpar.bind(this,index)} onMouseOut={this.transout.bind(this,index)} 
                                    onClick={this.toOderHotel.bind(this,item.city)}>
                                    <img src={item.imgSrc} width="350" height="240" />
                                    <div className="ifcon"></div>
                                    <span className="trans"></span>
                                    <div className="ht-titlecom-img-context">
                                        <h2>{item.city}</h2>
                                        <h4>{item.contry}</h4>
                                    </div>
                                    {/* <Oderhotelone/> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}