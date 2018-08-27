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
  Truncate
} from 'rebass'
import Modal from './Modal'

import Feed from 'feed-to-json-promise'
const feed = new Feed()
import writings from '../static/writings.json'

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
    console.log(this.state)
    if (this.state.title) {
      return (
        <Flex alignItems="flex-end">
          {this.state.items.map((item, i) => (
            <Border
              key={item.guid}
              bg={colors[i]}
              p={1}
              border={1}
              borderColor="rgba(0,0,0, 0.5)"
              css={{
                height: 'auto',
                maxHeight: '160px',
                borderRadius: '2px',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              <Truncate fontSize="12px">{item.title}</Truncate>
            </Border>
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
          <Link href={proj.link} target="_blank">
            <Image bg="black" src="/static/img/alchemy-ss.png" alt="Alchemy" />
          </Link>
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
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/d0xMqeVhlhQ?autoplay=0"
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
        img: {
          src: '/static/img/emily.png',
          width: 64
        },
        link: 'https://emilyhansel.me',
        portal: proj => <IFrame src={proj.link} width="100%" height="100%" />
      }
    ]
  },
  {
    id: 'misc',
    examples: [
      {
        img: {
          src: '/static/img/bandwagon.png',
          width: 64
        },
        link:
          'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503'
      },
      {
        img: {
          src: '/static/img/tm.png',
          width: 64
        },
        link: 'http://transcenduw.com/'
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
        <Box
          cursor="pointer"
          onClick={this.select}
          key={proj.link}
          href={proj.link}
          mr={4}
        >
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
          css={{ borderBottom: '14px solid #936948' }}
          pl={2}
          mb={4}
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
