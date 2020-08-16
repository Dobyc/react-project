import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import { Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

class menu extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={this.props.location.pathname} mode="inline">
                <Menu.Item key="/home" icon={<PieChartOutlined />}>
                    <Link to='/home'>Home</Link>
                </Menu.Item>
                <Menu.Item key="/login" icon={<DesktopOutlined />}>
                    <Link to='/login'>login</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(menu)