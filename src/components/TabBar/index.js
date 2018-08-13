import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less'

export default class TabBar extends Component {
     render () {
        return (
            <div className="foot-nav">
                <NavLink exact to="/home" className="index">
                    <div className="index-bg"></div>
                    <p>首页</p >
                </NavLink>
                <NavLink to="/lesson" className="news-list">
                    <div className="news-list-bg"></div>
                    <p>课程</p >
                </NavLink>
                <NavLink to="/profile" className="mine">
                    <div className="mine-bg"></div>
                    <p>我的</p >
                </NavLink>
            </div>
        )
     }
}