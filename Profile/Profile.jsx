import React from 'react'
import Header from '../../components/Header/Header'

export default class Profile extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  goDetail () {
    this.props.history.push('/detail')
  }
  goFunctionComponents () {
    this.props.history.push('/func')
  }
  render () {
    return (
      <div>
        <Header name="头部"></Header>
        <div onClick={() => {this.goDetail()}}>Detail</div>
        <div name="我是函数式组件" onClick={() => {this.goFunctionComponents()}}>函数式组件</div>
      </div>
    )
  }
}