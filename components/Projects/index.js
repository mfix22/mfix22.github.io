import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Text,
  BlockLink,
  Link,
  Relative,
  Absolute
} from 'rebass'

import {
  VHS,
  Image,
  Frame,
  Triangle,
  Circle
} from './styled'

import Books from '../Books'
import IFrame from '../IFrame'

const sections = [
  {
    id: 'tools',
    examples: [
      {
        Component: () => (
          <Image
            src="https://carbon.now.sh/static/brand/icon.png"
            width={64}
            alt="Carbon - the easiest way to create and share beautiful images of your source code"
            css={{borderRadius: '6px'}}
          />
        ),
        portal: () => (
          <IFrame
            src="https://carbon.now.sh/embed?bg=rgba(80%2C227%2C194%2C1)&readonly=false&t=panda-syntax&wt=bw&l=javascript&pv=50px&ph=32px&code=%257B%250A%2520%2520title%253A%2520%27Carbon%27%252C%250A%2520%2520description%253A%2520%27Create%2520and%2520share%2520beautiful%2520images%2520of%2520your%2520code%27%252C%250A%2520%2520site%253A%2520%27https%253A%252F%252Fcarbon.now.sh%27%252C%250A%2520%2520repo%253A%2520%27https%253A%252F%252Fgithub.com%252Fdawnlabs%252Fcarbon%27%252C%250A%2520%2520author%253A%2520%27%2540dawnlabs%27%250A%257D"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        )
      },
      {
        Component: () => (
          <Image
            src='/static/img/alchemy-3.png'
            width={54}
            alt='Alchemy - desktop image merger and converter'
          />
        ),
        portal: () => (
          <BlockLink
            href="https://dawnlabs.io/alchemy"
            target="_blank"
            css={{ overflowY: 'hidden' }}
          >
            <Image bg="black" src="/static/img/alchemy-ss.png" alt="Alchemy" maxWidth="100%" />
          </BlockLink>
        )
      },
      {
        Component: () => (
          <BlockLink
            href="https://github.com/mfix22/tonic"
            target="_blank"
            css={{ overflowY: 'hidden' }}
          >
            <Image
              src="/static/img/tonic.png"
              width={64}
              css={{ marginBottom: '-7px' }}
              alt="Tonic - a bot that eases the burden of OSS maintainers"
            />
          </BlockLink>
        ),
        link: 'https://github.com/mfix22/tonic'
      }
    ]
  },
  {
    id: 'talks',
    examples: [
      {
        link: 'https://www.youtube.com/watch?v=d0xMqeVhlhQ',
        Component: () => (
          <VHS bg="black" py={1} pr={2} pl={3}>
            <Flex p={1} bg="#fdfdfc" color="black" alignItems="center">
              <Text>GraphQL Summit (2018)</Text>
              <Image
                ml={1}
                width={10}
                css={{ display: 'inline-block' }}
                src="https://graphql.org/img/logo.svg"
                alt="GraphQL"
              />
            </Flex>
          </VHS>
        ),
        portal: () => (
          <IFrame
            src="https://www.youtube.com/embed/d0xMqeVhlhQ?autoplay=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={true}
          />
        )
      }
    ]
  },
  {
    id: 'writing',
    examples: [
      {
        link: 'Writing',
        Component: Books
      }
    ]
  },
  {
    id: 'misc.',
    examples: [
      {
        Component: () => (
          <BlockLink href="http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503" target="_blank">
            <Relative bg="black" p="2px">
              <Absolute
                top={24}
                left={-1}
                css={{ transform: 'rotate(-45deg)', fontFamily: 'monospace' }}
              >
                <Text fontSize={0} color="red">
                  US Patent #20150321727
                </Text>
              </Absolute>
              <Image
                src="/static/img/bandwagon.png"
                width={80}
                alt="Band Wagon: Patent #US 20150321727 A1"
              />
            </Relative>
          </BlockLink>
        )
      },
      {
        Component: () => (
          <Relative bg="black" p="2px">
            <Image
              src="/static/img/transcend.png"
              width={72}
              alt="Transcend Madison Innovation Competition"
            />
          </Relative>
        ),
        portal: () => (
          <IFrame
            src="https://www.youtube.com/embed/yQlxCwhH9-s"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen={true}
          />
        ),
        link: 'https://transcenduw.com/'
      },
      {
        Component: () => (
          <Flex flexDirection="column" alignItems="center">
            <Circle bg="#aaa" mb="-2px" />
            <Triangle color="black">
              <Triangle color="#78D1E8" mt="1px" />
            </Triangle>
            <Frame mb={4}>
              <BlockLink title="Link to Emily Hansel's portfolio site" href="https://emilyhansel.me" target="_blank">
                {/* TODO */}
                <Flex color="black" bg="white" css={{width: "72px", height:"72px"}} />
              </BlockLink>
            </Frame>
          </Flex>
        )
      }
    ]
  }
]

class Project extends React.Component {
  select = () => this.props.updatePortal(this.props.portal)

  render() {
    const { Component } = this.props

    return (
      <Box onClick={this.select} mr={4}>
        <Component />
      </Box>
    )
  }
}

const Projects = props => {
  return (
    <Flex width={1 / 2} flexDirection="column" alignItems="flex-end">
      {/* Old borders: #C5A48A */}
      {sections.map(section => (
        <Flex
          key={section.id}
          css={{ borderBottom: '12px solid #936948' }}
          pl={2}
          mb={3}
          alignItems="flex-end"
        >
          <Box mr={6}>
            <Text fontSize={5}>{section.id}</Text>
          </Box>
          {section.examples.map((proj, i) => (
            <Project key={i} updatePortal={props.updatePortal} {...proj} />
          ))}
        </Flex>
      ))}
    </Flex>
  )
}

export default Projects
