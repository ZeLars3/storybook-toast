import styled from 'styled-components'

import { ANIMATION } from 'styles'
import { getPosition } from 'utils'

export const ToastWrapper = styled.div`
  position: absolute;
  transition: transform 0.6s ease-in-out;
  animation: ${({ animation }) => animation} 0.9s;
  ${({ position }) => getPosition(position)}
  ${ANIMATION}
`
