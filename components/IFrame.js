import React from 'react'
import { Text, Embed } from 'rebass'

class IFrame extends React.Component {
  state = {
    loading: true,
    count: 0
  }

  onLoad = () => this.setState({ loading: false })

  componentDidMount() {
    const component = this
    this.interval = setInterval(() => {
      component.setState(({ count }) => ({ count: (count + 1) % 3 }))
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { count } = this.state
    return (
      <Embed>
        {this.state.loading && (
          <Text textAlign="center" fontWeight="bold">
            {'.'.repeat(count + 1)}
          </Text>
        )}
        <iframe
          style={{ display: this.state.loading ? 'none' : 'block' }}
          {...this.props}
          onLoad={this.onLoad}
        />
      </Embed>
    )
  }
}

export default IFrame
