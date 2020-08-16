import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import login from './reducer'

export class index extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {login,home} = this.props;
    return (
      <div>
        <div>page:{login.page}</div>
        <div>home text:{home.text}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  home: state.home,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
