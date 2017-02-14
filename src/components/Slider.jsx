import React from 'react'
import MaterialSlider from 'material-ui/Slider'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0.5
    }
    this.handleChange = this.handleChange.bind(this)
    this.onChange = props.onChange
  }

  handleChange (event, value) {
    this.setState({
      value
    })
    this.onChange(value)
  }

  render () {
    return (
      <div style={{ margin: '32px 48px' }}>
        <div style={{ margin: '0px 48px -8px', height: 1 }}>
          <span className='scale__text'>art</span>
          <span className='scale__text'>engineering</span>
        </div>
        <MaterialSlider
          disableFocusRipple
          style={{ margin: '0 48px 0px' }}
          sliderStyle={{ marginBottom: '0px' }}
          step={0.1}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

module.exports = Slider
