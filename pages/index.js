import React from 'react'
import { Box, Text, Flex, Heading, Link as BaseLink } from 'rebass/styled-components'
import styled, { ThemeProvider } from 'styled-components'
import merge from 'lodash.merge'
import preset from '@rebass/preset'
import NextLink from 'next/link'

import writings from '../components/writings.json'

const theme = merge(preset, {
  colors: {
    mint: '#00f1ff',
  },
  fonts: {
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', '),
  },
})

const Link = styled(BaseLink)`
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
    cursor: pointer;
  }
`

const LI = styled.li`
  margin-bottom: 12px;
  cursor: ${(props) => (props.onClick ? 'pointer' : null)};
  display: flex;
  align-items: center;
  &:before {
    content: '☛ ';
    font-size: ${(props) => props.theme.fontSizes[0]}px;
    margin-right: ${(props) => props.theme.space[2]}px;
  }
`

const Content = styled(Box)`
  display: block;
  font-family: ${(props) => props.theme.fonts.mono};
  overflow: auto;
`

function Home() {
  const [more, setMore] = React.useState(false)

  return (
    <Content px={['24px', '24px', 4]} py={3} fontSize={2} mb={2} maxWidth="680px">
      <Text lineHeight={1.5}>
        Hey there 👋. Currently, I’m a software engineer at{' '}
        <Link color="mint" href="https://stripe.com/">
          Stripe
        </Link>
        , working on the Dashboard, Docs, and Open Source, but you may know me from my work on{' '}
        <Link color="mint" href="https://carbon.now.sh">
          Carbon
        </Link>{' '}
        and{' '}
        <Link color="mint" href="https://reporanger.com">
          Ranger
        </Link>
        .
      </Text>
      <Text mt={5} mb={3} fontSize={3}>
        A few things I’m into
      </Text>
      <ul>
        <LI>
          <Link color="inherit" href="https://goo.gl/maps/VsJW2cLXMcGCWrgs5">
            Drinking coffee with others
          </Link>
        </LI>
        <LI>Climbing, skiing</LI>
        <LI>Music by Dessa, Kendrick Lamar, Jackson Browne, Vince Staples, and The Roots</LI>
        <LI>Sustainable open source</LI>
        {!more ? (
          <LI>
            <Link color="inherit" onClick={() => setMore(true)}>
              More…
            </Link>
          </LI>
        ) : (
          <React.Fragment>
            <LI>
              <Link color="inherit" href="https://fieldnotesbrand.com/">
                Field Notes
              </Link>
            </LI>
            <LI>
              <Link color="inherit" href="http://cheeseboardcollective.coop/">
                Pizza
              </Link>
            </LI>
            <LI>Micro-grants</LI>
            <LI>
              JavaScript &
              <Link ml={2} color="inherit" href="https://www.youtube.com/watch?v=d0xMqeVhlhQ">
                GraphQL
              </Link>
            </LI>
          </React.Fragment>
        )}
      </ul>
      <Text fontSize={0} mt={3}>
        (If you want to chat about any of these things,{' '}
        <Link
          color="mint"
          href="mailto:?subject=Let's%20chat!&body=Hey%20Mike%2C%0D%0AI%20saw%20the%20offer%20to%20chat%20on%20your%20website%2C%20and%20I%20thought%20I'd%20take%20you%20up%20on%20it!"
        >
          hit me up
        </Link>
        )
      </Text>

      <Text mt={5} mb={3} fontSize={3}>
        Projects
      </Text>
      <ul>
        <LI>
          <Link target="_blank" color="inherit" href="https://carbon.now.sh">
            Carbon
          </Link>
        </LI>
        <LI>
          <Link target="_blank" color="inherit" href="https://reporanger.com">
            Ranger
          </Link>
        </LI>
        <LI>
          <Link target="_blank" color="inherit" href="https://dawnlabs.io/alchemy">
            Alchemy
          </Link>
        </LI>
        <LI>
          <Link target="_blank" color="inherit" href="https://transcenduw.com/">
            Transcend
          </Link>
        </LI>
        <LI>
          <Link
            target="_blank"
            color="inherit"
            href="https://patents.google.com/patent/US9321503B2/en"
          >
            Band Wagon
          </Link>
        </LI>
      </ul>

      <Text mt={5} mb={3} fontSize={3}>
        Around the web
      </Text>
      <ul>
        <LI>
          <Link href="https://changelog.com/podcast/410" target="_blank" color="inherit">
            The Changelog – Episode #410
            <br />
            <small>Bringing beauty to the world of code sharing</small>
          </Link>
        </LI>
        <LI>
          <Link
            href="https://www.designsystems.com/white-labeling-putting-the-design-system-in-users-hands/"
            target="_blank"
            color="inherit"
          >
            White-labeling: Putting the design system in users’ hands
            <br />
            Designsystems.com
          </Link>
        </LI>
        {writings.items.map((item) => (
          <LI key={item.guid}>
            <Link href={item.link} target="_blank" color="inherit">
              {item.title}
            </Link>
          </LI>
        ))}
      </ul>

      <Text mt={5} mb={3} fontSize={3}>
        Art
      </Text>
      <ul>
        <LI>
          <NextLink href="/blocks">
            <Link href="/blocks" color="inherit">
              Blocks #1
            </Link>
          </NextLink>
        </LI>
      </ul>
    </Content>
  )
}

function Icon(props) {
  return (
    <Link
      href={props.href}
      color="mint"
      target="_blank"
      mr={1}
      sx={{
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <ion-icon name={props.name} />
    </Link>
  )
}

export default function Index() {
  React.useEffect(() => console.log('✌️'), [])
  return (
    <ThemeProvider theme={theme}>
      <Box as="main" mt={[0, 0, 3]} pl={[0, 0, 5]}>
        <Flex alignItems="center">
          <Box>
            <Heading mt={4} fontSize={[61, 61, 96]} pl={[3, 3, 0]}>
              <BaseLink href="#" color="white" style={{ textDecoration: 'none' }}>
                Mike Fix
              </BaseLink>
            </Heading>
            <Flex flexDirection="column">
              <Home />
            </Flex>
          </Box>
        </Flex>
        <Box
          as="nav"
          sx={{
            position: ['absolute', 'absolute', 'fixed'],
            top: ['3.5rem', '3rem', 3],
            right: 3,
          }}
        >
          <Text fontSize={[3, 3, 4]}>
            <Icon href="https://twitter.com/fixitup2" name="logo-twitter" />
            <Icon href="https://github.com/mfix22" name="logo-github" />
          </Text>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
