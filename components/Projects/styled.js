import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Image as BaseImage } from 'rebass/styled-components'

export const VHS = styled(Flex)`
  font-family: 'Reenie Beanie', cursive;
  font-display: swap;
  cursor: pointer;
  height: 24px;
  font-size: 18px;
  vertical-align: middle;
  border-radius: 1px;
`

export const Image = styled(BaseImage)`
  max-width: ${(props) => props.maxWidth || 'none'};
  cursor: pointer;
`

export const Frame = styled(Box)`
  border: 4px solid #ab7036;
  border-right-color: #503516;
  border-bottom-color: #ab7036;
  border-left-color: #7c5227;
`

export const Triangle = styled(Box)`
  display: flex;
  justify-content: center;
  width: 0;
  height: 0;

  ${(props) => `
    border-left: ${props.width || 40}px solid transparent;
    border-right: ${props.width || 40}px solid transparent;
    border-bottom: ${props.height || 12}px solid ${props.color};
  `};
`

export const Circle = styled(Box)`
  width: 3px;
  height: 3px;
  border-radius: 99999px;
  z-index: 100;
`
