import React from 'react';
import { Link } from "react-router-dom";
import "../css/guHead.css";
import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#ccc',
};
const { SubMenu } = Menu;
export default class Head extends React.Component {
    constructor() {
        super();
        this.state = {
            imgs: [
                {
                    id: 1,
                    src: "https://p1-q.mafengwo.net/s11/M00/4A/E0/wKgBEFrQBqeAYyjMAAURcw8MxG470.jpeg"
                },
                {
                    id: 2,
                    src: "https://n1-q.mafengwo.net/s13/M00/03/30/wKgEaVyu94SAIqDcAAheevdYPB4887.png"
                },
                {
                    id: 3,
                    src: "https://p1-q.mafengwo.net/s11/M00/AB/01/wKgBEFrrsvOACErGAAGJ4YrPQUs78.jpeg"
                },
                {
                    id: 4,
                    src: "https://b1-q.mafengwo.net/s12/M00/D4/09/wKgED1vpIAiAI6D9AAZ72-z4yZw188.png"
                },
                {
                    id: 5,
                    src: "https://n1-q.mafengwo.net/s10/M00/6F/B3/wKgBZ1h4nkiAURQzAAHf0nrnc6I29.jpeg"
                }

            ]
        }
    }
    list() {
        const listItems = this.state.imgs.map((item) => {
            return <div key={item.id}>
                <h3 style={contentStyle}>
                    <img src={item.src} />
                </h3>
            </div>
        }
        );
        return listItems
    }
    showdestination() {
        document.getElementsByClassName("destination")[0].style.display = "block";
    }
    nonedestination() {
        document.getElementsByClassName("destination")[0].style.display = "none";
    }
    render() {
        return (
            <>
                <div className="wrap">
                    <div className="leftbox">
                        <Menu style={{ width: 256 }} mode="vertical">
                            <SubMenu key="sub1" title="海外冬季目的地精选">
                                <Menu.ItemGroup>

                                    <Menu.Item key="1">
                                        <Link to="/ToHokkaido"> 1 北海道 在皑皑白雪中泡温泉 </Link>
                                    </Menu.Item>

                                    <Menu.Item key="2">
                                        2 冰岛 亲近极北之地的莫测极光
                                        </Menu.Item>
                                    <Menu.Item key="3">
                                        3 澳大利亚 在南半球过个暖洋洋的圣诞
                                </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" title="国内冬季目的地推荐">
                                <Menu.Item key="5">1 漠河 至寒圣地的极光约会</Menu.Item>
                                <Menu.Item key="6">2 黄山 银装素裹秒杀菲林季</Menu.Item>
                                <Menu.Item key="7">3 海螺沟 冰川温泉的童话世界</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title="奔向海岛">
                                <Menu.Item key="9">1 象岛 腻了普吉，来象岛玩个深度 </Menu.Item>
                                <Menu.Item key="10">2 巴厘岛 巴厘岛免签啦</Menu.Item>
                                <Menu.Item key="11">3 毛里求斯 印度洋上的海上明珠</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title="主题推荐">
                                <Menu.Item key="9">三亚潜水</Menu.Item>
                                <Menu.Item key="10">珠穆朗玛峰登山</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <div className="desbox" onMouseOver={this.showdestination.bind(this)} onMouseOut={this.nonedestination.bind(this)}>
                            <input type="text" placeholder="请从以下城市中选择" className="searchbox" />
                            <div className="destination">
                                <Link to="/ToChengdu">成都</Link>
                                <Link to="ToDali">大理</Link>
                                <Link to="ToXian">西安</Link>
                                <Link to="ToChongqin">重庆</Link>
                                <Link to="ToHokkaido">北海道</Link>
                            </div>
                        </div>

                    </div>
                    <div className="rightbox">
                        {/* ant-carousel */}
                        <Carousel autoplay className="">
                            {this.list()}
                        </Carousel>
                    </div>

                </div>
            </>
        )
    }
}