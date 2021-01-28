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
export default class ToChongqin extends React.Component {
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
                { id: 1, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620507810&di=9f629590509710a337462d019616f2e0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181002%2F49b111ef684746bbb0e98a214c3738a5.jpeg" },
                { id: 2, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620558873&di=9f8a39d994cc418f0c604dbc9c567817&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1505%2F16%2Fc2%2F6842128_6842128_1431741473639_mthumb.jpg" },
                { id: 3, url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3449886568,3447933733&fm=26&gp=0.jpg" },
                { id: 4, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620598025&di=950029f83306df17540f487eaf37e938&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fgf%2Fb6%2FQJ6366025887.jpg" },
                {
                    id: 5, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620648123&di=1681b39d7290f79990af0038ef903fbe&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100r0r000000gvp9eF2F3_R_1024_10000_Q90.jpg"
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
                <span className="present">重庆</span>
                    </div>
                    <div className="Dalishowinfo">
                        <div className="Dalishowimg">
                            <img src="https://p1-q.mafengwo.net/s8/M00/F6/01/wKgBpVYkZLCARxCoAAn5H1zLWbs35.jpeg?imageMogr2%2Fthumbnail%2F%21230x325r%2Fgravity%2FCenter%2Fcrop%2F%21230x325%2Fquality%2F90" />
                        </div>
                        <div className="Dalishowbrief">
                            <h2>重庆</h2>
                            <span>山城&nbsp;&nbsp;解放碑&nbsp;&nbsp;洪崖洞&nbsp;&nbsp;火锅</span>
                            <div className="Dalibrief">
                                <p>
                                    <strong>简介:</strong>
                                    <br />
                                &nbsp;&nbsp;  重庆四面环山，依山而建，又有长江和嘉陵江在此交汇，别名江城，又称山城——山城夜色是重庆最为著名的一景，站在众多观景台上，两江风光尽收眼底，欣赏号称“价值百万美元的夜色”，别有一番风味；重庆火锅天下闻名，麻辣鲜香，越吃越爽，欲罢不能；重庆更是盛产美女，解放碑据说是打望美女的最好地段——因此，夜景、火锅、美女，是重庆的三大名片。
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