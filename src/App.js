import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout } from 'antd';
import Menu from './menu'
import Home from './pages/home'
import './app.css';

const { Header, Content, Footer, Sider } = Layout;

const routes = [
    { path: '/', component: Home }
];

// 自动生成路由
const contexts = require.context('./pages', true, /index\.js$/)
contexts.keys().map(contextKey => {
    const [key] = contextKey.match(/(?<=\/).+(?=\/index\.js$)/) || []
    if (key) routes.push({ path: `/${key}`, component: contexts(contextKey).default })
})

export default class app extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu />
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}><h1>header</h1></Header>
                        <Content style={{ margin: '0 16px' }}>
                            {
                                routes.map((page, index) => page.component ? <Route key={index} exact path={page.path} component={page.component} /> : "222")
                            }
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>footer xxxx版权</Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}