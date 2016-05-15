import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';
import _ from 'lodash';
import {Router, Route, Link, browserHistory} from 'react-router';
import {Topbar, CollapsibleNav, Nav, NavItem} from 'amazeui-react';

export default React.createClass({
    render: function () {
        return (
            <Topbar brand="Weekly" toggleNavKey="nav">
                <CollapsibleNav eventKey="nav">
                    <Nav topbar>
                        <NavItem active href="http://www.amazeui.org">首页</NavItem>
                        <NavItem href="http://www.amazeui.org">周报</NavItem>
                        <NavItem href="http://www.amazeui.org">成员</NavItem>
                        <NavItem href="http://www.amazeui.org">WakaTime</NavItem>
                    </Nav>
                </CollapsibleNav>
            </Topbar>
        )
    }
});