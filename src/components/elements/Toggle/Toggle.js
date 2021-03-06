import { Text, Flex, Box, Caps } from 'components/elements'
import React, { useState } from 'react'
import styled from 'styled-components'
import noop from 'lodash/noop'

import ButtonBase from '../Button/ButtonBase'

const ButtonToggle = styled(ButtonBase)`
  box-shadow: none;

  &:hover {
    cursor: ${props => (props.active ? 'auto' : 'pointer')};
  }
`

ButtonToggle.defaultProps = {
  bg: 'transparent',
  py: 0,
  px: 0,
  borderRadius: 0
}

function Toggle ({ onChange, children, defaultValue }) {
  const [active, setActive] = useState(defaultValue || children[0])

  return (
    <Flex data-toggle width='100%'>
      <Box border={1} borderColor='black05' borderRadius={2}>
        {children.map((value, index) => {
          const isLast = index + 1 === children.length
          const isActive = active === value

          const setAsActive = value => () => {
            if (value !== active) {
              setActive(value)
              onChange(value)
            }
          }

          return (
            <Text
              as='span'
              key={value}
              borderRight={!isLast ? 1 : null}
              borderColor={!isLast ? 'black05' : null}
            >
              <ButtonToggle
                style={{ minWidth: '64px' }}
                active={isActive}
                onClick={setAsActive(value)}
              >
                <Caps
                  fontWeight={!isActive ? 'normal' : 'bold'}
                  color={isActive ? 'black80' : 'black40'}
                  fontSize={0}
                >
                  {value}
                </Caps>
              </ButtonToggle>
            </Text>
          )
        })}
      </Box>
    </Flex>
  )
}

Toggle.defaultProps = {
  onChange: noop
}

export default Toggle
