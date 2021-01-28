import React from 'react';
import { Link } from "react-router-dom";
import '../css/guSlider.css'
export default class Slider extends React.Component {
  constructor() {
    super();
  };
  render() {
    return (
      <>
        <div className="sliderbox">
          <div className="slidertitle">旅游攻略导航</div>
          <div className="sidernav">
            <Link to="/ToChengdu"><img src="https://b1-q.mafengwo.net/s9/M00/6F/96/wKgBs1au-wuAcJRRAAli-UGtV0E29.jpeg?imageMogr2%2Fthumbnail%2F%21130x184r%2Fgravity%2FCenter%2Fcrop%2F%21130x184%2Fquality%2F90" /></Link>
            <br />
            <p>更新日期：2020-9-23</p>
          </div>
          <div className="linkbox">
           <p> <span>2</span> 
            <Link to="ToDali">大理</Link></p>
          </div>
          <div className="linkbox">
           <p> <span>3</span> 
            <Link to="ToXian">西安</Link></p>
          </div>
          <div className="linkbox">
           <p> <span>4</span> 
            <Link to="ToChongqin">重庆</Link></p>
          </div>
        </div>
      </>
    )
  }
}