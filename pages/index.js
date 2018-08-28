import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Drawer,
  Overlay,
  Link,
  Image,
  Absolute,
  BlockLink
} from 'rebass'
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

class Index extends React.Component {
  render() {
    return (
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
                <Black id="portal" />
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
    )
  }
}

export default Index
