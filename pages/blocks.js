import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'

const range = (l, fn) => Array.from({ length: l }, fn)

const ran = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

const color = () => '#' + ran(16777215).toString(16)

const Cell = styled.div.attrs({
  style: ({ width, height, bg }) => ({
    width,
    height,
    background: bg,
  }),
})``

const Slider = styled.input.attrs({
  type: 'range',
})`
  margin: 0;
  padding: 0;
  appearance: none;
  background: #eee;
  outline: none;
  transform: rotate(-90deg);

  &::-webkit-slider-thumb {
    appearance: none;
    outline: none;
    width: ${(props) => props.size || 2 * 8}px;
    height: ${(props) => props.size || 2 * 16}px;
    background: rgb(77, 196, 252);
    cursor: pointer;
  }
`

export const RandomGrid = ({ width = 500, height = 500, size, count, colorCount }) => {
  const grid = range(size, () => range(size, () => 1))
  const blocks = range(count, () => [ran(size - 1), ran(size - 1)])
  const colors = range(colorCount, color)

  blocks.forEach(([x, y], i) => {
    grid[x][y] = colors[i % colors.length]
  })

  return (
    <Box width={width} height={height}>
      {grid.map((row, i) => (
        <Flex key={i}>
          {row.map((cell, j) => (
            <Cell width={width / size} height={height / size} bg={cell} key={j} />
          ))}
        </Flex>
      ))}
    </Box>
  )
}

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: 10,
      count: 80,
      colorCount: 50,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { size } = this.state

    return (
      <Box width="100%" bg="white" py={5} style={{ height: '100vh' }}>
        <Flex>
          <Flex flexDirection="column" width="50%" alignItems="center" justifyContent="center">
            <RandomGrid {...this.state} />
          </Flex>
          <Flex flexDirection="column" width="50%" alignItems="center" justifyContent="center">
            <Flex>
              <Slider
                name="size"
                min="1"
                max="30"
                step="1"
                value={this.state.size}
                onChange={this.handleChange}
              />
              <Slider
                name="count"
                min="1"
                max={4 * size ** 2}
                step="1"
                value={this.state.count}
                onChange={this.handleChange}
              />
              <Slider
                name="colorCount"
                min="1"
                max="100"
                step="1"
                value={this.state.colorCount}
                onChange={this.handleChange}
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    )
  }
}

export default Index
