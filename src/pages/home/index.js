import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'
import './index.css'

export class index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this.handleChange2 = this.handleChange2.bind(this)
  }

  // 这样写不用改this指向
  handleChange = (e) => {
    // 存到redux 可以和其他页面共享，销毁页面不清除，刷新或者关掉页面清除数据
    this.props.actions.changeText(e.target.value)
  }

  // 这样写要在constructor改变this指向
  handleChange2(e) {
    //当前页面数据，不和其他页面共享,销毁页面时清除
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <p>redux text: {this.props.home.text}</p>
          <input value={this.props.home.text} onChange={this.handleChange} />
        </div>
        <div>
          <p>state text: {this.state.text}</p>
          <input value={this.state.text} onChange={this.handleChange2} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

// mapStateToProps, mapDispatchToProps 的数据放在页面props参数里面
export default connect(mapStateToProps, mapDispatchToProps)(index)
