import React from 'react'
import { Box, Text, Flex, Heading, Link, Provider } from 'rebass'

import DefaultScreen from '../components/Home'

const theme = {
  colors: {
    mint: '#00ffa7'
  },
  fonts: {
    sans: '"Josefin Sans", "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', ')
  }
}

const relative = { position: 'relative' }

function Icon(props) {
  return (
    <Link color="mint" href={props.href} mr={2} target="_blank">
      <ion-icon name={props.name} />
    </Link>
  )
}

function Index() {
  return (
    <Provider theme={theme}>
      <Box is="main" mt={3} pl={5}>
        <Flex alignItems="center">
          <Box>
            <Heading mt={4} mb={3} fontSize={96}>
              <Flex alignItems="center" justifyContent="space-between">
                <Link href="#" color="white" style={{ textDecoration: 'none' }}>
                  Mike Fix
                </Link>
                <Text fontSize={4} mr={3}>
                  <Icon name="logo-twitter" href="https://twitter.com/fixitup2" />
                  <Icon name="logo-github" href="https://github.com/mfix22" />
                </Text>
              </Flex>
            </Heading>
            <Flex flexDirection="column" css={relative}>
              <DefaultScreen />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Provider>
  )
}

export default Index
