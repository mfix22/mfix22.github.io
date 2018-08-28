import React from 'react'
import { Flex, BlockLink, Truncate, Border } from 'rebass'
import styled from 'styled-components'
import Feed from 'feed-to-json-promise'

import writings from '../static/writings.json'
const feed = new Feed()

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

const Book = styled(Border)`
  height: auto;
  max-height: 175px;
  min-height: 100px;
  border-radius: 2px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: 'Bitter', serif;

  &:hover {
    transform: translateY(-4px);
  }
`

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
            <BlockLink key={item.guid} href={item.link} target="_blank">
              <Book
                bg={colors[i]}
                p={1}
                border={1}
                borderColor="rgba(0,0,0, 0.5)"
              >
                <Truncate fontSize={0}>{item.title}</Truncate>
              </Book>
            </BlockLink>
          ))}
        </Flex>
      )
    }
    return null
  }
}

export default Books
