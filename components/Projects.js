import React from 'react'
import ReactDOM from 'react-dom'
import {Heading, Flex, Box, Text, Border, Image, BlockLink} from 'rebass'
import Modal from './Modal';

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
          <iframe
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
          css: {marginBottom: '-11px'},
          width: 72
        },
        link: 'https://dawnlabs.io/alchemy'
      },
      {
        img: {
          src: '/static/img/tonic.png',
          width: 64,
          css: {marginBottom: '-7px'},
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
        img: {
          src: 'https://graphql.org/img/logo.svg',
          width: 72
        },
        portal: () => (
          <iframe
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
    examples: []
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
        link: 'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503',
      },
      {
        img: {
          src: '/static/img/tm.png',
          width: 64
        },
        link: 'http://transcenduw.com/',
      }
    ]
  }
]

class Project extends React.Component {
  state = {
    clicked: false
  }

  select = () => this.setState({clicked: true})
  unselect = () => this.setState({clicked: false})

  render () {
    const proj = this.props
    const child = <Image {...proj.img} />

    return (
      <Modal open={true} onClickAway={this.unselect}>
        <BlockLink cursor="pointer" onClick={this.select} key={proj.link} href="#!" mr={4} >
          {child}
          {this.state.clicked && proj.portal && (
            ReactDOM.createPortal(proj.portal(), document.getElementById('portal'))
          )}
        </BlockLink>
      </Modal>
    )
  }
}

const Projects = () => {
  return (
    <Flex width={1/2} flexDirection="column" alignItems="flex-end">
      {sections.map(section => (
        <Flex key={section.id} css={{borderBottom: '14px solid #C5A48A'}} pl={2} mb={4} alignItems="flex-end">
          <Box mr={6}>
            <Text fontSize={5}>{section.id}</Text>
          </Box>
          {section.examples.map(proj => <Project key={proj.link} {...proj} />)}
        </Flex>
      ))}
    </Flex>
  )
}

export default Projects
