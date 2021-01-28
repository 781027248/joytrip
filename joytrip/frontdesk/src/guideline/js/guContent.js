import React from 'react';
import '../css/guContent.css';
import axios from 'axios';
import { HeartOutlined } from '@ant-design/icons';
export default class GuContent extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    };
    async addOne(k){
        let url = "http://localhost:9999/guidelineAd"
        let r = await axios.post(url,{
            adds:k
        });
        console.log(r);
       this.getList()
    }
     showstrategys() {
        return this.state.list.map((item) => {
            return (<div key={item.id}>
                <div className="itemsbox">
                    <div className="top">
                        <span className="span1">{item.adds}</span>Joy trip顶<span className="span2" onClick={this.addOne.bind(this,item.id)} ><HeartOutlined /></span>
                    </div>
                    <p>{item.linetitle}</p>
                    <div className="initembox">
                        <img src={item.imageurl} />
                        <div>{item.information}</div>
                    </div>
                </div>
            </div>)
        })
    };
    async getList(){
        let url = "http://localhost:9999/guideline"
        let r = await axios.get(url)
        let list = r.data;
        this.setState({
            list: list
        })
    }
     componentWillMount() {
        this.getList()
    }
    render() {
        return (
            <>
                <div className="contentbox">
                    <h3>推荐攻略</h3>
                    <div>
                        <div>
                            {this.showstrategys()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}