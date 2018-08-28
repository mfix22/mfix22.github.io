import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
  Heading,
  Flex,
  Box,
  Text,
  Border,
  Image as BaseImage,
  BlockLink,
  Link,
  Truncate,
  Relative,
  Absolute
} from 'rebass'
import Modal from './Modal'

import Feed from 'feed-to-json-promise'
import writings from '../static/writings.json'
const feed = new Feed()

const VHS = styled(Flex)`
  font-family: 'Reenie Beanie', cursive;
  font-display: swap;
  cursor: pointer;
  height: 24px;
  font-size: 18px;
  vertical-align: middle;
  border-radius: 1px;
`

const Image = styled(BaseImage)`
  cursor: pointer;
`

const Frame = styled(Box)`
  border: 4px solid #ab7036;
  border-right-color: #503516;
  border-bottom-color: #ab7036;
  border-left-color: #7c5227;
`

const Triangle = styled(Box)`
  display: flex;
  justify-content: center;
  width: 0;
  height: 0;

  ${props => `
    border-left: ${props.width || 40}px solid transparent;
    border-right: ${props.width || 40}px solid transparent;
    border-bottom: ${props.height || 12}px solid ${props.color};
  `};
`

const Circle = styled(Box)`
  width: 2px;
  height: 2px;
  border-radius: 99999px;
`

class IFrame extends React.Component {
  state = {
    loading: true,
    count: 0
  }

  onLoad = () => this.setState({ loading: false })

  componentDidMount() {
    const component = this
    this.interval = setInterval(() => {
      component.setState(({ count }) => ({ count: (count + 1) % 3 }))
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { count } = this.state
    return (
      <Flex justifyContent="center" alignItems="center" width="100%">
        {this.state.loading && (
          <Box>
            <Text textAlign="center" fontWeight="bold">
              {'.'.repeat(count + 1)}
            </Text>
          </Box>
        )}
        <iframe
          style={{ display: this.state.loading ? 'none' : 'block' }}
          {...this.props}
          onLoad={this.onLoad}
        />
      </Flex>
    )
  }
}

const colors = [
  '#463730',
  '#1F5673',
  '#759FBC',
  '#90C3C8',
  '#9C9BC6',
  '#50723C',
  '#7B7554',
  '#475B63',
  '#FFAD69',
  '#53599A'
]
class Books extends React.Component {
  state = writings
  componentDidMount() {
    // TODO
    // feed.load('https://medium.com/feed/@fixitup2')
    //   .then(feed => this.setState(feed))
    //   .catch(console.error)
  }

  render() {
    if (this.state.title) {
      return (
        <Flex alignItems="flex-end">
          {this.state.items.map((item, i) => (
            <BlockLink href={item.link} target="_blank">
              <Border
                key={item.guid}
                bg={colors[i]}
                p={1}
                border={1}
                borderColor="rgba(0,0,0, 0.5)"
                css={{
                  height: 'auto',
                  maxHeight: '175px',
                  borderRadius: '2px',
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  fontFamily: "'Bitter', serif",
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <Truncate fontSize={0}>{item.title}</Truncate>
              </Border>
            </BlockLink>
          ))}
        </Flex>
      )
    }
    return null
  }
}

const sections = [
  {
    id: 'tools',
    examples: [
      {
        img: {
          src: 'https://carbon.now.sh/static/brand/icon.png',
          width: 64
        },
        link: 'https://carbon.now.sh',
        portal: () => (
          <IFrame
            src="https://carbon.now.sh/embed"
            width="100%"
            height="101%"
            frameBorder="0"
          />
        )
      },
      {
        img: {
          src: '/static/img/alchemy.png',
          css: { marginBottom: '-11px' },
          width: 72
        },
        portal: proj => (
          <BlockLink
            href={proj.link}
            target="_blank"
            css={{ overflowY: 'hidden' }}
          >
            <Image bg="black" src="/static/img/alchemy-ss.png" alt="Alchemy" />
          </BlockLink>
        ),
        link: 'https://dawnlabs.io/alchemy'
      },
      {
        img: {
          src: '/static/img/tonic.png',
          width: 64,
          css: { marginBottom: '-7px' }
        },
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
    id: 'art',
    examples: [
      {
        Component: () => (
          <Flex flexDirection="column" alignItems="center">
            <Circle bg="#aaa" mb="-1px" />
            <Triangle color="black">
              <Triangle color="#78D1E8" mt="1px" />
            </Triangle>
            <Frame mb={2}>
              <Image
                src="/static/img/emily.png"
                width={72}
                alt="Emily Hansel"
              />
            </Frame>
          </Flex>
        ),
        link: 'https://emilyhansel.me',
        portal: proj => (
          <Link href={proj.link}>
            <Image src="/static/img/emily.gif" alt="Emily Hansel dancing" />
          </Link>
        )
      }
    ]
  },
  {
    id: 'misc',
    examples: [
      {
        Component: proj => (
          <BlockLink href={proj.link} target="_blank">
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
              <Image src={proj.image} width={80} alt={proj.description} />
            </Relative>
          </BlockLink>
        ),
        image: '/static/img/bandwagon.png',
        description: 'Band Wagon: Patent #US 20150321727 A1',
        link:
          'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503'
      },
      {
        Component: proj => (
          <Relative bg="black" p="2px">
            <Image src={proj.image} width={72} alt={proj.description} />
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
        image: '/static/img/tm.png',
        description: 'Transcend Madison Innovation Competition',
        link: 'https://transcenduw.com/'
      }
    ]
  }
]

class Project extends React.Component {
  state = {
    clicked: false
  }

  select = () => this.setState({ clicked: true })
  unselect = () => this.setState({ clicked: false })

  render() {
    const proj = this.props
    const child = proj.img ? (
      <Image {...proj.img} />
    ) : (
      <proj.Component {...proj} />
    )

    return (
      <Modal open={true} onClickAway={this.unselect}>
        <Box onClick={this.select} key={proj.link} href={proj.link} mr={4}>
          {child}
          {this.state.clicked &&
            proj.portal &&
            ReactDOM.createPortal(
              proj.portal(proj),
              document.getElementById('portal')
            )}
        </Box>
      </Modal>
    )
  }
}

const Projects = () => {
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
          {section.examples.map(proj => (
            <Project key={proj.link} {...proj} />
          ))}
        </Flex>
      ))}
    </Flex>
  )
}

export default Projects
