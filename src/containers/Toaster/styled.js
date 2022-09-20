import styled from 'styled-components'

import { ANIMATION } from 'styles'
import { getPosition } from 'utils'

export const ModalStyles = styled.div`
  position: absolute;
  margin: 15px;
  ${({ position }) => getPosition(position)}
  animation: ${({ animation }) => animation} 0.9s;
  ${ANIMATION}
`
