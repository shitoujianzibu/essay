import React from 'react'
import './Detail.scss'

export default class Detail extends React.Component {
  constructor () {
    super()
    this.state = {
      activeIndex: 35,
      imageNum: 229
    }
  }
  createSection () {
    let temps = []
    for (let i = 35; i < this.state.imageNum; i++) {
      temps.push(
        <div className={`${this.state.activeIndex === i ? 'active': ''} image_wrapper`} key={i}>
          <img src={`images/ia_${this.computedImageName(i)}.jpg`} alt=""/>
        </div>)
    }
    return temps
  }
  computedImageName (i) {
    return 200000000 + i
  }
  componentDidMount () {
    window.onmousewheel = (e) => {
      console.log(e);
      if (e.deltaY > 0) {
        const temp = this.state.activeIndex + 1
        if (temp >= 229) return
        this.setState({
          activeIndex: temp
        })
      } else if (e.deltaY < 0) {
        const temp = this.state.activeIndex - 1
        if (temp <= 34) return
        this.setState({
          activeIndex: temp
        })
      }
      
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.activeIndex}</h1>
        <section>
          {this.createSection()}
        </section>
      </div>
    )
  }
}