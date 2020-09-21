import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Spin } from 'antd'
import './index.css'
import * as actions from './action'

export class index extends Component {
  constructor(props){
    super(props)
  }

  handleClick = () => {
    this.props.actions.requestLogin('登录名', '密码')
  }

  render() {
    const {login,home} = this.props;
    return (
      <div>
        <Spin spinning={login.isFetching} />
        <div>username:{login.username}</div>
        <div>company:{login.company}</div>
        <div>home text:{login.text}</div>
        <Button onClick={this.handleClick}>登录</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  home: state.home,
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
