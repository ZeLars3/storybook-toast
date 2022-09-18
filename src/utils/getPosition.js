import { POSITIONS } from 'constants/index'

export const getPosition = position => {
  switch (position) {
    case POSITIONS.Top_Right:
      return `top: 10px; right: 10px;`
    case POSITIONS.Bottom_Right:
      return `bottom: 10px; right: 10px;`
    case POSITIONS.Top_Left:
      return `top: 10px; left: 10px;`
    case POSITIONS.Bottom_Left:
      return `bottom: 10px; left: 10px;`
  }
}
