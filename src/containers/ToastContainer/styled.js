import styled from 'styled-components'

import { getPosition } from 'utils'

export const ToastWrapper = styled.div`
  position: absolute;
  transition: transform 0.6s ease-in-out;
  animation: ${({ animation }) => animation} 0.9s;
  ${({ position }) => getPosition(position)}

  @keyframes swipe-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes swipe-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes swipe-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes swipe-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes close-in-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes close-in-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`
