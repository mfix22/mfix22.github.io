import React from 'react'
import { Box, Text } from 'rebass'

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
      <Flex justifyContent="center" alignItems="center" width="100%">
        {this.state.loading && (
          <Box>
            <Text textAlign="center" fontWeight="bold">
              {'.'.repeat(count + 1)}
            </Text>
          </Box>
        )}
        <iframe
          style={{ display: this.state.loading ? 'none' : 'block' }}
          {...this.props}
          onLoad={this.onLoad}
        />
      </Flex>
    )
  }
}

export default IFrame
