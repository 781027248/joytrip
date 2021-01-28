import React from "react";
import '../css/comment.css';
import "../../../src/index.css";
import axios from 'axios';
import TextArea from "antd/lib/input/TextArea";
export default class Comment extends React.Component {
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
            view: [],
            users: [
                { id: 1, name: "廊坊", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 2, name: "明天的雨", userurl: "https://n1-q.mafengwo.net/s16/M00/4E/CF/CoUBUl8z-baAYw6kAAPxu72axr828.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 3, name: "话语", userurl: "https://b1-q.mafengwo.net/s9/M00/92/00/wKgBs1a6tdOAWgMVAARBYexlsnI65.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 4, name: "power", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 5, name: "晴天", userurl: "https://b1-q.mafengwo.net/s9/M00/92/00/wKgBs1a6tdOAWgMVAARBYexlsnI65.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 6, name: "明天会更好", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 7, name: "化瘀", userurl: "https://b1-q.mafengwo.net/s9/M00/92/00/wKgBs1a6tdOAWgMVAARBYexlsnI65.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 8, name: "Lilith", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 9, name: "糊糊", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" },
                { id: 10, name: "嘻嘻", userurl: "https://p1-q.mafengwo.net/s10/M00/37/FD/wKgBZ1mWU1uAaYb_AAALjpdaNvY82.jpeg?imageMogr2%2Fthumbnail%2F%2116x16r%2Fgravity%2FCenter%2Fcrop%2F%2116x16%2Fquality%2F90" }
            ]
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
    };
    showsphoto() {
        const showsphotos = this.state.users.map((item) => {
            return (
                <div key={item.id}>
                    <img src={item.userurl} />
                    <span>{item.name}</span>
                </div>
            )
        }
        );
        return showsphotos
    };
    //提交评论
    async postviews() {
        let url = "http://localhost:9999/guidelinetocommentpost";
        let getvw = document.getElementsByClassName("vws")[0].value;
        let r = await axios.post(url, {
            view: getvw
        })
        document.getElementsByClassName("vws")[0].value = "";
        console.log(r);
        this.showsviews();
        this.shvw();
    }
    //显示评论
    showsviews() {
        return this.state.view.map((item) => {
            return (<div key={item.id}>
                <div className="showsview">
                    <p>{item.view}</p>
                    <span>{item.times}</span>
                </div>
            </div>)
        })
    };
    async shvw(){
        let url = "http://localhost:9999/guidelinetocomment"
        let r = await axios.get(url)
        let list = r.data;
        let ymd = [];
        let arr = [];
        let l = list.forEach((item) => {
            ymd = item.times.split("T");
            ymd[1] = ymd[1].substr(0,8);
            let t = ymd[0]+ " "+ ymd[1];
            let obj = {
                id: item.id,
                times: t,
                view: item.view
            };
            arr.push(obj);
        });
        this.setState({
            view: arr,
        });
    }
    async componentWillMount() {
      this.shvw();
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="onloadbox">
                        <div className="left">
                            <span>下载joytrip的游客们</span> <br />
                            <div className="imgbox">
                                {this.list()}{this.list()}
                                {this.list()}{this.list()}
                                {this.list()}{this.list()}
                            </div>
                            <div>
                                {this.showsphoto()}
                            </div>
                        </div>
                        <div className="right">
                            <p>欢迎留言</p>
                            <TextArea className="vws" rows="6">
                            </TextArea>
                            <div className="postvw" onClick={this.postviews.bind(this)}>提交</div>
                            <div>
                                {this.showsviews()}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}