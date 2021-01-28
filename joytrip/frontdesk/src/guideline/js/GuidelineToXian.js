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
                { id: 1, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600619895461&di=37b4b1ded0e469fcfbeb1bced0a3560b&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F18%2F84%2F31300543422791148945848669862.jpg" },
                { id: 2, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600619955578&di=4609edb5049ed198c862004ac2987743&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180630%2Ff2c970a8c69f45b59c778a99809dc431.jpeg" },
                { id: 3, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600619999141&di=e7f2c6d3ef4b18951555838b38be0e2c&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170310%2F8028f84b60644439ad0b830e174c6b33_th.jpeg" },
                { id: 4, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620032921&di=ba74fb0cd69bb73e5872df2557629f47&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1024h683%2F20180206%2F2f91-fyrhcqy9623804.jpg" },
                {
                    id: 5, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600620078040&di=771a401a26e929a5b507c8aa5926a8ce&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd1%2F1805%2Ffe%2Feaec979d1aa992b5.jpg_r_720x480x95_3b4eaf28.jpg"
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
                <span className="present">西安</span>
                    </div>
                    <div className="Dalishowinfo">
                        <div className="Dalishowimg">
                            <img src="https://n1-q.mafengwo.net/s9/M00/F2/3E/wKgBs1awe3SAO6YvAAhkrsH0YNo64.jpeg?imageMogr2%2Fthumbnail%2F%21230x325r%2Fgravity%2FCenter%2Fcrop%2F%21230x325%2Fquality%2F90" />
                        </div>
                        <div className="Dalishowbrief">
                            <h2>西安</h2>
                            <span>古都&nbsp;&nbsp;长安&nbsp;&nbsp;羊肉泡馍&nbsp;&nbsp;回民街&nbsp;&nbsp;兵马俑&nbsp;&nbsp;秦始皇陵&nbsp;&nbsp;华山</span>
                            <div className="Dalibrief">
                                <p>
                                    <strong>简介:</strong>
                                    <br />
                                &nbsp;&nbsp;  如果中国是一棵参天大树，北京会是树冠，而西安则是这棵树深扎地下的根系。西安，古称长安，自古帝王都，中华民族几千年的沉淀与底蕴仍然在这里静静地延续，有人说在西安，随便一块地方，挖下去可能就会现出一堆秦砖汉瓦，虽然有些夸张，但是作为古都，西安的历史遗迹、文物珍藏的确很丰富；今天，古建筑和墓冢已经不能完全代表西安，城垣依旧，雁塔高耸，食肆遍布，书院门里古色古香的书卷气与德福巷遍街的酒吧咖啡厅碰撞出西安新模样。
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