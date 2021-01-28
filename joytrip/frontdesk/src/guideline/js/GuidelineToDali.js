import React from "react";
import "../../../src/index.css";
import "../css/ToDali.css";
import Comment from "./comment.js";
import Phead from "../../public/Phead.js";
import Pfoot from "../../public/Pfoot.js";
import axios from 'axios';
import { Link } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import Axios from "axios";
export default class ToDali extends React.Component {
    constructor() {
        super();
        this.state = {
            shows: [
                { id: 1, src: "https://n1-q.mafengwo.net/s15/M00/85/31/CoUBGV380D-AW_zbAACA9vemmNc53.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 2, src: "https://p1-q.mafengwo.net/s1/M00/09/62/wKgBm02VosSnGMqJAAAR1ipesCc88.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 3, src: "https://b1-q.mafengwo.net/s1/M00/35/36/wKgBm02sKdXoxdUBAAAPA6BlxeE51.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 4, src: "https://n1-q.mafengwo.net/s11/M00/3B/E8/wKgBEFztwUWAdO9VAAC4W6ZqKt070.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 5, src: "https://b1-q.mafengwo.net/s1/M00/0C/DE/wKgBm02Vwu-lbib-AAAOcIOO3Jc39.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" }
            ],
            imgs: [
                { id: 1, url: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1600608122&di=5ca2a7db6c419f7653364786e1317011&src=http://n.sinaimg.cn/sinacn23/619/w1360h859/20180719/ed37-hfnsvzc1072125.jpg" },
                { id: 2, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600618259823&di=075867047efca8eb1398af95d4168cc6&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-02-05%2F5a7813c824631.jpg" },
                { id: 3, url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3949222721,641036855&fm=26&gp=0.jpg" },
                { id: 4, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600618342757&di=cc65aa97d059593b4d2a0e910a1e71ff&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd9%2F1706%2Ff1%2Fafe1325fb609ebb5.jpg_r_720x480x95_4013aca6.jpg" },
                {
                    id: 5, url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1239749949,3975196988&fm=26&gp=0.jpg"
                }
            ],
        }
    }
    list() {
        const listItems = this.state.shows.map((item) => {
            return (
                <img key={item.id} src={item.src} />
            )
        }
        );
        return listItems;
    }
    getimgs() {
        const listImg = this.state.imgs.map((items) => {
            return (
                <img key={items.id} src={items.url} />
            )
        }
        );
        return listImg
    };
    render() {
        return (
            <>
                <Phead history={this.props.history} />
                <div className="container">
                    <div className="toDaliTop">
                        <Link to="/Guideline">旅游攻略</Link>&gt;
                <span className="present">大理</span>
                    </div>
                    <div className="Dalishowinfo">
                        <div className="Dalishowimg">
                            <img src="https://n1-q.mafengwo.net/s9/M00/F2/3E/wKgBs1awe3SAO6YvAAhkrsH0YNo64.jpeg?imageMogr2%2Fthumbnail%2F%21230x325r%2Fgravity%2FCenter%2Fcrop%2F%21230x325%2Fquality%2F90" />
                        </div>
                        <div className="Dalishowbrief">
                            <h2>大理</h2>
                            <span>风花雪月&nbsp;&nbsp;苍山&nbsp;&nbsp;洱海&nbsp;&nbsp;双廊&nbsp;&nbsp;大理三塔&nbsp;&nbsp;白族</span>
                            <div className="Dalibrief">
                                <p>
                                    <strong>简介:</strong>
                                    <br />
                                &nbsp;&nbsp; "下关风，上关花，苍山雪，洱海月”是大理著名的“风花雪月”四景：洱海最南端的上关，曾经是一片开阔的草原，鲜花铺地，姹紫嫣红；最北端的下关是苍洱之间主要的风源，现在是大理市中心所在地；位于洱海中部的大理古城，曾是南诏古国的都城，白族文化的发源地；泛舟洱海，你能体验白族水乡人的生活乐趣，这里有浓郁的白族风情，在整个云南之旅中，恐怕再没有其他地方能像大理一样，让你深切感受到如此独特的白族风情。"
                      </p>
                            </div>
                            <span className="Dalishare">
                                Joytrip中旅行贴士和照片等信息都来自于旅行者的真实分享，感谢对本攻略的贡献
                    </span>
                            <div className="DalishowsHead">{this.list()}{this.list()}</div>
                        </div>
                    </div>
                    <div className="Daligetimgsbox">
                        {this.getimgs()}
                    </div>
                    <Comment />
                </div>
                <Pfoot />
            </>
        )
    }
}