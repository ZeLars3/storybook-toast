import { Icon, Text, Button } from 'components'
import { ICONS } from 'constants/icons'
import {
  ToastWrapper,
  CancelWrapper,
  Container,
  IconWrapper,
} from './styled'

export const Toast = ({ toast, handleClick }) => {
  const deleteToast = () => {
    handleClick(toast.id)
  }

  const {
    backgroundColor,
    padding,
    color,
    icon,
    description,
  } = toast

  return (
    <ToastWrapper color={backgroundColor} padding={padding}>
      <CancelWrapper color={color}>
        <Button
          icon={ICONS.Close}
          handleClick={deleteToast}
        />
      </CancelWrapper>
      <Container color={color}>
        <IconWrapper color={color}>
          <Icon icon={icon} />
        </IconWrapper>
        <Text text={description} />
      </Container>
    </ToastWrapper>
  )
}
