import React from 'react'
import {
  Box,
  Text,
  Flex,
  Heading,
  Link,
  Image,
  Absolute,
  BlockLink,
  Provider
} from 'rebass'
import styled from 'styled-components'

import Projects from '../components/Projects'
import Coffee from '../components/Coffee'
import DefaultScreen, { Grey, Black, Terminal } from '../components/Home'

const theme = {
  colors: {
    mint: '#00ffa7'
  },
  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', ')
  }
}

class RenderLast extends React.Component {
  render() {
    return React.Children.toArray(this.props.children).slice(-1)
  }
}

class Index extends React.Component {
  render() {
    return (
      <Provider theme={theme}>
        <Box is="main" mt={3} pl={5}>
          <Flex justifyContent="center" alignItems="center">
            <Box width={1 / 2}>
              <Heading mb={4} fontSize={96}>
                <Link href={null} color="white" textDecoration="none">
                  Hi, i'm Mike
                </Link>
              </Heading>
              <Flex flexDirection="column" css={{ position: 'relative' }}>
                <Grey>
                  <Black id="portal">
                    <DefaultScreen />
                  </Black>
                </Grey>
                <Absolute
                  left="50%"
                  top="100%"
                  mt="-5px"
                  css={{ transform: 'translateX(-50%)' }}
                >
                  <Image
                    width={215}
                    src="/static/img/computer.png"
                    alt="Computer Stand"
                  />
                </Absolute>
                <Absolute bottom="-100px" left="100px" zIndex="3">
                  <BlockLink
                    href="https://www.buymeacoffee.com/fix"
                    target="_blank"
                  >
                    <Coffee width={110} />
                  </BlockLink>
                </Absolute>
              </Flex>
            </Box>
            <Projects />
          </Flex>
        </Box>
      </Provider>
    )
  }
}

export default Index
