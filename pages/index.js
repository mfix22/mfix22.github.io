import React from 'react'
import { Box, Text, Flex, Heading, Link as BaseLink, Provider } from 'rebass'
import styled from 'styled-components'

import writings from '../components/writings.json'

const theme = {
  colors: {
    mint: '#00f1ff',
  },
  fonts: {
    sans: '"Josefin Sans", "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
    mono: ['Consolas', 'Menlo', 'Courier', 'monospace'].join(', '),
  },
}

const Link = styled(BaseLink)`
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

const LI = styled.li`
  margin-bottom: ${(props) => props.theme.space[2]}px;
  cursor: ${(props) => (props.onClick ? 'pointer' : null)};
  display: flex;
  align-items: center;
  &:before {
    content: '☛ ';
    font-size: ${(props) => props.theme.fontSizes[0]}px;
    margin-right: ${(props) => props.theme.space[2]}px;
  }
`

const Terminal = styled(Box)`
  display: block;
  font-family: ${(props) => props.theme.fonts.mono};
  overflow: auto;
`

function Home() {
  const [more, setMore] = React.useState(false)

  return (
    <Terminal px={['24px', '24px', 4]} py={3} fontSize={2} mb={2}>
      <Text mb={4} lineHeight={1.5}>
        Hey 👋. I'm currently working as a software engineer at{' '}
        <Link color="mint" href="https://stripe.com/">
          Stripe
        </Link>
        , but
        <br /> you may know me from my work on{' '}
        <Link color="mint" href="https://carbon.now.sh">
          Carbon
        </Link>{' '}
        and{' '}
        <Link color="mint" href="https://reporanger.com">
          Ranger
        </Link>
        .
        <br />
        Here are a few things I'm into:
      </Text>
      <ul>
        <LI>
          <Link color="inherit" href="https://goo.gl/maps/VsJW2cLXMcGCWrgs5">
            Drinking coffee with others
          </Link>
        </LI>
        <LI>Skiing, rock climbing</LI>
        <LI>Financing, maintaining, sustaining open-source software</LI>
        <LI>Music by Kendrick Lamar, Dessa, Jackson Browne, Vince Staples & The Roots</LI>
        <LI>When the beat drops in the middle of a rap verse</LI>
        {!more ? (
          <LI onClick={() => setMore(true)}>More…</LI>
        ) : (
          <React.Fragment>
            <LI>
              <Link color="inherit" href="https://fieldnotesbrand.com/">
                Field Notes
              </Link>
            </LI>
            <LI>Digital, interactive, open art</LI>
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
      <Text fontSize={0} mt={3} mb={3}>
        (If you want to chat about any of these things,{' '}
        <Link
          color="mint"
          href="mailto:mrfix84@gmail.com?subject=Let's%20grab%20coffee!&body=Hey%20Mike%2C%0AI%20saw%20the%20offer%20to%20grab%20coffee%20on%20your%20website%2C%20and%20I%20thought%20I'd%20take%20you%20up%20on%20it!"
        >
          let&#39;s grab a coffee
        </Link>
        !)
      </Text>

      <Text mt={5} mb={2} fontSize={3}>
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
            href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503"
          >
            Band Wagon
          </Link>
        </LI>
      </ul>

      <Text mt={5} mb={2} fontSize={3}>
        Articles
      </Text>
      <ul>
        {writings.items.map((item) => (
          <LI key={item.guid}>
            <Link href={item.link} target="_blank" color="inherit">
              {item.title}
            </Link>
          </LI>
        ))}
      </ul>
    </Terminal>
  )
}

function Icon(props) {
  return (
    <BaseLink color="mint" href={props.href} mr={2} target="_blank">
      <ion-icon name={props.name} />
    </BaseLink>
  )
}

function Index() {
  return (
    <Provider theme={theme}>
      <Box is="main" mt={[0, 0, 3]} pl={[0, 0, 5]}>
        <Flex alignItems="center">
          <Box>
            <Heading mt={4} mb={3} fontSize={[61, 61, 96]} pl={[3, 3, 0]}>
              <Flex alignItems="center" justifyContent="space-between">
                <BaseLink href="#" color="white" style={{ textDecoration: 'none' }}>
                  Mike Fix
                </BaseLink>
                <Text fontSize={[3, 3, 4]} mr={3}>
                  <Icon name="logo-twitter" href="https://twitter.com/fixitup2" />
                  <Icon name="logo-github" href="https://github.com/mfix22" />
                </Text>
              </Flex>
            </Heading>
            <Flex flexDirection="column">
              <Home />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Provider>
  )
}

export default Index
