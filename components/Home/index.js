import React from 'react'
import {
  Text,
  Box,
  Flex,
  Link,
} from 'rebass'
import styled from 'styled-components'

export const Grey = styled(Flex)`
  border-radius: 4px;
  height: 350px;
  /* #272729 */
  background: #aaa;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 2;
`

export const Black = styled(Flex)`
  background: black;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`

export const LI = styled.li`
  margin-bottom: ${props => props.theme.space[1]}px;
  &:before {
    color: ${props => props.theme.colors.mint};
    content: '➜ ';
  }
`

export const Terminal = styled(Box)`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  overflow: auto;
`

export const Icon = props => (
  <Link color="mint" href={props.href} mr={2} target="_blank">
    <ion-icon name={props.name} />
  </Link>
)

export default () => (
  <Terminal px={4} py={3} fontSize={2} mb={2}>
    <Text mb={3}>
      Hey 👋, I&#39;m a partner at{' '}
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
        let&#39;s grab a coffee
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
