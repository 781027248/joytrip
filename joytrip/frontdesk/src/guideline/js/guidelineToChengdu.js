import React from "react";
import "../../../src/index.css";
import "../css/guidelineToChengdu.css";
import Comment from "./comment.js"
import Phead from "../../public/Phead.js";
import Pfoot from "../../public/Pfoot.js";
import axios from 'axios';
import { Link } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import Axios from "axios";
export default class guToChengdu extends React.Component {
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
                { id: 1, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600509764300&di=ba170ee846f96a628578fa52bdeaa2f8&imgtype=0&src=http%3A%2F%2Fappcdn.cehuashen.com%2Fhtimage%2F201733%2F74ea8cbc-7415-4edc-ad70-619c29a6fa93.jpg%3FExpires%3D4656386620%26OSSAccessKeyId%3Dr2aV9r83JGUX1u7F%26Signature%3DZ4eDaEP696OkqeVLJkxNDQqtHZI%3D" },
                { id: 2, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600509847621&di=41a08bd26a6fff648ad48b8c29f8d9cd&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180103%2F39f100f0c14c4f5ab9c52a798e512ab0.jpg" },
                { id: 3, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600509922099&di=96890e1b5e0e0ade89fe201f618e5893&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10117%2F200%2Fw1080h720%2F20181215%2F703d-hqhqcir3880412.jpg" },
                { id: 4, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600509984049&di=97a3663a47b66888ca492cb1fe4a4b6b&imgtype=0&src=http%3A%2F%2Ffile110.mafengwo.net%2Fs8%2FM00%2FA5%2F44%2FwKgBpVYfRkqAIeUVAAIhvcm_97Y75.jpeg" },
                {
                    id: 5, url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600511054501&di=f5ed62c1625105453bc7995ed873215e&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg5%2FM05%2FC3%2F32%2FCggYsFcXRBGARfCBAACLWh0k7po492.jpg"
                }
            ],
            // view: []
        }
    };
    list() {
        const listItems = this.state.shows.map((item) => {
            return (
                <img key={item.id} src={item.src} />
            )
        }
        );
        return listItems
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
    //提交评论
    // async postviews() {
    //     let url = "http://localhost:9999/guidelinetochengdu";
    //     let getvw = document.getElementsByClassName("vws")[0].value;
    //     let r = await Axios.post(url, {
    //         view: getvw
    //     })
    //     document.getElementsByClassName("vws")[0].value = "";
    //     console.log(r);
    // }
    //显示评论
    // showsviews() {
    //     return this.state.view.map((item) => {
    //         return (<div key={item.id}>
    //             <div>
    //                 <p>{item.view}</p>
    //                 <span>{item.times}</span>
    //             </div>
    //         </div>)
    //     })
    // };
    //    async componentWillMount() {
    //         let url = "http://localhost:9999/guidelinetochengduview"
    //         let r = await axios.get(url)
    //         let list = r.data;
    //         console.log(r.data)
    //         this.setState({
    //             view: list
    //         })
    //     }
    render() {
        return (
            <>
                <Phead history={this.props.history} />
                <div className="container">
                    <div className="tochengduTop">
                        <Link to="/Guideline">旅游攻略</Link>&gt;
                <span className="present">成都</span>
                    </div>
                    <div className="showinfo">
                        <div className="showimg">
                            <img src="https://b1-q.mafengwo.net/s9/M00/6F/96/wKgBs1au-wuAcJRRAAli-UGtV0E29.jpeg?imageMogr2%2Fthumbnail%2F%21230x325r%2Fgravity%2FCenter%2Fcrop%2F%21230x325%2Fquality%2F90" />
                        </div>
                        <div className="showbrief">
                            <h2>成都</h2>
                            <span>宽窄巷子&nbsp;&nbsp;川妹子&nbsp;&nbsp;火锅&nbsp;&nbsp;串串&nbsp;&nbsp;麻辣&nbsp;&nbsp;杜甫草堂&nbsp;&nbsp;大熊猫</span>
                            <div className="brief">
                                <p>
                                    <strong>简介:</strong>
                                    <br />
                                &nbsp;&nbsp;成都，一座来了就不想走的城市，地处全川中心，成都平原沃野千里，依仗都江堰的水利工程，自古以来富足丰饶，拥“天府之国”之美誉；成都有三美：美食、美女、美景，这其中最具有代表性的当然是成都美食，成都美食历史悠久、品种繁多，川菜作为中国八大菜系之一，在烹饪史上占有重要地位，它菜式多样、调味多变、麻辣鲜香、应有尽有。
                      </p>
                            </div>
                            <span className="share">
                                Joytrip中旅行贴士和照片等信息都来自于旅行者的真实分享，感谢对本攻略的贡献
                    </span>
                            <div className="showsHead">{this.list()}{this.list()}</div>
                        </div>
                    </div>
                    <div className="getimgsbox">
                        {this.getimgs()}
                    </div>
                    <Comment />
                </div>
                <Pfoot />
            </>
        )
    }
}