import React from "react";
import axios from "axios";
import "../css/orderTicket.css";
import { Cascader } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
// import { Radio } from 'antd';
import { DatePicker, Space } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
// import { Table } from 'antd';
import { Pagination } from 'antd';
import wxApp from "../img/wxapp.jpeg";


const options1 = [
    {
        value: '单程',
        label: '单程'
    },
    {
        value: '往返',
        label: '往返'
    }
];
const options2 = [
    {
        value: '00:00-09:59',
        label: '00:00-09:59'
    },
    {
        value: '10:00-13:59',
        label: '10:00-13:59'
    },
    {
        value: '14:00-18:59',
        label: '14:00-18:59'
    },
    {
        value: '14:00-18:59',
        label: '14:00-18:59'
    },
    {
        value: '19:00-23:59',
        label: '19:00-23:59'
    },
];
const options3 = [
    {
        value:'0-300',
        label:'0-300'
    },
    {
        value:'301-500',
        label:'301-500'
    },
    {
        value:'501-800',
        label:'501-800'
    },
    {
        value:'801-1000',
        label:'801-1000'
    },
    {
        value:'1001-2000',
        label:'1001-2000'
    },
];


export default class OrderTicket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '单程',
            data:[],
            page: 1,
            total:8,
            depature:sessionStorage.getItem('cur'),
            destination:sessionStorage.getItem('destination'),
			ticket_id: "",
			tktacount: 1
        };
        // this.getDataBySome(this.state.page);
    }
    componentDidMount(){
        this.getDataBySome(this.state.page);
        // this.setState({
        //     depature:this.props.location.query.cur,
        //     destination:this.props.location.query.destination
        // })
        
    }

    onChangeCascader(value) {}
    onChangeStime(value){}
    onChangeEtime(value){}
    onChangeStartTime = (date, dateString) => {}
	onChangeEndTime = (date, dateString) => {}
	//聚焦
	startCityFocus(){
		let startCityf = document.getElementsByClassName('orderticket-select-city1')[0];
        startCityf.style.display = 'block';
        document.getElementById('orderticket-start-city').value = '';
	}
	endCityFocus(){
		let endCityf = document.getElementsByClassName('orderticket-select-city2')[0];
        endCityf.style.display = 'block';
        document.getElementById('orderticket-end-city').value = '';
	}
	//失去焦点
	startCityBlur(){
		let startCityb = document.getElementsByClassName('orderticket-select-city1')[0];
		startCityb.style.display = 'none';
	}
	endCityBlur(){
		let endCityb = document.getElementsByClassName('orderticket-select-city2')[0];
		endCityb.style.display = 'none';
    }
    onPageChange = page => {
        this.setState({
            page: page
        });
        this.getDataBySome(page);
    }
    getDepature(e){
		let arr = ['上海','北京','成都','广州','重庆','西安','昆明','杭州','深圳','三亚','厦门','南京'];
		if(arr.indexOf(e.target.innerHTML) !== -1 && document.getElementById('orderticket-end-city').value !== e.target.innerHTML){
            document.getElementById('orderticket-start-city').value = e.target.innerHTML;
            this.setState({
                depature:e.target.innerHTML
            })
		}
    }
    getDestination(e){
		let arr = ['上海','北京','成都','广州','重庆','西安','昆明','杭州','深圳','三亚','厦门','南京'];
		if(arr.indexOf(e.target.innerHTML) !== -1 && document.getElementById('orderticket-start-city').value !== e.target.innerHTML){
            document.getElementById('orderticket-end-city').value = e.target.innerHTML;
            this.setState({
                destination:e.target.innerHTML
            })
		}
	}
    changeAddress(){
        let depature = document.getElementById('orderticket-start-city').value;
        let destination = document.getElementById('orderticket-end-city').value;
        document.getElementById('orderticket-start-city').value = destination;
        document.getElementById('orderticket-end-city').value = depature;
        this.setState({
            depature:destination,
            destination:depature
        })
    }
    async getDataBySome(page){
        let depature = document.getElementById('orderticket-start-city').value;
        let destination = document.getElementById('orderticket-end-city').value;
        let cur = this.state.depature;
        let nex = this.state.destination;
        let res = await axios.get('http://localhost:9999/getDataBySome',{
            params:{
                depature:(depature == 'undefined')?cur:depature,
                destination:(destination == 'undefined')?nex:destination,
                page:page
            }
        });
        this.setState({
            data:res.data.data,
            total:res.data.len
        })
    }
    search(){
        if(document.getElementById('orderticket-start-city').value !== '' && document.getElementById('orderticket-end-city').value !== ''){
            this.getDataBySome(this.state.page);
        }else {
            alert('请填写要搜索的地址信息');
        }
    }
    backToTicket(){
        this.props.history.push('/Ticket');
    }
	
	bookticket(id) {
		let user_id = sessionStorage.getItem("id");
		if (user_id === null) {
			this.props.history.push("/Login");
		} else {
			let mod = document.getElementById("ordertkt-mod");
			mod.style.display = "block";
		}
		this.setState({
			ticket_id: id
		});
	}
	
	tktcancel() {
		let mod = document.getElementById("ordertkt-mod");
		mod.style.display = "none";
	}
	changeacount(e) {
		this.setState({
			tktacount: e.target.value
		});
	}
	tktconfirm() {
		let carry = document.getElementsByName("child");
		let child = 0;
		if (carry[0].checked === true) {
			child = carry[0].value;
		} else {
			child = carry[1].value;
		}
		let round = 0;
		let rtntkt = document.getElementsByName("round");
		if (rtntkt[0].checked === true) {
			round = rtntkt[0].value;
		} else {
			round = rtntkt[1].value;
		}
		let id = this.state.ticket_id;
		let user_id = sessionStorage.getItem("id");
		axios.post("http://localhost:9999/bookticket", {
			id,
			user_id,
			round,
			child,
			acount: this.state.tktacount
		}).then((res) => {
			alert(res.data.msg);
			if (res.data.status === 1) {
				this.tktcancel();
			}
		}).catch((err) => {
			console.log("ajax请求失败");
			console.log(err);
		})
		
	}
	mf() {}
    render() {
        // console.log(this.props.location.query.cur,this.props.location.query.destination);
        return (
			<>
			<div id="ordertkt-mod">
				<div className="ordertkt-tktbox">
			        <h3 style={{color:'#ff9d00'}}>请填写信息</h3>
					<div id="acount">
			            购票数量:
			            <input onChange={this.changeacount.bind(this)} type="text" value={this.state.tktacount}/> 
			        </div>
					<div id="childrens">
			            <label htmlFor="carry">携带儿童<input type="radio" name="child" id="carry" value="0" /></label>
			            
			            <label htmlFor="nocarry">不携带儿童<input defaultChecked="checked" type="radio" name="child" id="nocarry" value="1" /></label>
			            
			        </div>
					<div id="onereturn">
			            <label htmlFor="return-ticket">往返票<input type="radio" name="round" id="return-ticket" value="0" /></label>
			            
			            <label htmlFor="oneway-ticket">单程票<input defaultChecked="checked" type="radio" name="round" id="oneway-ticket" value="1" /></label>
			            
			        </div>
					<div id="ordertkt-tktbox-btn">
			            <button onClick={this.tktcancel.bind(this)}>取消</button>
			            <button onClick={this.tktconfirm.bind(this)}>确认</button>
			        </div>
				</div>
			</div>
            <div className="ot-box">
                <div className="ot-box-searchbox">
                    <div>
                        <div>
                            <Cascader options={options1} onChange={this.onChangeCascader} placeholder="出行类型" className="ot-box-searchbox-type" />
                        </div>
                        <div className="orderticket-start-citybox"  onFocus={this.startCityFocus} onBlur={this.startCityBlur}>
                            {/* <label for="ticket-start-city" className="ticket-label">出发城市</label> */}
                            <input id="orderticket-start-city" defaultValue={this.state.depature}/>
                            <div className="orderticket-select-city1">
                                <ul onMouseOver={this.getDepature.bind(this)}>
                                    <li>上海</li>
                                    <li>北京</li>
                                    <li>成都</li>
                                    <li>广州</li>
                                    <li>重庆</li>
                                    <li>西安</li>
                                    <li>昆明</li>
                                    <li>杭州</li>
                                    <li>深圳</li>
                                    <li>三亚</li>
                                    <li>厦门</li>
                                    <li>南京</li>
                                </ul>
                            </div>
                        </div>
                        <div className="orderticket-change-address" onClick={this.changeAddress.bind(this)}>换</div>
                        <div className="orderticket-end-citybox"  onFocus={this.endCityFocus} onBlur={this.endCityBlur}>
                            {/* <label for="ticket-end-city" className="ticket-label">到达城市</label> */}
                            <input id="orderticket-end-city" defaultValue={this.state.destination}/>
                            <div className="orderticket-select-city2">
                                <ul onMouseOver={this.getDestination.bind(this)}>
                                    <li>上海</li>
                                    <li>北京</li>
                                    <li>成都</li>
                                    <li>广州</li>
                                    <li>重庆</li>
                                    <li>西安</li>
                                    <li>昆明</li>
                                    <li>杭州</li>
                                    <li>深圳</li>
                                    <li>三亚</li>
                                    <li>厦门</li>
                                    <li>南京</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            {/* <label for="ticket-start-time" className="ticket-label">开始时间</label> */}
                            <Space direction="vertical">
                                <DatePicker onChange={this.onChangeStartTime} id="orderticket-start-time" locale={locale} />
                            </Space>
                        </div>
                        <div>
                            {/* <label for="ticket-end-time" className="ticket-label">结束时间</label> */}
                            <Space direction="vertical">
                                <DatePicker onChange={this.onChangeEndTime} id="orderticket-end-time" locale={locale} />
                            </Space>
                        </div>
                        <div className="orderticket-box-search">
                            <Button type="primary" icon={<SearchOutlined />} className="orderticket-box-search-button" onClick={this.search.bind(this)}>搜索</Button>
                        </div>
                    </div>
                </div>
                <div className="ot-box-infobox">
                    <div className="ot-box-infobox-left">
                        <div className="ot-box-infobox-left-top">您的位置：<span onClick={this.backToTicket.bind(this)}>机票火车票</span> > <span>订机票</span></div>
                        <div className="ot-box-infobox-left-index">
                            筛选：
                            <div className="ot-box-infobox-left-cas">
                                <Cascader options={options2} onChange={this.onChangeStime} placeholder="出发时间" className="ot-box-infobox-left-starttime" />
                                <Cascader options={options2} onChange={this.onChangeEtime} placeholder="到达时间" className="ot-box-infobox-left-endtime" />
                                <Cascader options={options3} onChange={this.onChangeEtime} placeholder="价格区间" className="ot-box-infobox-left-oprice" />
                            </div>
                        </div>
                        <div className="ot-box-infobox-left-tablebox">
                            {/* <Table columns={columns} dataSource={data} onChange={this.onTableChange} /> */}
                            <table>
                                <thead className="ot-box-infobox-left-thd">
                                    <tr>
                                        <th>出发机场</th>
                                        <th>起飞时间</th>
                                        <th>到达时间</th>
                                        <th>价格</th>
                                        <th>订票</th>
                                    </tr>
                                </thead>
                            </table>
                            <table>
                                <tbody className="ot-box-infobox-left-tby">
                                    {this.state.data.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.air_name}</td>
                                                <td>{item.ddata}</td>
                                                <td>{item.adate}</td>
                                                <td>￥{item.price}</td>
                                                <td>
                                                    <Button onClick={this.bookticket.bind(this,item.id)} type="primary" danger>订票</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="ot-box-infobox-left-page">
                                <Pagination current={this.state.cur} onChange={this.onPageChange} total={this.state.total} pageSize={8}  showTotal={(e)=>{return "共 "+e+" 条"}} />
                            </div>
                        </div>
                    </div>
                    <div className="ot-box-infobox-right">
                        <div  className="ot-box-infobox-right-top">
                            <div>
                                <ul>
                                    <li>
                                        <i className="ot-box-infobox-right-icon1"></i>
                                        <span>航协认证</span>
                                    </li>
                                    <li>
                                        <i className="ot-box-infobox-right-icon2"></i>
                                        <span>出行保证</span>
                                    </li>
                                    <li>
                                        <i className="ot-box-infobox-right-icon3"></i>
                                        <span>7X24</span>
                                    </li>
                                </ul>
                            </div>
                            <div>免费客服电话：4006345678</div>
                        </div>
                        {/* <div></div> */}
                        <div>
                            <img src={wxApp} width="300" height="135"/>
                        </div>
                    </div>
                </div>
            </div>
			</>
        )
    }
}