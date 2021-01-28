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
                { id: 1, url: "http://b1-q.mafengwo.net/s14/M00/F6/26/wKgE2lz50E-AA5ubAAHaXRf6NNc38.jpeg?imageView2%2F2%2Fw%2F680%2Fq%2F90" },
                { id: 2, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666270725&di=e65217a869a7bda6a2518ca247325c45&imgtype=0&src=http%3A%2F%2Fpavo.elongstatic.com%2Fi%2FtHotel800_600%2F0000y9R3.jpg" },
                { id: 3, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666321351&di=1c83d4d46a43a9c6bef5bfa6103cce9c&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F665%2F543%2F964%2F217b59ec578440c08febf232ff27cd9b.jpg" },
                { id: 4, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600666385406&di=42cb3d5ad47e70415856fa2b7bde24a7&imgtype=0&src=http%3A%2F%2Fwww.bianzhirensheng.com%2Fupload%2Fblog%2Farticle%2Fc5%2F89%2F10237-0.jpg" },
                {
                    id: 5, url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1408971718,1269395434&fm=26&gp=0.jpg"
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
                <span className="present">北海道</span>
                    </div>
                    <div className="Dalishowinfo">
                        <div className="Dalishowimg">
                            <img src="https://b1-q.mafengwo.net/s8/M00/3F/1E/wKgBpVVZsVmABR34AAvN01DqGL497.jpeg?imageMogr2%2Fthumbnail%2F%21230x325r%2Fgravity%2FCenter%2Fcrop%2F%21230x325%2Fquality%2F90" />
                        </div>
                        <div className="Dalishowbrief">
                            <h2>北海道</h2>
                            <span>薰衣草&nbsp;&nbsp;非诚勿扰&nbsp;&nbsp;富良野&nbsp;&nbsp;美瑛&nbsp;&nbsp;札幌&nbsp;&nbsp;四姐妹居酒屋</span>
                            <div className="Dalibrief">
                                <p>
                                    <strong>简介:</strong>
                                    <br />
                                &nbsp;&nbsp; 无论是北海道成就了《非诚勿扰》、还是《非诚勿扰》成就了北海道，美丽、旷野、自然的北海道本身，就是一个十分理想的适合于演绎抒情浪漫、刻骨铭心爱情的地方，以至于当很多人看完电影走出影院的时候，或多或少想到的竟然都是---真想什么时候去一趟北海道……
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