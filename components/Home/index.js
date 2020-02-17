import React from 'react'
import { Text, Box, Flex, Link as BaseLink } from 'rebass'
import styled from 'styled-components'

import writings from '../../static/writings.json'

const Link = styled(BaseLink)`
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
`

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
  cursor: ${props => (props.onClick ? 'pointer' : null)};
  &:before {
    content: '☛ ';
  }
`

export const Terminal = styled(Box)`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  overflow: auto;
`

export default function Home() {
  const [more, setMore] = React.useState(false)

  return (
    <Terminal px={4} py={3} fontSize={2} mb={2}>
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
        <LI>Open-source software</LI>
        <LI>
          JavaScript +{' '}
          <Link color="inherit" href="https://www.youtube.com/watch?v=d0xMqeVhlhQ">
            GraphQL
          </Link>
        </LI>
        <LI>Music by Kendrick Lamar, Dessa, & Vince Staples</LI>
        {!more ? (
          <LI onClick={() => setMore(true)}>More…</LI>
        ) : (
          <React.Fragment>
            <LI>
              <Link color="inherit" href="https://fieldnotesbrand.com/">
                Field Notes
              </Link>
            </LI>
            <LI>Financing / Sustaining OSS</LI>
            <LI>Digital / Interactive / Open Art</LI>
            <LI>Micro-grants</LI>
            <LI>
              <Link color="inherit" href="http://cheeseboardcollective.coop/">
                Pizza
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
        {writings.items.map(item => (
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
