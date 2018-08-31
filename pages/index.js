import React from 'react'
import {
  Box,
  Text,
  Flex,
  Heading,
  Link,
  Image,
  Absolute,
  BlockLink
} from 'rebass'
import { Provider } from 'rebass'
import styled from 'styled-components'

import Projects from '../components/Projects'
import Coffee from '../components/Coffee'

const Grey = styled(Flex)`
  border-radius: 4px;
  height: 350px;
  /* #272729 */
  background: #aaa;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 2;
`

const Black = styled(Flex)`
  background: black;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`

const LI = styled.li`
  margin-bottom: ${props => props.theme.space[1]}px;
  &:before {
    color: ${props => props.theme.colors.mint};
    content: '➜ ';
  }
`

const Terminal = styled(Box)`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  overflow: auto;
`

const Icon = props => (
  <Link color="mint" href={props.href} mr={2} target="_blank">
    <ion-icon name={props.name} />
  </Link>
)

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

const DefaultScreen = () => (
  <Terminal px={4} py={3} fontSize={2} mb={2}>
    <Text mb={3}>
      Hey 👋, I'm a partner at{' '}
      <Link color="mint" href="https://dawnlabs.io">
        dawn
      </Link>
      . We are an ambitious studio, dedicated to impactful
      creation.
    </Text>
    <Text fontSize={3} mb={2}>
      Things i like:
    </Text>
    <ul>
      <LI>Drinking coffee with others</LI>
      <LI>Open Source Software</LI>
      <LI>Rock climbing, Skiing</LI>
      <LI>JavaScript + GraphQL</LI>
      <LI>Event Organizing / Programming</LI>
    </ul>
    <Text fontSize={0} mt={3} mb={3}>
      (If you want to chat about any of these things,{' '}
      <Link color="mint" href="mailto:mike@dawnlabs.io">
        let's grab a coffee
      </Link>
      !)
    </Text>
    <Text>
      <Icon
        name="logo-twitter"
        href="https://twitter.com/fixitup2"
      />
      <Icon
        name="logo-github"
        href="https://github.com/mfix22"
      />
      <Icon name="mail" href="mailto:mike@dawnlabs.io" />
    </Text>
  </Terminal>
)

class RenderLast extends React.Component {
  render() {
    console.log(React.Children.toArray(this.props.children));
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
