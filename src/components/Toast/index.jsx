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

  return (
    <ToastWrapper
      color={toast.backgroundColor}
      padding={toast.padding}>
      <CancelWrapper color={toast.color}>
        <Button
          icon={ICONS.Close}
          handleClick={deleteToast}
        />
      </CancelWrapper>
      <Container color={toast.color}>
        <IconWrapper color={toast.color}>
          <Icon icon={toast.icon} />
        </IconWrapper>
        <Text text={toast.description} />
      </Container>
    </ToastWrapper>
  )
}
