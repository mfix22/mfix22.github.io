import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Embed } from 'rebass'

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
    const { count, loading } = this.state
    return (
      <React.Fragment>
        {loading && (
          <Flex width="100%" justifyContent="center" alignItems="center">
            <Text textAlign="center" fontWeight="bold">
              {'.'.repeat(count + 1)}
            </Text>
          </Flex>
        )}
        <Embed
          css={{
            width: '100%',
            height: '100%',
            display: loading ? 'none' : 'block'
          }}
        >
          <iframe {...this.props} onLoad={this.onLoad} />
        </Embed>
      </React.Fragment>
    )
  }
}

export default IFrame
