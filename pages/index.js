import React from 'react'
import {Box, Flex, Heading, Drawer, Overlay} from 'rebass'
import styled from 'styled-components'

import Projects from '../components/Projects'

const A = styled(Flex)`
  border-radius: 8px;
  width: 500px;
  height: 300px;
  background: #aaa;
  justify-content: center;
  align-items: center;
`

const B = styled(Flex)`
  width: 90%;
  height: 90%;
`

class Index extends React.Component {
  render () {
    return (
      <Box is="main" mt={3} pl={5}>
        <Flex justifyContent="center" alignItems="center">
          <Box width={1/2}>
            <Heading mb={5} fontSize={96}>Hi, i'm Mike</Heading>
              <A>
                <B id="portal" open={true} bg="black" />
              </A>
          </Box>
          <Projects />
        </Flex>
      </Box>
    )
  }
}

export default Index
